import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

import AdminLogin from "./pages/admin/AdminLogin";
import Portal from "./pages/portal/Portal";
import MisClases from "./pages/portal/MisClases";

//CONTEXT
import StateCompo from "./context/StateCompo";

//COMPONENTS
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import BtnWhatsapp from "./components/BtnWhatsapp";
import Header from "./components/Header";

//IMPORT PAGES
import Home from "./pages/Home";
import PricingPlans from "./pages/PricingPlans";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import useScrollToTop from "./components/useScrollToTop";

function PublicLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useScrollToTop();

  return (
    <div className="w-full flex flex-col items-center bg-[#F7F9FB] font-display">
      <BtnWhatsapp />
      
      <Header>
        <Navbar/>
      </Header>
      <div className="w-full h-auto">
        <main className="relative z-5">
          <Menu isOpen={isOpen} isClose={closeMenu} />
          {children}
        </main>
        <footer className="relative z-10">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <StateCompo>
      <Routes>
        {/* Rutas admin y portal sin layout */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/portal" element={<Portal />} />

        <Route path="/portal/mis-clases" element={<MisClases />} />
        {/* Rutas públicas con layout */}
        <Route
          path="/*"
          element={
            <PublicLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/planes" element={<PricingPlans />} />
                <Route path="/sobre-nosotros" element={<About />} />
                <Route path="/contacto" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </PublicLayout>
          }
        />
      </Routes>
    </StateCompo>
  );
}

export default App;
