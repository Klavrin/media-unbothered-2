import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import Header from './components/header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
