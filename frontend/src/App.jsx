import Navigation from "./components/navigation/Navigation";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

import AllRoutes from "./AllRoutes";

function App() {
  return (
    <div className="w-full bg-white relative">
      <Navigation />
      <AllRoutes />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default App;
