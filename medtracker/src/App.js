import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Business from "./pages/Business";
import Subscription from "./Components/Subscription/Subscription";
import HelloLogin from "./Components/Login/Login";
import Login from "./Components/Login/intropage";
import Terms from "./Components/Login/Terms";
import Profile from "./pages/Profile";
import Popup from "./Components/Popup";
import NewsPage from "./pages/News";
import Home from "./pages/Home";
import Professionals from "./pages/Professionals";
import About from "./pages/About";
import FAQ from "./pages/Faq";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<HelloLogin />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/loginintro" element={<Login />} />
        <Route path="/sub" element={<Subscription />} />
        <Route path="/business" element={<Business />} />
        <Route path="/professional" element={<Professionals/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/pop" element={<Popup />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
