import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Preview from './components/Preview'
import Footer from './components/Footer'
import Today from './components/Today'
import TodaysInsights from './components/TodaysInsights'
import Gratitude from './components/Gratitude'
import Login from './components/Login'
import { supabase } from './supabaseClient'
import MyEntries from './components/MyEntries'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in on app start
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session)
      setLoading(false)
    })

    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="loading-screen">
        <p>Loading...</p>
      </div>
    )
  }

  // If not logged in, show login page
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />
  }

  // If logged in, show app pages
  if (currentPage === 'today') {
    return (
      <>
        <Header setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
        <Today />
      </>
    )
  }

  if (currentPage === 'insights') {
    return (
      <>
        <Header setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
        <TodaysInsights />
      </>
    )
  }

  if (currentPage === 'gratitude') {
    return (
      <>
        <Header setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
        <Gratitude />
      </>
    )
  }

  if (currentPage === 'myentries') {
  return (
    <>
      <Header setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
      <MyEntries />
    </>
  )
}

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />
      <Hero setCurrentPage={setCurrentPage} />
      <Features />
      <HowItWorks />
      <Preview setCurrentPage={setCurrentPage} />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App