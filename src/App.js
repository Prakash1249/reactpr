import logo from './logo.svg';
import './App.css';
import Social from './components/Social'
import Cards from './components/Cards';
import Ipod from './components/Ipod';
import Usese from './components/Usese';
import Home from './components/Home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import List from './components/List';
import Nav from './components/Nav';
import Calc from './components/Calc';
import AboutH from './components/AboutH';



function App() {
  return (
    <>
    {/* <List/> */}
    {/* <Contact/> */}
    

    {/* <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path= '/List' element={<List/>}></Route>
      
    </Routes>
    </BrowserRouter> */}



    {/* <Calc />
    <AboutH /> */}
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path='/AboutH' element={<AboutH/>}></Route>
      <Route path='/Calc' element={<Calc/>}></Route>
      
    </Routes>
    </BrowserRouter>

   
    









   
    {/* <header className='login'>
    <label>Username</label>
    <input  type='text' placeholder='Username'></input>
    <label>Password</label>
    <input type='password' placeholder='Password'></input>
    <button>Login</button>
    </header>

    <article className='table'>
      <tr>
        <th></th>
        <th>9am-10am</th>
        <th>10am-11am</th>
        <th>11am-12pm</th>
        <th>12pm-1pm</th>
        <th>1pm-2pm</th>
        <th>2pm-3pm</th>
        <th>3pm-4pm</th>
      </tr>
      
      <tr>
        <th>Monday</th>
        <td>Maths</td>
        <td>Physics</td>
        <td>Chemistry</td>
        <td>Break</td>
        <td>English Literature</td>
        <td>Hindi vyakaranam</td>
        <td>GYM</td>
      </tr>
      <tr>
        <th>Tuesday</th>
        <td>Physics</td>
        <td>Hindi Sahitya</td>
        <td>Environtal studies</td>
        <td>Break</td>
        <td>Biology</td>
        <td>Maths</td>
        <td>GYM</td>
      </tr>
      <tr>
        <th>Wednesday</th>
        <td>Chemistry</td>
        <td>English Grammer</td>
        <td>Maths</td>
        <td>Break</td>
        <td>English Literature</td>
        <td>Physics</td>
        <td>GYM</td>
      </tr>
      <tr>
        <th>Thursday</th>
        <td>Biology</td>
        <td>Hindi Sahitya</td>
        <td>Chemistry</td>
        <td>Break</td>
        <td>Maths</td>
        <td>Physics</td>
        <td>GYM</td>
      </tr>
      <tr>
        <th>Friday</th>
        <td>English Literature</td>
        <td>Hindi Sahitya</td>
        <td>English Grammer</td>
        <td>Break</td>
        <td>Biology</td>
        <td>Hindi vyakaranam</td>
        <td>GYM</td>
      </tr>

    </article> */}

    {/* <Social name={"Instagram"} namee={"Facebook"} nameee={"Youtube"} ibg={'greenyellow'} fbg={'blue'} ybg={'red'} ilk={'https://www.instagram.com/__pakku__?igsh=MzBmdWo5MXkyN28w'} flk={'https://www.facebook.com/'} ylk={'https://www.youtube.com/'}/> */}
    {/* <Cards l={"Monkey D Luffy"} s={'Sukuna'} i={'Itachi uchiha'} t={'Toji Fushiguro'} limg={'https://lh3.googleusercontent.com/proxy/NO6_GA1AJkdFBU9atg66X7iyIg3LfHBxLH3yPs5Pt7ZlGYrDpgh87N0mEhRp-6ueEmyUrpd-_t_zmd9egAAzmKm8JgZftZAikrv6VEs0kxvmiXbCNwUpdMSkREGyvQk3YWVBlpnLLSqAtdzFQzy5tRXoHOXN4Q'} simg={'https://wallpapercg.com/download/sukuna--19200.jpg'} iimg={'https://i.pinimg.com/originals/e0/3d/77/e03d77f5738538dd8a271117efcb4dc3.jpg'} timg={'https://lh5.googleusercontent.com/proxy/7akjHOuva_coCQ46y02lwCSbGFnnRTkgpp0RgS9rBuCv_bDVwSjo2Dz9wLJboyRiePZDhr2bC-bzY0ZV5lCMcWzkjf8ARWbZMWqurdFPbJ5yzKWoy4w3SIRUg6RcD4d3GXKQjanVDbtNrBcs4A'}/> */}
    {/* <Ipod /> */}
    {/* <Usese /> */}

    {/* <RouterProvider router={router} /> */}




    
    </>

   
  );
}

export default App;







