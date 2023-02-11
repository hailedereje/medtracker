import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Business from "./pages/Business";
import Professionals from "./professionals/Professionals";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="business" element={<Business/>}/>
          <Route path="professionals" element={<Professionals/>}/>

        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
