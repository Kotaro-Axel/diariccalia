import React from "react"
import "../styles/Information.css"

export default function Information() {
    return (
        <section id="information" className="information-section py-5 bg-white">
            <div className="container">
                {/* Blog de Salud */}
                <div className="blog-section mb-5">
                    <h2 className="section-title">🧠 Consejos y bienestar diario</h2>
                    <ul className="blog-list list-unstyled mb-3">
                        <li>• ¿Cómo saber si tengo presión alta?</li>
                        <li>• 5 síntomas que no debes ignorar</li>
                        <li>• Alimentación básica para prevenir enfermedades</li>
                        <li>• ¿Cuándo debo acudir al médico?</li>
                    </ul>
                    <button className="btn btn-outline-primary btn-lg">Leer más artículos</button>
                </div>

                {/* Testimonios */}
                <div className="testimonials-section mb-5">
                    <h2 className="section-title">💬 Lo que nuestros pacientes dicen</h2>
                    <blockquote className="testimonial">
                        “La atención fue muy rápida y profesional, ¡gracias por tanto!” – <span className="testimonial-author">María G.</span>
                    </blockquote>
                    <blockquote className="testimonial">
                        “Nunca pensé que una clínica económica fuera tan humana. Volveré.” – <span className="testimonial-author">Eduardo M.</span>
                    </blockquote>
                </div>

                {/* Datos Interesantes */}
                <div className="facts-section">
                    <h2 className="section-title">📊 ¿Por qué elegir DIARICCALIA?</h2>
                    <ul className="facts-list list-unstyled mb-4">
                        <li>🩺 <strong>500+ consultas al mes</strong></li>
                        <li>🕒 <strong>Tiempo promedio de espera:</strong> menos de 10 minutos</li>
                        <li>⭐ <strong>98% de satisfacción</strong> según encuestas</li>
                        <li>📅 <strong>Citas en línea</strong> en menos de 2 minutos</li>
                        <li>❤️ Atención enfocada en prevención y cercanía</li>
                        <li>💸 Consulta desde <strong>$70 MXN</strong></li>
                    </ul>
                </div>

                <div className="facts-section">
                <h2 className="section-title">📍Sabias que ...</h2>
                <div className="row">
                    <ul className="facts-details list-unstyled col-md-4">
                    <li>🧬 7 de cada 10 mexicanos padecen sobrepeso u obesidad<br />
                        <small className="fact-explanation">Una de las principales causas de enfermedades crónicas como diabetes e hipertensión.</small>
                    </li>
                    <li>💉 México es uno de los países con mayor número de casos de diabetes tipo 2<br />
                        <small className="fact-explanation">Aproximadamente 12 millones de personas viven con esta condición.</small>
                    </li>
                    <li>🩺 El 80% de las enfermedades se pueden prevenir con chequeos médicos regulares<br />
                        <small className="fact-explanation">La medicina general es clave para detectar a tiempo problemas de salud.</small>
                    </li>
                    <li>👶 El 60% de las consultas pediátricas podrían resolverse desde la medicina general<br />
                        <small className="fact-explanation">Con un enfoque familiar y preventivo.</small>
                    </li>
                    </ul>

                    <ul className="facts-details list-unstyled col-md-4">
                    <li>🫀 Hipertensión: 1 de cada 4 adultos mexicanos la padece y muchos no lo saben<br />
                        <small className="fact-explanation">Una revisión de rutina puede marcar la diferencia.</small>
                    </li>
                    <li>🧪 Las infecciones respiratorias son la causa #1 de consulta médica en México<br />
                        <small className="fact-explanation">Especialmente en temporadas de frío y cambios climáticos.</small>
                    </li>
                    <li>🧠 El estrés y la ansiedad van en aumento: 3 de cada 10 mexicanos lo padecen<br />
                        <small className="fact-explanation">La medicina general también se encarga de tu salud mental.</small>
                    </li>
                    <li>💊 Automedicarse es riesgoso: 8 de cada 10 mexicanos lo hacen sin receta<br />
                        <small className="fact-explanation">Consulta siempre a un profesional.</small>
                    </li>
                    </ul>

                    <ul className="facts-details list-unstyled col-md-4">
                    <li>🥦 Hábitos saludables = menos visitas al hospital<br />
                        <small className="fact-explanation">Dieta, ejercicio y chequeos regulares reducen hasta un 40% las enfermedades crónicas.</small>
                    </li>
                    <li>📅 Una consulta al año puede salvar tu vida<br />
                        <small className="fact-explanation">La prevención es más efectiva (y más económica) que el tratamiento.</small>
                    </li>
                    </ul>
                </div>
                </div>


            </div>
        </section>
    )
}
