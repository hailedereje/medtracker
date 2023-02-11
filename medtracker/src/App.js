import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Business from "./pages/Business";
import News from "./Components/Home/News";
import Order from "./Components/Home/Order";
import Services from "./Components/Home/Services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroCard from "./Components/Home/HeroCard";
import Hero from "./Components/Home/Hero";
import Subscription from "./Components/Subscription/Subscription";
import HelloLogin from "./Components/Login/Login";
import LoginLogo from "./Components/Login/LoginLogo";
import Login from "./Components/Login/intropage";
import Terms from "./Components/Login/Terms";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Hero />
              <HeroCard />
              <Order />
              <Services />
              <News />
            </>
          }
        />
        <Route path="/login" element={<HelloLogin/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/loginintro" element={<Login/>} />
        <Route path="/business" element={<Business />} />
        <Route path="/sub" element={<Subscription />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
