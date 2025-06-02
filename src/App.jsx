import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TermosDeServico from './pages/TermosDeServico'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/termos" element={<TermosDeServico />} />
      <Route path="/privacidade" element={<PoliticaPrivacidade />} />
    </Routes>
  )
}

export default App
