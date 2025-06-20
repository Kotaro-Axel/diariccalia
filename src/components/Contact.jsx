import React from "react"
import "../styles/Contact.css"

export default function Contact() {
  return (
    <section id="contact" className="location-section py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Estamos cerca de ti</h2>
        <p className="text-center mb-5">
          Nos encontramos en una ubicación accesible, conectada al transporte público y pensada para tu
          comodidad.
        </p>

        <div className="row justify-content-center mb-4">
          <div className="col-md-10">
            <div className="map-responsive rounded overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4299482563755!2d-99.16765548469986!3d19.39267878689926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3e246e1c21%3A0x8c6ec0f3dd89bb14!2sCalle%20Salud%20123%2C%20Colonia%20Bienestar%2C%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1682547812345!5m2!1ses!2smx"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación DIARICCA"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <ul className="list-unstyled text-center">
              <li><strong>Dirección:</strong> Calle Salud No. 123, Col. Bienestar, Ciudad de México</li>
              <li><strong>Horarios:</strong> Lunes a sábado de 8:00 a.m. a 7:00 p.m.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled text-center">
              <li><strong>Teléfono:</strong> 55 1234 5678</li>
              <li><strong>WhatsApp:</strong> 55 9876 5432</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}