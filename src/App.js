
import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TranscationList } from './components/TranscationList';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TranscationList />
      </div>
    </div>
  ); 
}

export default App;
