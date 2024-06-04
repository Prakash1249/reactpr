import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    {/* <span style={{display:'flex',}}>
    <img src='https://e7.pngegg.com/pngimages/54/31/png-clipart-one-piece-pirate-warriors-monkey-d-luffy-trafalgar-d-water-law-gol-d-roger-portgas-d-ace-ace-flag-logo.png' style={{width:60,height:60}}></img>
    <Link to='/Home' style={{textDecoration:'none',color:'white',fontSize:25,fontWeight:'bold',border:'2px solid black',width:100,height:35 ,margin:20, backgroundColor:'black',textAlign:'center'}}>Home</Link>
    <Link to='/List' style={{textDecoration:'none',color:'white',fontSize:25,fontWeight:'bold',border:'2px solid black',width:100,height:35 , margin:20, backgroundColor:'black',textAlign:'center'}}>List</Link>
    <Link to='/Contact' style={{textDecoration:'none',color:'white',fontSize:25,fontWeight:'bold',border:'2px solid black',width:100,height:35, margin:20, backgroundColor:'black',textAlign:'center'}}>Contact</Link>
    </span> */}
    <span>
      <Link to='/Calc' style={{textDecoration:'none',fontSize:25,fontWeight:'bold',border:'2px solid black',width:100,height:35 ,margin:20,textAlign:'center',color:'black'}}>Calculator</Link>
      <Link to='/AboutH' style={{textDecoration:'none',fontSize:25,fontWeight:'bold',border:'2px solid black',width:100,height:35 ,margin:20,textAlign:'center',color:'black'}}>About</Link>
    </span>
    </>
  )
}

export default Nav