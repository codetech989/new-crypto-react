import React from 'react';
import { Login } from "./component/UI/RegEmail/Login/Login";
import { CreateNear } from "./component/UI/RegEmail/CreateNearAccount/CreateNearAccount";
import { Verification } from "./component/UI/RegEmail/Verification/Verification";
import './App.css'
import { BrowserRouter, Route,Routes } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Login/>}/>
                  <Route path='/createnear' element={<CreateNear />}/>
                  <Route path='/verification' element={<Verification />}/>
              </Routes>
      </BrowserRouter>
  );
}

export default App;