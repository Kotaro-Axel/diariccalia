import React from "react"
import "../styles/Topic.css"
import burnoutImage from "../assets/burnout.jpg" // puedes reemplazar esta imagen por la que tengas

export default function Topic() {
  return (
    <section id="topic" className="topic-section py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-5">🔥 Síndrome de Burnout</h2>
        <div className="row align-items-start">
          
          {/* Imagen */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={burnoutImage}
              alt="Síndrome de Burnout"
              className="img-fluid rounded shadow topic-image"
            />
          </div>

          {/* Contenido */}
          <div className="col-md-6">
            <div className="topic-content">
              <h4>¿Qué es el síndrome de burnout?</h4>
              <ul>
                <li>Agotamiento emocional</li>
                <li>Despersonalización</li>
                <li>Reducción de la realización personal</li>
              </ul>

              <div className="row mt-4">
                <div className="col-md-6">
                  <h5>📊 Datos clave</h5>
                  <p><strong>📌 Clasificación:</strong> Incluido en la CIE-11 por la OMS</p>
                  <ul>
                    <li>Mundial: 20%-40% trabajadores</li>
                    <li>Salud: +50% del personal</li>
                    <li>Educación: 30%-40% docentes</li>
                  </ul>

                  <h5>💼 Factores de riesgo</h5>
                  <ul>
                    <li>Jornadas largas</li>
                    <li>Sobrecarga y falta de control</li>
                    <li>Falta de apoyo social o reconocimiento</li>
                  </ul>

                  <h5>⚠️ Síntomas</h5>
                  <ul>
                    <li>Fatiga extrema, insomnio</li>
                    <li>Cinismo, irritabilidad</li>
                    <li>Sentimientos de fracaso</li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <h5>🧠 Consecuencias</h5>
                  <ul>
                    <li>Trastornos de ansiedad o depresión</li>
                    <li>Problemas de sueño y cardiovasculares</li>
                    <li>Baja productividad, ausentismo</li>
                  </ul>

                  <h5>🛠️ Prevención</h5>
                  <ul>
                    <li>Balance vida-trabajo</li>
                    <li>Apoyo psicológico</li>
                    <li>Capacitación en estrés y pausas activas</li>
                  </ul>

                  <h5>🇲🇽 En México</h5>
                  <p>
                    La <strong>NOM-035-STPS-2018</strong> obliga a las empresas a identificar y prevenir riesgos psicosociales como el burnout.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}