// About.jsx
import React from "react"
import "../styles/About.css"
import missionIcon from "../assets/mission-icon.png"
import visionIcon from "../assets/vision-icon.png"
import valuesIcon from "../assets/values-icon.png"

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Conoce DIARICCALIA</h2>
        <p className="text-center mb-5">
          Somos una clínica que nace con un propósito: cuidar tu salud todos los días. Creemos en la atención
          médica accesible, humana y constante. Nuestro equipo médico está aquí para escucharte, atenderte y
          acompañarte en tu bienestar.
        </p>

        <div className="row justify-content-center text-center g-4">
          <div className="col-md-4">
            <div className="about-card p-4 shadow-sm bg-white rounded h-100">
              <img src={missionIcon} alt="Misión" className="about-icon mb-3" />
              <h5 className="fw-bold text-primary">Misión</h5>
              <p>Brindar atención médica general accesible, ética y eficiente.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card p-4 shadow-sm bg-white rounded h-100">
              <img src={visionIcon} alt="Visión" className="about-icon mb-3" />
              <h5 className="fw-bold text-primary">Visión</h5>
              <p>Ser tu clínica de confianza, siempre presente cuando la necesites.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card p-4 shadow-sm bg-white rounded h-100">
              <img src={valuesIcon} alt="Valores" className="about-icon mb-3" />
              <h5 className="fw-bold text-primary">Valores</h5>
              <p>Compromiso – Empatía – Accesibilidad – Respeto – Calidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
