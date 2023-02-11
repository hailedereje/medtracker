import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Business from "./pages/Business";
import News from "./pages/News";
import Order from "./Components/Order";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroCard from "./Components/HeroCard";
import Hero from "./Components/Hero";
import Profile from "./pages/Profile";
import Popup from "./pages/Popup";



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
        <Route path="/business" element={<Business />} />
        <Route path="/prof" element={<Profile />} />
        <Route path="/pop" element={<Popup />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;