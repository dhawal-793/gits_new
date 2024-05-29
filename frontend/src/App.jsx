import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ExtraPage from "./pages/ExtraPage";

function App() {
  return (
    <div className="w-full bg-white ">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<ExtraPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
