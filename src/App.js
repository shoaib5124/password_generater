import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/symbol';
function App() {
  let [uppercase,setuppercase]= useState(false);
  let [lowercase,setlowercase]= useState(false);
  let [number,setnumber]= useState(false);
  let [symbol,setsymbol]= useState(false);
  let [passwordlength,setpasswordlength]= useState(10);
  let [fpass,setpass]= useState("");
  let createPassword =()=>{
    let charSet = "";
    if(uppercase || lowercase || number||symbol){
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbol) charSet+=SC;
      // console.log(charSet,charSet.length);
    }
     let password = "";
     for(let i=0; i<passwordlength; i++){
       password+=charSet[Math.floor(Math.random()*charSet.length)];
     }
    //  console.log(password,password.length);
    setpass(password)
  }
  
    let handleCopy =()=>{
      if(fpass){navigator.clipboard.writeText(fpass)
       .then(()=>{
          alert("password copied")
           setpass("")
      
      })
      .catch((err)=>{
        console.error("failed to copy",err)
      })



      }
      
  }
  return (
    <div className="App">
       <div className="password-gen p-5">
       <h1 className="text-white pt-2 text-2xl font-bold">Password Generater</h1>
        <div className='password'>
      
        <input type='text' readOnly className='p-1 mt-8' value={fpass}></input><button className='btn p-1 mt-8' onClick={handleCopy}>Copy</button>
        </div>
        <div className='passwordlength'>
        <label className='text-white text-1xl'> Password Length</label>
        <input type='number' classNanme='p-1' max={20} min={10} value={passwordlength} onChange={(event)=>setpasswordlength(event.target.value)}></input>
       </div>
       <div className="uppercasel">
        <label className="text-white mt-8">Including Uppercase Letter</label>
        <input type='checkbox' className="mt-8 p-4" checked ={uppercase} onChange={()=>setuppercase(!uppercase)}></input>
       </div>
       <div className="uppercasel">
        <label className="text-white mt-8">Including Lowercase Letter</label>
        <input type='checkbox' className="mt-8 p-4" checked ={lowercase} onChange={()=>setlowercase(!lowercase)}></input>
       </div>
       <div className="uppercasel">
        <label className="text-white mt-8">Including Numbers</label>
        <input type='checkbox' className="mt-8 p-4" checked ={number} onChange={()=>setnumber(!number)}></input>
       </div>
       <div className="uppercasel">
        <label className="text-white mt-8">Including Symbols</label>
        <input type='checkbox' className="mt-8 p-4" checked ={symbol} onChange={()=>setsymbol(!symbol)}></input>
       </div>
       <div className="button">
        <button className='btn2 p-1 mt-8 bg-white' onClick={createPassword}>Generate Password</button>
       </div>
       </div>
      
    </div>
  );
}
export default App;
