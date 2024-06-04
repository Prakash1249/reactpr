import React from 'react';
import './Sl.css'; 



const social = (props) => {
  return (
    <>
        <header className='social'>
        <a href={props.ilk} style={{backgroundColor:(props.ibg)}}>{props.name}</a>
        <a href={props.flk}  style={{backgroundColor:(props.fbg)}}>{props.namee}</a>
        <a href={props.ylk}  style={{backgroundColor:(props.ybg)}}>{props.nameee}</a>
        
        </header>

    </>
  )
}

export default social