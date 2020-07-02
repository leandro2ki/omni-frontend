import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = 'https://omnistack-backend-1.herokuapp.com';

function App() {
  const [jwt, setJwt] = useState(null);
  const [foods, setFoods] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const getJwt = async () => {
    const { data } = await axios.get(`${apiUrl}/jwt`, {
      withCredentials: true,
      headers: {
        AuthSafy: 'uahsoiudhfuahsd',
      },
    });
    setJwt(data.token);
  };

  const getFoods = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/foods`, {
        withCredentials: true,
        headers: {
          CustomHeader: 'uahsoiudhfuahsd',
        },
      });
      setFoods(data);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  return (
    <>
      <section style={{ marginBottom: '10px' }}>
        <button onClick={() => getJwt()}>Get JWT</button>
        {jwt && (
          <pre>
            <code>{jwt}</code>
          </pre>
        )}
      </section>
      <section>
        <button onClick={() => getFoods()}>Get Foods</button>
        <ul>
          {foods.map((food, i) => (
            <li>{food.description}</li>
          ))}
        </ul>
        {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
      </section>
    </>
  );
}

export default App;
