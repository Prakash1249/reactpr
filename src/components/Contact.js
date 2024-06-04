import React from 'react'

const Contact = () => {
  return (
    <>
    <h1>This is Contact Page</h1>
    <header style={{width:500,height:400}}>
        <input type='text' placeholder='NAME' style={{width:400,height:30,padding:10}}></input>
        <input type='Number' placeholder='Phone' style={{width:400,height:30,padding:10}}></input>
        <input type='text' placeholder='Message' style={{width:400,height:60,padding:10}}></input>
        <button style={{width:80,height:30,fontSize:20,fontWeight:'bold',backgroundColor:'black',color:'whitesmoke',cursor:'pointer'}}>Submit</button>
    </header>
    </>
  )
}

export default Contact