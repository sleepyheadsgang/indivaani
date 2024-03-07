import History from "@pages/History"
import Home from "@pages/Home"
import { nanoid } from "nanoid"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

const user = localStorage.getItem('userId')

if (!user) {
  localStorage.setItem('userId', nanoid())
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  )
}

export default App
