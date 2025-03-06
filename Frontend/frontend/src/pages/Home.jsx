import { useEffect, useState } from "react";
import { getCompanyFiles } from "../../api/files";

const Home = () => {
  const [files, setFiles] = useState([]);
  const companyKey = "123456"; // Simulierter Firmen-Key

  useEffect(() => {
    const fetchFiles = async () => {
      const data = await getCompanyFiles(companyKey);
      setFiles(data);
    };
    fetchFiles();
  }, []);

  return (
    <div>
      <h1>Dateien deines Unternehmens</h1>
      <ul>
        {files.map((file) => (
          <li key={file._id}>
            {file.filename} - <a href={file.url}>Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
