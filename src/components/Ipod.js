import React, { useState } from 'react'
import './Ipodd.css'

const Ipod = () => {
  const [activeindex, setactiveindex] = useState(0);

  const handlerbuttonclick = () =>{
    setactiveindex((previndex)=> (previndex + 1) % 4);
  }
  return (
    <>
    <section>
        <span className='display'>
            <h1>Ipod.js</h1>
            <a className={activeindex === 0 ? 'active' : ''}>Cover Flow</a>
            <a className={activeindex === 1 ? 'active' : ''}>Music</a>
            <a className={activeindex === 2 ? 'active' : ''}>Games</a>
            <a className={activeindex === 3 ? 'active' : ''}>Settings</a>
            
        </span>
        <span className='button'>
          <div>
            <button onClick={()=> handlerbuttonclick(0)}>L</button>
          </div>
          <div>
            <button onClick={()=> handlerbuttonclick(1)}>MENU</button>
            <p className='center'></p>
            <button onClick={()=> handlerbuttonclick(2)}>P</button>
          </div>
          <div>
          <button onClick={()=> handlerbuttonclick(3)}>R</button>
          </div>
        </span>
    </section>
    </>
  )
}

export default Ipod