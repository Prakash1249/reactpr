import React, { useState } from 'react';
import './Calcc.css'

const Calc = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const Num1Change = (e) => setNum1(e.target.value);
  const Num2Change = (e) => setNum2(e.target.value);

  const add = () =>{
    setResult(parseFloat(num1) + parseFloat(num2));
  }
  const sub = () =>{
    setResult(parseFloat(num1) - parseFloat(num2));
  } 
  const mul = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  }
  const div = () => {
    if (num2 == 0) {
      setResult("can't divide by zero");
    }
    else{
        setResult(parseFloat(num1) / parseFloat(num2));
    }
   
  };

  return (
    <div  style={{padding:20}}>
      <input type="number" value={num1} onChange={Num1Change} style={{padding:10,fontSize:20,fontWeight:'bold',margin:10}} />
      <input type="number" value={num2} onChange={Num2Change} style={{padding:10,fontSize:20,fontWeight:'bold',margin:10}} />
      <h1 style={{margin:10}}> {result} </h1>
      <span className='bb' style={{display:'flex',justifyContent:'center',alignItems:'center',justifyContent:'space-around',margin:10}}>
      <button onClick={add} style={{fontSize:30,fontWeight:'bold',width:100,backgroundColor:'greenyellow'}}>+</button>
      <button onClick={sub}  style={{fontSize:30,fontWeight:'bold',width:100,backgroundColor:'red'}}>-</button>
      <button onClick={mul}  style={{fontSize:30,fontWeight:'bold',width:100,backgroundColor:'blueviolet'}}>x</button>
      <button onClick={div}  style={{fontSize:30,fontWeight:'bold',width:100,backgroundColor:'green'}}>/</button>
      </span>
    </div>
  );
};

export default Calc;