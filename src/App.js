import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StockPage from './components/StockPage'
import StockItem from './components/StockItem'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StockPage />} />
        <Route exact path="/stockpage" element={<StockPage />} />
        <Route exact path="/stockitem" element={<StockItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
