import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import HeroCard from "./Components/HeroCard";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Order from "./Components/Order";
import Services from "./Components/Services";
import Business from "./pages/Business";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
