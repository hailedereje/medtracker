import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./components/Footer";
import Business from "./pages/Business";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="business" element={<Business/>}/>
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
