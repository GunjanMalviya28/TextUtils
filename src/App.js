// import logo from './logo.svg';
// import { useState } from 'react';

import './App.css';

//  import About from './components/About';
 import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // const [mode,setMode]= useState('light');
  return (
    <>
   {/* <About/> */}
   <Navbar title = "Textutils" />
   <div className="container my-3">
   <TextForm heading = "Enter the text to analyse below"/>
   </div>
    </>
  );
}

export default App;
