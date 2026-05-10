import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Backend connection failed"));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Backend Connection Test</h1>

      <div
        style={{
          padding: "20px",
          border: "1px solid gray",
          borderRadius: "10px",
          marginTop: "20px",
          width: "300px"
        }}
      >
        {message}
      </div>
    </div>
  );
}

export default App;