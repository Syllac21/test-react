import React, { useState } from "react";
import './App.css';
import Header from './component/Header';



function App() {
  const [activePage, setActivePage] = useState('home');
  const handlePageChange = (newPage) => {setActivePage(newPage)}

  return (
    <div className="App">
      <Header page = {activePage} onPageChange = {handlePageChange} />
      {activePage}
    </div>
  );
}

export default App;
