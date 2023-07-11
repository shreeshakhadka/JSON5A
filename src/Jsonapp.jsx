import { useState, useEffect } from 'react';

function Jsonapp() {
  const [typicode, setTypicode] = useState([]);
  
  useEffect(() => {
    getTypicodedata().then(data => {
        setTypicode(data);
    });
  }, []);

  const getTypicodedata = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };

  return (
    <div>
      {typicode.map(user => (
        <div>
              <h1>{user.name}</h1>
              <p>UserName: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p> 
        </div>
      ))}
    </div>
  );
}

export default Jsonapp;