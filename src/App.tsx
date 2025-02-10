import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Login from './auth/Login/login';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [cookies] = useCookies(["user"]);
  const isAuthenticated = cookies.user === "test";
  console.log(cookies);
  
  return (
    <Router>
      {cookies.user && window.location.pathname === "/" && (window.location.href = "/home")}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={!isAuthenticated && window.location.pathname !== "/about" ? <Navigate to="/login" /> : null} />
      </Routes>
    </Router>
  )
}

export default App
