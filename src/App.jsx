import { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Homepage } from './Components/Homepage';
import { Imagecomponent } from './Components/Imagecomponent';
import { WhatWeDo } from './Components/WhatWeDo';
import { DifferencePage } from './Components/DifferencePage';
import { People } from './Components/People';
import { Form } from './Components/Form';
import ChatBot from './Components/Chatbot';
import { AnimatedWrapper } from './Components/AnimateWrapper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Newsletter } from './Components/Newsletter';

function App() {
  return (
  
      <>
        <Navbar />
        <AnimatedWrapper>
          <div className="flex justify-between">
            <Homepage />
            <Imagecomponent />
          </div>
        </AnimatedWrapper>
        <WhatWeDo />
        <DifferencePage />
        <People />
        <Form />
        <ChatBot />
        <Router>
          <Routes>
              <Route path='/newsletter' element = {<Newsletter></Newsletter>}></Route>
          </Routes>
        </Router>
        
        
      </>
   
  );
}

export default App;
