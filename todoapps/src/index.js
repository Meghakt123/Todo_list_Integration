import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Addtask from './Addtask';
import Viewtask from './Viewtask';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mynavbar from './Mynavbar';
import Task_update from './Task_update';
// import Homepage from './Homepage';

  



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Mynavbar/>
    {/* <Homepage/> */}
    <App />
    {/* <Addtask/> */}
    {/* <Viewtask/> */}
    <Routes>
    <Route path='/Task_add' element={ <Addtask/>}/>
      <Route path='/Task_get' element={<Viewtask/>}/>
      <Route path ='/Task_update/' element={<Task_update/>}/>

    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
