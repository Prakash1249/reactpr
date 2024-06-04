// import React, { useState } from 'react'

// function Usese(){
//     const [count,setcount] = useState(0);

//     return(
//         <>
//         <p>{count}</p>
//         <button onClick={()=> setcount(count + 1)}>hi</button>
//         </>
//     );
// }

// export default Usese


// import React, { useState } from 'react'

// function Usese(){
//     const [color, setcolor] = useState('red');
//     return(
//         <>
//         <p>hi this is color of {color}</p>
//         <button onClick={()=> setcolor('green') }>click here</button>
//         </>
//     )
// }

// export default Usese






// import React, { useState } from 'react';

// function Usese() {
//   const [isVisible, setIsVisible] = useState(true);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div>
//       {isVisible && <p>This text can be toggled.</p>}
//       <button onClick={toggleVisibility}>
//         {isVisible ? 'Hide' : 'Show'} Text
//       </button>
//     </div>
//   );
// }


// export default Usese












// import React, { useEffect, useState } from 'react'

// function Usese(){
//     const [count, setcount]= useState(100)

//     useEffect(()=>{
//         setTimeout(() => {
//             setcount((count)=> count - 1)
//         }, 2000);
//     });
//     return(
//         <>
//         <h1>{count}</h1>
//         </>
//     )
// }

// export default Usese










// // Use Reducer hook 

// Definition - 
// The useReducer hook is used for state management in React.
// It is an alternative to useState and is useful for managing more complex state logic.
 
// Use CaseuseReducer is particularly helpful when you have complex state logic that
// involves multiple sub-values or when the next state depends on the previous one.




// import React, { useReducer } from 'react'; // Importing React and the useReducer hook from the 'react' library

// // Initial state of
// import React from 'react';
// import ReactDOM from 'react-dom';
// import UseReducer from './Components/UseReducer';

// function App() {
//   return (
//     <div>
//       <h1>Counter with useReducer</h1>
//       <UseReducer />
//     </div>
//   );
// }

// export default App;



// import React, { useReducer } from 'react';

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'reset':
//       return { count: 0 };
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//       <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//     </div>
//   );
// }

// export default Counter;






// import React, { useRef } from 'react';

// function Usese() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

// export default Usese;








// import React, { useState, useRef } from 'react';

// function Usese() {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef();

//   // Update prevCountRef.current with the latest count value after each render
//   useEffect(() => {
//     prevCountRef.current = count;
//   });

//   const prevCount = prevCountRef.current;

//   return (
//     <div>
//       <p>Current count: {count}</p>
//       <p>Previous count: {prevCount !== undefined ? prevCount : 'N/A'}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Usese;




// import React, { useState } from 'react'

// function Usese(){
//     const[count,setcount] = useState(0);

//     return(
//         <>
//         <p>{count}</p>
//         <button onClick={()=>setcount(count + 1)}>click</button>
//         </>
//     )
    
// }

// export default Usese



// import React, { useEffect, useState } from 'react'

// const Usese = () => {
//     const [count, setcount] = useState(500);

//     useEffect(()=>{
//         setTimeout(() => {
//             setcount(count => count - 1)
//         }, 2000);
//     })
//   return (
//     <>
//     <h1>{count}</h1>
//     </>
//   )
// }

// export default Usese




// import React, { useReducer } from 'react';
// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };
// const Counter = () => {
//   const [state, dispatch] = useReducer(counterReducer, { count: 0 });
//   return (
//     <div>
//       <h2>Count: {state.count}</h2>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//     </div>
//   );
// };
// export default Counter;

