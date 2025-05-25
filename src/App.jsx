import { useState } from 'react'
import Header from './components/Header'
import Feature from './components/Feature'
import Extension from './components/Extension'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='w-full overflow-hidden'>
          <Header/>
          <Feature/>
          <Extension />
          <FAQ/>
          <Footer/>
      </div>
  )
}

export default App
