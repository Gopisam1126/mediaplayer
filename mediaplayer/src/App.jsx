import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/home";
import Navbar from "./assets/components/navbar";
import Login from "./assets/pages/login";
import Songs from "./assets/pages/songs";
import Signup from "./assets/pages/signup";
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" component={<Home/>}/>
          <Route path="/songs" component={<Songs/>}/>
          <Route path="/login" component={<Login/>}/>
          <Route path="/signup" component={<Signup/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
