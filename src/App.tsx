import Home from "@pages/Home"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
