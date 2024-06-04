import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <>
    <header>
        <span className='me'>
          <img></img>
          <h1>Prakash</h1>
         </span>
         <span className='luffy'>
          <img src={props.limg} alt='luffy'></img>
          <h1>{props.l}</h1>
        </span>
        <span className='me1'>
          <img></img>
          <h1>me again</h1>
        </span>
        <span className='sukuna'>
            <img src={props.simg} alt='sukuna'></img>
            {/* <img src='https://wallpapercg.com/download/sukuna--19200.jpg'/> */}
            <h1>{props.s}</h1>
        </span>
        <span className='itachi'>
            <img src={props.iimg} alt='itachi'></img>
            <h1>{props.i}</h1>
        </span>
        <span className='toji'>
            <img src={props.timg} alt='toji'></img>
            <h1>{props.t}</h1>
        </span>
        
       
        </header>
    </>
  )
}

export default Cards