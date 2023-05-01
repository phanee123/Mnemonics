import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ResultsProvider } from "./context/Results";
import ImageFlash from "./pages/ImageFlash";
import Instructions from "./pages/Instructions";
import PageNotFound from "./pages/PageNotFound";
import Ready from "./pages/Ready";
import ExitWithDownloadExcel from "./pages/ExitWithDownloadExcel";
import Intervention from "./pages/intervention";
import UserInput from "./pages/UserInput";
import LastPage from "./pages/LastPage";

import "./App.css";

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <ResultsProvider>
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/image-flash" element={<ImageFlash />} />
            <Route path="/ready" element={<Ready />} />
            <Route path="/intervention" element={<Intervention />} />
            <Route path="/exitWithExcel" element={<ExitWithDownloadExcel />} />
            <Route path="/inputs" element={<UserInput />} />
            <Route path="/lastactivity" element={<LastPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ResultsProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
