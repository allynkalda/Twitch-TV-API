import React from 'react';
import './App.css';

function App() {

  const uri = 'https://api.twitch.tv/kraken/streams';

  let h = new Headers();
  h.append('Client-ID', 'e58bb9u3nmtqp4ikxaz1qg05kelpy7l');
  h.append('Accept', 'application/vnd.twitchtv.v5+json');

  let req = new Request(uri, {
    method: 'GET',
    headers: h,
    mode: 'cors'
  });

  fetch(req)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('BAD HTTP');
      }
    })
    .then((jsonData) => {
      console.log(jsonData);
    })
    .catch((err) => {
      console.log('ERROR: ', err.message);
    })



  return (
    <div className="App">
        <h1>Stream Hatchet</h1>
    </div>
  );
}

export default App;
