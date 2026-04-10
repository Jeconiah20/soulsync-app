import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Preview from './components/Preview'
import Footer from './components/Footer'
import Today from './components/Today'
import TodaysInsights from './components/TodaysInsights'
import Gratitude from './components/Gratitude'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  if (currentPage === 'today') {
    return (
      <>
        <Header setCurrentPage={setCurrentPage} />
        <Today />
      </>
    )
  }

  if (currentPage === 'insights') {
    return (
      <>
        <Header setCurrentPage={setCurrentPage} />
        <TodaysInsights />
      </>
    )
  }

  if (currentPage === 'gratitude') {
    return (
      <>
        <Header setCurrentPage={setCurrentPage} />
        <Gratitude />
      </>
    )
  }

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      <Hero setCurrentPage={setCurrentPage} />
      <Features />
      <HowItWorks />
      <Preview setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  )
}

export default App