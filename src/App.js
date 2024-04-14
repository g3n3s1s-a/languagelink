import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Groups from "./pages/Groups/Groups";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";



function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
  );
}

export default App;
