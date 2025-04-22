import React, { useState, useEffect } from "react";

const API_BASE = "http://localhost:5000";

const App = () => {
  const [folders] = useState(["Visualizations", "Prophet", "ARIMA", "Tensorflow"]);
  const [selectedFolder, setSelectedFolder] = useState("Visualizations");
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/list/${selectedFolder}`)
      .then(res => res.json())
      .then(data => {
        setFiles(data);
        setSelectedFile(""); // Reset preview when folder changes
      })
      .catch(err => console.error("Failed to fetch files:", err));
  }, [selectedFolder]);

  const handleFileClick = (filename) => {
    setSelectedFile(filename);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>📂 Output Viewer</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Select folder: </label>
        <select value={selectedFolder} onChange={(e) => setSelectedFolder(e.target.value)}>
          {folders.map((folder, idx) => (
            <option key={idx} value={folder}>
              {folder}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", gap: "30px" }}>
        <div style={{ width: "30%" }}>
          <h4>Available Files:</h4>
          <ul>
            {files.map((file, idx) => (
              <li key={idx}>
                <button onClick={() => handleFileClick(file)} style={{ border: "none", background: "none", color: "blue", cursor: "pointer" }}>
                  {file}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 1 }}>
          {selectedFile ? (
            <>
              <h4>Preview: {selectedFile}</h4>
              <iframe
                src={`${API_BASE}/get/${selectedFolder}/${selectedFile}`}
                title="Output Preview"
                width="100%"
                height="600px"
                style={{ border: "1px solid #ccc" }}
              ></iframe>
            </>
          ) : (
            <p>Select a file to preview it here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
