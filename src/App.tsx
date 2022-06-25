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
      <Routes>
        <Route path="/" element={<ShiftGenerate/>} />
        <Route path="/arbeitsetting" element={<ArbeitSetting/>} />
        <Route path="/calendar" element={<Calendar/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
