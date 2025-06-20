import React from "react"
import logo from "../assets/logo.png"
import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4 py-3 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="DIARICCA Logo" width="60" height="60" className="me-2" />
          <span className="fw-bold text-white">DIARICCALIA</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}