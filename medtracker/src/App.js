import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./Components/Order";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroCard from "./Components/HeroCard";
import Hero from "./Components/Hero";
import Profile from "./pages/Profile";
import Popup from "./pages/Popup";
import News from "./pages/News";
import Business from "./pages/Business";



import Subscription from "./Components/Subscription/Subscription";
import HelloLogin from "./Components/Login/Login";
import Login from "./Components/Login/intropage";
import Terms from "./Components/Login/Terms";
import Profile from "./pages/Profile";
import Popup from "./Components/Popup";
import NewsPage from "./pages/News";
import Business from "./pages/Business";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<HelloLogin />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/loginintro" element={<Login />} />
        <Route path="/sub" element={<Subscription />} />
        <Route path="/business" element={<Business />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pop" element={<Popup />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
