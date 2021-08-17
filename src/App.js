// import React, {useState, useEffect} from 'react'
import { Provider } from 'react-redux';
import { saveState, loadState } from './localStorage';
import { createStore } from 'redux';
// import {useCookies} from 'react-cookie'

import './App.css';
import CountComponent from './components/Count';
import Display from './components/display';
import { amountReducer } from './reducers';

const persistedState = loadState()

const store = createStore(amountReducer,  persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  saveState(store.getState())
})


const App = () => {

// const initialState = () => Number(window.localStorage.getItem('counter')) || 0

//   const [counter, setCounter] =useState(initialState)


//   const addCount = (count) =>{
//     // handleCookie()
//     setCounter(counter + count)
    
//   }

//   const lessCount = (count) =>{
//     setCounter(counter - count)
//     // handleCookie()
//   }

//   const resetCount =() =>{
//     setCounter(0);
//     // handleCookie()
   
//   }
 
//   useEffect(() => {
//     window.localStorage.setItem('counter', counter);
//   }, [counter])

//   // const [cookies, setCookie] = useCookies([counter]);
//   // function handleCookie() {
//   //   setCookie("counter", counter, {path:'/'});
//   // }

 



  return (
   <Provider store={store}>
      <div className="App">
      
      {/* {cookies.counter && <p>{cookies.counter}</p>} */}
     {/* <button onClick={handleCookie}>Set Cookie</button> */}

     <Display/>
     <CountComponent />
     
     
    </div>
   </Provider>
  );
}

export default App;
