import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Homepage } from './Components/Homepage'
import { Imagecomponent } from './Components/Imagecomponent'
import { WhatWeDo } from './Components/WhatWeDo'
import { DifferencePage } from './Components/DifferencePage'


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
        
        
        
        
      </>
  )
}

export default App
