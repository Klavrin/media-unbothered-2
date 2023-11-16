import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import Header from './components/header'
import Footer from './components/footer'
import PageNotFound from './pages/404-page'
import i18next from 'i18next'

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
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
