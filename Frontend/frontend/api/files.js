import axios from 'axios';

const API_URL = "http://localhost:5000"; // Ändere auf deine Backend-URL

// Dateien eines Unternehmens abrufen
export const getCompanyFiles = async (companyKey) => {
    try {
        const response = await axios.get(`${API_URL}/files/${companyKey}`);
        return response.data;
    } catch (error) {
        console.error("Fehler beim Abrufen der Dateien", error);
        return [];
    }
};

// Datei bearbeiten
export const updateFile = async (fileId, newData) => {
    try {
        const response = await axios.put(`${API_URL}/files/${fileId}`, newData);
        return response.data;
    } catch (error) {
        console.error("Fehler beim Aktualisieren der Datei", error);
        return null;
    }
};
