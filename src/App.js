import React from 'react';
import Navbar from './components/navbar/Navbar';
import Heros from './components/hero/Heros';
import Find from './components/find/Find';
import Driver from './components/driver/Driver';
import Luxury from './components/luxury/Luxury';
import Footer from './footer/Footer';
import './index.css'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heros />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
