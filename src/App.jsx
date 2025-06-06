
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
            <Route path="/destination" element={<div className="container mx-auto px-4 py-8">Destination Page</div>} />
            <Route path="/packages" element={<div className="container mx-auto px-4 py-8">Packages Page</div>} />
            <Route path="/blogs" element={<div className="container mx-auto px-4 py-8">Blogs Page</div>} />
            <Route path="/about-us" element={<div className="container mx-auto px-4 py-8">About Us Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
