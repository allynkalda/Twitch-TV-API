import { useState, useEffect } from 'react';
import { CLIENT_ID, ACCEPT } from '../config/config';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    let h = new Headers();
    h.append('Client-ID', CLIENT_ID);
    h.append('Accept', ACCEPT);
    
    let req = new Request(url, {
      method: 'GET',
      headers: h,
      mode: 'cors'
    });
    
    setLoading(true)
    fetch(req)
        .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('BAD HTTP');
            }
        })
        .then((jsonData) => {
            setData(jsonData);
            setLoading(false);
        })
        .catch((err) => {
            console.log('ERROR: ', err.message);
        })
  }, [url]);
  return [data, loading];
}

export { useFetch };