import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Business from "./pages/Business";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="business" element={<Business/>}/>

        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
