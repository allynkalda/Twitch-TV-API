import React, { useState } from 'react';
import './App.css';
import { useFetch } from './api/fetch';
import { URL } from './config/config'
import Navbar from './components/Navbar';
import Main from './components/Main';
import List from './components/List'

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
        <List loading={loading} data={data}></List>
        }
    </div>
  );
}

export default App;
