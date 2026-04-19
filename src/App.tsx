import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './pages/Home'
import Interests from './pages/Interests'
import Moods from './pages/Moods'
import Gallery from './pages/Gallery'
import { FloatingChatBot } from './components/common/FloatingChatBot'
import './App.css'

function AppContent() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/moods" element={<Moods />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <FloatingChatBot />
      <Analytics />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
