import React, { useState } from 'react';
import './App.css';
import { useFetch } from './api/fetch';
import { URL } from './config/config'
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {

const [ bar, setBar ] = useState(false);
const [ data, loading ] = useFetch(URL);
console.log(data);
console.log('loading', loading)
console.log('bar', bar)

const renderBar = () => {
  setBar(!bar);
}

  return (
    <div className="App">
        <h1>Stream Hatchet</h1>
        <Navbar renderBar={renderBar}></Navbar>
        <Main loading={loading} data={data}></Main>
    </div>
  );
}

export default App;
