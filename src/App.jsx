import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ImageFlash from "./pages/ImageFlash";

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        {/* <ResultsProvider> */}
        <Routes>
          <Route path="/" element={<ImageFlash />} />
        </Routes>
        {/* </ResultsProvider> */}
      </BrowserRouter>
    </main>
  );
}

export default App;
