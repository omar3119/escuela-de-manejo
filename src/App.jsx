import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router";

//CONTEXT
import StateCompo from "./context/StateCompo";

//COMPONENTS
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import BtnWhatsapp from "./components/BtnWhatsapp";

//IMPORT PAGES
import Home from "./pages/Home"
import PricingPlans from "./pages/PricingPlans";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import useScrollToTop from "./components/useScrollToTop";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
  function closeMenu() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // bloquea scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  useScrollToTop();
  return (
    <StateCompo>
      <BtnWhatsapp/>

    <div className="w-full flex flex-col items-center bg-[#F7F9FB] font-display">
      <header className="w-full bg-white  border-b-2  border-[#e8ecf0] flex justify-center">
        <Navbar toggleMenu={toggleMenu} />
      </header>
      <div className={` w-full h-auto`}>
        <main className="relative z-5">
          <Menu isOpen={isOpen} isClose={closeMenu} />

          <Routes>
            <Route path="/" element={<Home isOpen={isOpen} />} />
            <Route path="/planes" element={<PricingPlans />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="relative z-10">
          <Footer />
        </footer>
      </div>
    </div>
    </StateCompo>
  );
}

export default App;
