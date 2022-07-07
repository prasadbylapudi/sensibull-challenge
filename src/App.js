import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Stockpage from './components/stock-page'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stockpage />} />
        <Route exact path="/stocks-page" element={<Stockpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
