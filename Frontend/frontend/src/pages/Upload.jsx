import { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const companyKey = "123456"; // Simulierter Firmen-Key
  const userId = "65af12bde78965c23d12fa7b"; // Beispiel-User-ID

  const handleUpload = async () => {
    if (!file) return alert("Bitte eine Datei auswählen!");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);

    try {
      await axios.post("http://localhost:5000/upload", formData);
      alert("Datei erfolgreich hochgeladen!");
    } catch (error) {
      console.error("Fehler beim Hochladen", error);
    }
  };

  return (
    <div>
      <h1>Datei hochladen</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Hochladen</button>
    </div>
  );
};

export default Upload;
