import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import i18next from 'i18next'
import Header from './components/header'
import Footer from './components/footer'
import InteractiveCursor from './components/interactive-cursor'
import LandingPage from './pages/landing-page'
import WebDevelopmentPage from './pages/web-development-page'
import PageNotFound from './pages/404-page'

const App = () => {
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language')
    const language = storedLanguage ? storedLanguage : navigator.language.split('-')[0]

    if (language) i18next.changeLanguage(language)
  }, [])

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <InteractiveCursor />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="web-development" element={<WebDevelopmentPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
