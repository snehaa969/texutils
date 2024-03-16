import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { About } from './Components/About';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null)
    },1500);
  }

  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode =(cls) =>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#073DF4 ';
      showAlert("Dark mode has been enabled", "success")
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
        <Routes> 
        <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, character Counter, Remove extra spaces" mode={mode} showAlert={showAlert} />} />
           <Route path="about" mode={mode} /> 
         </Routes> 
      </div>
      </BrowserRouter>
     <About /> 
    </>
  );
}

export default App;
