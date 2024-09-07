import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dbStatus, setDbStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch database status
    const fetchDbStatus = async () => {
      try {
        const response = await fetch('http://15.206.111.194:3000/api/check-db');
        const data = await response.json();
        
        if (response.ok) {
          setDbStatus(data.message);
        } else {
          setError('Failed to fetch database status');
        }
      } catch (err) {
        setError('Error fetching database status');
      } finally {
        setLoading(false);
      }
    };

    fetchDbStatus();
  }, []);

  return (
    <div className="App">
      <h1>Hello, World IM REACTJS! test3</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Database Status: {dbStatus}</p>
      )}
    </div>
  );
}

export default App;
