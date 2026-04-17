import React from "react";
import { NavLink } from "react-router";

const NavMenu = ({ isClose }) => {
  const menuItems = [
    { name: "Inicio", link: "/" },
    { name: "Planes", link: "/planes" },
    { name: "Sobre Nosotros", link: "/sobre-nosotros" },
    { name: "Contacto", link: "/contacto" },
  ];

  return (
    <nav className="w-full fixed right-0 h-screen  bg-white z-10 lg:static lg:h-auto lg:bg-transparent">
      <ul className="flex flex-col gap-6 mt-10 px-6 text-lg font-semibold lg:flex-row lg:mt-0">
        {menuItems.map((item, index) => (
          <li key={index} className="">
            <NavLink
              to={item.link}
              onClick={isClose}
              
              className={({ isActive }) =>
                isActive
                  ? " border-l-4 px-2 py-1 border-primary text-primary lg:font-extrabold lg:border-b-2 lg:border-l-0"
                  : "border-l-4 px-2  border-transparent"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
