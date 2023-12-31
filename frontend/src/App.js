import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import useToken from './components/App/useToken';

function App() {

  const {token, setToken} = useToken()

  if(!token) {
    return <Login setToken={setToken}/>
  }

  return (
      <div className='wrapper'>
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/preferences' element={<Preferences/>}/>
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
