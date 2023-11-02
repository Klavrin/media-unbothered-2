import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import Header from './components/header'
import Footer from './components/footer'

const App = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
