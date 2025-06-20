import React from "react"
import "../styles/Footer.css"

export default function Footer() {
  return (
    <footer className="footer-section bg-primary text-light py-4">
      <div className="container text-center text-md-start">
        <div className="row">

          <div className="col-md-4 mb-3 mb-md-0">
            <h3 className="footer-logo">DIARICCALIA</h3>
            <p>La clínica que a diario te cuida</p>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Contacto</h5>
            <p>📍 Calle Salud No. 123, Col. Bienestar, CDMX</p>
            <p>📞 Tel: 55 1234 5678</p>
            <p>💬 WhatsApp: 55 9876 5432</p>
          </div>

          <div className="col-md-4">
            <h5>Horarios</h5>
            <p>Lunes a sábado: 8:00 a.m. - 7:00 p.m.</p>
            <h5>Síguenos</h5>
            <div className="social-icons">
              <a href="#" aria-label="Facebook" className="social-link">📘</a>
              <a href="#" aria-label="Instagram" className="social-link">📸</a>
              <a href="#" aria-label="Twitter" className="social-link">🐦</a>
            </div>
          </div>

        </div>
        <hr className="footer-divider" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} DIARICCALIA. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
