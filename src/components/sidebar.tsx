"use client";
import "../components/css/sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const [isSidebarClosed, setSidebarClosed] = useState<boolean>(true);
  const [activeItem, setActiveItem] = useState<string>("");

  const handleToggleSidebar = () => {
    setSidebarClosed((prev) => !prev);
  };

  const handleItemClick = (href: string) => {
    setActiveItem(href);
  };

  const menuItems = [
    { href: "#cadastros", icon: "person-lines-fill", text: "Equipes" },
    { href: "#serviços", icon: "tools", text: "Equipamentos" },
    { href: "#veiculos", icon: "car-front-fill", text: "Veículos" },
    { href: "#financeiro", icon: "currency-dollar", text: "Financeiro" },
  ];

  const bottomMenuItems = [
    { href: "#ajustes", icon: "gear", text: "Ajustes" },
    { href: "#sair", icon: "box-arrow-left", text: "Sair" },
  ];

  return (
    <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <i className="bi bi-github"></i>
          </span>
          <div className="text header-text">
            <span className="name">Frontend</span>
            <span className="professional">Developer</span>
          </div>
        </div>
        <i className="bi bi-caret-left-fill toggle" onClick={handleToggleSidebar}></i>
      </header>

      <div className={`menu-bar ${!isSidebarClosed ? "openSidebar" : ""}`}>
        <div className="menu">
          <li>
            <a href="#home" className={activeItem === "#home" ? "active" : ""} onClick={() => handleItemClick("#home")}>
              <i className="bi bi-house-fill icon"></i>
              <span className="text nav-text">Empresa</span>
            </a>
          </li>
          <ul className={`menu-links ${!isSidebarClosed ? "openSidebar" : ""}`}>
            {menuItems.map((item, index) => (
              <li className="nav-link" key={index}>
                <a href={item.href} className={activeItem === item.href ? "active" : ""} onClick={() => handleItemClick(item.href)}>
                  <i className={`bi bi-${item.icon} icon`}></i>
                  <span className="text nav-text">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bottom-content">
          {bottomMenuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className={activeItem === item.href ? "active" : ""} onClick={() => handleItemClick(item.href)}>
                <i className={`bi bi-${item.icon} icon`}></i>
                <span className="text nav-text">{item.text}</span>
              </a>
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
}
