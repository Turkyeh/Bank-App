import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from "redux";


// https://youtu.be/n7ug8GSufIg


// https://youtu.be/Fq15pkckMqQ

// STore  state
// ACtion peloed data  and type 
// المستخدم بيضغط ع الزر بيعمل حدث 

const initState = {
    accounts : [
            {
              id: 1,
              customerName:"Israa Othman",
              accountNumber: "123456",
              accountType: "Savings"
            },
            {
              id: 2,
              customerName:"Ahmad Zahran",
              accountNumber: "987654",
              accountType: "Student accounts"
            }
    ]
 
}



const increment = () => {
  return {
    type:'INC',
    playload:2
  }

}

const decrement = () => {
  return {
    type:'Dec',
    playload: 1
    

    // stude:[{{id:1},name:"yasmen"},{{id:1},name:"yasmen"},{{id:1},name:"yasmen"}]
  
  }

}
// Reducer  يستفبل الداتا 
// 2>
const counter = (state = 0, action) => {
  // دائما بيرجحع state 
  switch (action.type) {
    case 'INC': return state + action.playload;
    case 'Dec': return state - action.playload;
    // case
    default: return state;
  }
}



// ]Dispatch 


//STORE 
let store = createStore(counter);
// باسم ال reducer
store.subscribe(()=>console.log(store.getState()) )



// dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
