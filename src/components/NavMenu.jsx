import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavMenu = ({ isClose }) => {
  const navigate = useNavigate()

  // AGREGADO: verifica si hay sesión y redirige según corresponda
  const handleMisClases = () => {
    const savedClient = JSON.parse(sessionStorage.getItem('portalClient') || 'null')
    if (savedClient) {
      navigate('/portal/mis-clases', { state: { client: savedClient } })
    } else {
      navigate('/portal')
    }
    isClose()
  }

  const menuItems = [
    { name: "Inicio", link: "/" },
    { name: "Planes", link: "/planes" },
    { name: "Sobre Nosotros", link: "/sobre-nosotros" },
    { name: "Contacto", link: "/contacto" },
    { name: "Login", link: "/admin/login" },
  ];

  return (
    <nav className="w-full fixed right-0 h-screen bg-white z-10 lg:static lg:h-auto lg:bg-transparent">
      <ul className="flex flex-col gap-6 mt-10 font-semibold px-6 text-lg lg:flex-row lg:mt-0">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              onClick={isClose}
              className={({ isActive }) =>
                isActive
                  ? "border-secondary border-l-4 px-2 lg:py-2 lg:bg-secondary lg:text-white lg:border-b lg:border-l-0 lg:rounded-lg"
                  : "border-l-4 border-transparent"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        {/* AGREGADO: Mis clases con lógica propia */}
        <li>
          <button
            onClick={handleMisClases}
            className="border-l-4 border-transparent font-semibold text-lg cursor-pointer"
          >
            Mis clases
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;