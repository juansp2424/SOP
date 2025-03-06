const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const Company = require('./models/Company');
const User = require('./models/User');
const File = require('./models/File');
const bcrypt = require('bcryptjs');

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // JSON-Parser
app.use(cors()); // CORS aktivieren

// Verbindung zur Datenbank
connectDB();

// Test-Route
app.get('/', (req, res) => {
    res.send('Backend läuft!');
});

// 🔹 Unternehmen erstellen
app.post('/companies', async (req, res) => {
    const { name, companyKey } = req.body;
    try {
        const company = new Company({ name, companyKey });
        await company.save();
        res.status(201).json(company);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Benutzer registrieren (mit Passwort-Hashing)
app.post('/users', async (req, res) => {
    const { name, email, password, companyKey } = req.body;
    try {
        const company = await Company.findOne({ companyKey });
        if (!company) return res.status(404).json({ error: "Firma nicht gefunden" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, company: company._id });

        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Datei hochladen
app.post('/files', async (req, res) => {
    const { filename, userId } = req.body;
    try {
        const user = await User.findById(userId).populate('company');
        if (!user) return res.status(404).json({ error: "Benutzer nicht gefunden" });

        const file = new File({
            filename,
            url: `/uploads/${filename}`,
            uploadedBy: user._id,
            company: user.company._id
        });

        await file.save();
        res.status(201).json(file);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 🔹 Dateien eines Unternehmens abrufen
app.get('/files/:companyKey', async (req, res) => {
    try {
        const company = await Company.findOne({ companyKey: req.params.companyKey });
        if (!company) return res.status(404).json({ error: "Firma nicht gefunden" });

        const files = await File.find({ company: company._id }).populate('uploadedBy', 'name email');
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: "Serverfehler" });
    }
});

// 🔹 Datei bearbeiten
app.put('/files/:fileId', async (req, res) => {
    try {
        const { filename, url } = req.body;
        const file = await File.findById(req.params.fileId);

        if (!file) return res.status(404).json({ error: "Datei nicht gefunden" });

        if (filename) file.filename = filename;
        if (url) file.url = url;

        await file.save();
        res.json({ message: "Datei erfolgreich aktualisiert", file });
    } catch (err) {
        res.status(500).json({ error: "Serverfehler beim Aktualisieren der Datei" });
    }
});

// Server starten
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
