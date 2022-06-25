import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShiftGenerate } from './ShiftGenerate';
import { ArbeitSetting } from './ArbeitSetting';
import { Calendar } from './Calendar';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Routes>
        <Route path="/" element={<ShiftGenerate/>} />
        <Route path="/arbeitsetting" element={<ArbeitSetting/>} />
        <Route path="/calendar" element={<Calendar/>} />
      </Routes>
      </header>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
