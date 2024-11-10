import React from "react";

function App() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  React.useEffect(() => {
    if (!apiBaseUrl) {
      console.error("API Base URL is undefined!");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/`);
        const data = await response.json();
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [apiBaseUrl]);

  return (
    <div className="App">
      <h1>Quantum Hackathon App</h1>
      <p>Welcome to our Quantum Hackathon App!!!!</p>
    </div>
  );
}

export default App;
