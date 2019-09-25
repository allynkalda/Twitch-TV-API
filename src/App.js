import React, { useState } from 'react';
import './App.css';
import { useFetch } from './api/fetch';
import { URL } from './config/config'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Bar from './components/Bar'

function App() {

const [ bar, setBar ] = useState(false);
const [ data, loading ] = useFetch(URL);
console.log(data);
console.log('loading', loading)
console.log('bar', bar)

const renderBar = () => {
  setBar(!bar);
}

const renderMain = () => {
  setBar(false);
}

  return (
    <div className="App">
        <h1>Stream Hatchet</h1>
        <Navbar renderMain={renderMain} renderBar={renderBar}></Navbar>
        { !bar ?
        <Main loading={loading} data={data}></Main> :
        <Bar loading={loading} data={data}></Bar>
        }
    </div>
  );
}

export default App;
