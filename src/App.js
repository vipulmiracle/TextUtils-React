import React ,{ useState } from "react";
import "./App.css";
// import About from "./componets/About";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";


function App() {

  const [mode , setMode] = useState('light');
  const modeChange = ()=>{
      // console.log("chnage");
      if(mode === 'light'){ 
        setMode('dark');
        document.body.style.backgroundColor = 'black';
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} modeChange={modeChange} />
      <TextForm mode={mode} />
      {/* <About mode={mode} /> */}
    </>
  );
}

export default App;
