import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StockPage from './components/StockPage'
import Quote from './components/Quote'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StockPage />} />
        <Route exact path="/stockpage" element={<StockPage />} />
        <Route path="quotes/:symbol" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
