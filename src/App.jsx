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
      <AnimatedWrapper>
         <WhatWeDo />
       
      </AnimatedWrapper>
      <AnimatedWrapper>
        <DifferencePage />
      </AnimatedWrapper>
      <AnimatedWrapper>
        <People />
      </AnimatedWrapper>
      <AnimatedWrapper>
        <Form />
      </AnimatedWrapper>
      <AnimatedWrapper>
        <ChatBot />
      </AnimatedWrapper>
    </>
  );
}

export default App;
