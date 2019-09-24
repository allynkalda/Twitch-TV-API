import React from 'react';
import './App.css';
import { useFetch } from './api/fetch';
import { URL } from './config/config'
import Sidebar from './components/Navbar';
import Main from './components/Main';
import Grid from '@material-ui/core/Grid';



function App() {

const [ data, loading ] = useFetch(URL);
console.log(data);
console.log(loading)


  return (
    <div className="App">
        <h1>Stream Hatchet</h1>
        <Sidebar></Sidebar>
        <Main loading={loading} data={data}></Main>
    </div>
  );
}

export default App;
