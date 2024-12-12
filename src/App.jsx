import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Homepage } from './Components/Homepage'
import { Imagecomponent } from './Components/Imagecomponent'
import { WhatWeDo } from './Components/WhatWeDo'
import { DifferencePage } from './Components/DifferencePage'
import { People } from './Components/People'
import { Form } from './Components/Form'

function App() {
  const [count, setCount] = useState(0)
  

  
  return (
    
      <>
        <Navbar></Navbar>
        <div className='flex justify-between'>
        <Homepage></Homepage>
        <Imagecomponent></Imagecomponent>
        </div>
        <WhatWeDo></WhatWeDo>
        <DifferencePage></DifferencePage>
        <People></People>
        <Form></Form>
        
        
        
        
      </>
  )
}

export default App
