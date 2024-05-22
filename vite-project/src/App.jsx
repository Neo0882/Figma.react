import { useState } from 'react'
import './App.css'
import Header from './components/Header/header' 
import Section_1 from './components/section_1/section_1'
import Section_2 from './components/section_2/section_2'
import Section_3 from './components/section_3/section_3'
import Section_4 from './components/section_4/section_4'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Section_1/>
     <Section_2/>
     <Section_3/>
     <Section_4/>
     <Footer/>
    </>
  )
}

export default App
