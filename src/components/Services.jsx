import React, { useState } from "react"
import "../styles/Services.css"
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"
import service4 from "../assets/service4.png"

export default function Services() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    fechaHora: "",
    sintomas: ""
  })
  const [showForm, setShowForm] = useState(false)  // controla visibilidad del formulario

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Gracias por reservar tu consulta, recibirás confirmación por WhatsApp en minutos.")
    setFormData({nombre: "", telefono: "", fechaHora: "", sintomas: ""})
    setShowForm(false) // opcional: ocultar el formulario al enviar
  }

  const toggleForm = () => {
    setShowForm(prev => !prev)
  }

  return (
    <section id="services" className="services-section bg-light py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Servicios Médicos Generales</h2>
        <p className="mb-5">
          En DIARICCALIA ofrecemos atención médica general enfocada en brindarte salud y bienestar diario.
          Nuestro equipo está capacitado para atenderte con profesionalismo y calidez.
        </p>

        <div className="row g-4 mb-5">
          {[service1, service2, service3, service4].map((img, i) => (
            <div className="col-md-3 col-6" key={i}>
              <div className="service-card overflow-hidden rounded-3 shadow-sm">
                <img src={img} className="img-fluid service-img" alt={`Servicio ${i + 1}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-12">
            <ul className="row row-cols-1 row-cols-md-4 g-2 list-unstyled px-3 text-start">
              <li className="col">• Consulta médica general</li>
              <li className="col">• Control de enfermedades crónicas (hipertensión, diabetes)</li>
              <li className="col">• Certificados médicos</li>
              <li className="col">• Revisión general de salud</li>
              <li className="col">• Asesoría y prevención</li>
              <li className="col">• Recetas y seguimiento</li>
            </ul>
          </div>
        </div>

        <h5 className="mb-3">Precio por consulta: <strong>$70 MXN</strong></h5>
        
        {/* Botón para mostrar/ocultar formulario */}
        <button onClick={toggleForm} className="btn btn-primary btn-lg mb-5">
          {showForm ? "Cerrar formulario" : "Agenda tu cita ahora"}
        </button>

        {/* Mostrar formulario sólo si showForm es true */}
        {showForm && (
          <div className="reservation-form mx-auto" style={{maxWidth: "500px", textAlign: "left"}}>
            <h3 className="fw-bold mb-4 text-center">Reserva tu consulta fácilmente</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="nombre" 
                  name="nombre" 
                  value={formData.nombre} 
                  onChange={handleChange} 
                  required 
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono de contacto</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="telefono" 
                  name="telefono" 
                  value={formData.telefono} 
                  onChange={handleChange} 
                  required 
                  placeholder="Ej. 55 1234 5678"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaHora" className="form-label">Fecha y hora deseada</label>
                <input 
                  type="datetime-local" 
                  className="form-control" 
                  id="fechaHora" 
                  name="fechaHora" 
                  value={formData.fechaHora} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sintomas" className="form-label">Síntomas o motivo de consulta</label>
                <textarea 
                  className="form-control" 
                  id="sintomas" 
                  name="sintomas" 
                  rows="3" 
                  value={formData.sintomas} 
                  onChange={handleChange} 
                  placeholder="Describe brevemente tus síntomas o motivo"
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">Confirmar cita</button>
              </div>
            </form>
            <p className="mt-3 text-center text-muted">
              Recibirás una confirmación por WhatsApp en minutos.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
