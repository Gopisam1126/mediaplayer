import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/home";
import Login from "./assets/pages/login";
import Songs from "./assets/pages/songs";
import Signup from "./assets/pages/signup";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/songs" element={<Songs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
