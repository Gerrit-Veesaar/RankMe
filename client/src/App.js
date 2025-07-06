import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get("/api/message")
      .then((res) => setMessage(res.data))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>RankMe Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
