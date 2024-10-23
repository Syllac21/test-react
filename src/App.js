import React, { useState } from "react";
import './App.css';
import Header from './component/Header';
import Footer from './component/footer';
import About from './component/about';
import Home from './component/home';



function App() {
  const [activePage, setActivePage] = useState('home');
  const handlePageChange = (newPage) => {setActivePage(newPage)}

  return (
    <div className="App h-screen">
      <Header page = {activePage} onPageChange = {handlePageChange} />
      {(activePage === 'Home' ? <Home/> : activePage === 'About' ? <About /> : activePage === 'Journey' ? 'journey' : (activePage === 'Contact' ? 'contact' : ''))}
      <Footer/>
    </div>
  );
}

export default App;
