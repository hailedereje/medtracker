import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Business from "./pages/Business";
import News from "./Components/News";
import Order from "./Components/Order";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroCard from "./Components/HeroCard";
import Hero from "./Components/Hero";


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
        <Route path="/bussiness" element={<Business />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;