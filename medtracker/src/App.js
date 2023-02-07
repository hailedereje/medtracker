import { BrowserRouter, Routes, Route } from "react-router-dom";
import Business from "./pages/Business";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="business" element={Business}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
