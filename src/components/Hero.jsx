import React from "react"
import "../styles/Hero.css" 
import heroBg from "../assets/bgalt.png"

export default function Hero() {
  return (
    <section
      className="hero-section d-flex align-items-center text-white text-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative"
      }}
    >
      <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}></div>
      <div className="container position-relative z-2 custom-container-bg p-5 rounded-3">
        <h1 className="display-3 fw-bold">DIARICCALIA</h1>
        <p className="lead fs-4">La clínica que a diario te cuida</p>
        <p className="mt-3">Recibe atención médica general rápida, confiable y cercana. Haz tu cita en minutos.</p>
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <a href="#contact" className="btn btn-primary btn-lg px-4">Agenda tu cita</a>
          <a href="#services" className="btn btn-outline-light btn-lg px-4">Conoce nuestros servicios</a>
        </div>
      </div>
    </section>
  )
}
