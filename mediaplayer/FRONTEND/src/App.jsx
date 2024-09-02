import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/home";
import Login from "./assets/pages/login";
import Songs from "./assets/pages/songs";
import Signup from "./assets/pages/signup";
import UploadSong from "./assets/pages/uploadSong";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/songs" element={<Songs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/upload" element={<UploadSong/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
