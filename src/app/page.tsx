"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const instagramUrl = "https://www.instagram.com/nutr_icionefectiva/";
const whatsappUrl = "https://wa.me/50685268640?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20con%20Nutrici%C3%B3n%20Efectiva.";

const services = [
  {
    title: "Control de peso",
    description:
      "Diseñamos estrategias sostenibles para ayudarte a alcanzar y mantener un peso saludable sin recurrir a restricciones extremas.",
  },
  {
    title: "Nutrición deportiva",
    description:
      "Optimiza tu rendimiento, recuperación y composición corporal con una alimentación adaptada a tu disciplina y objetivos deportivos.",
  },
  {
    title: "Nutrición clínica",
    description:
      "Planes nutricionales especializados para apoyar el tratamiento y control de diversas condiciones de salud.",
  },
  {
    title: "Educación alimentaria",
    description:
      "Aprende a tomar decisiones conscientes sobre tu alimentación y desarrolla hábitos saludables para toda la vida.",
  },
  {
    title: "Planes familiares",
    description:
      "Promovemos una alimentación equilibrada para todos los miembros del hogar, adaptándonos a las necesidades de cada familia.",
  },
  {
    title: "Sobrepeso y obesidad",
    description:
      "Acompañamiento integral y sin juicios para mejorar tu salud y bienestar mediante cambios progresivos y sostenibles.",
  },
];
export default function Home() {
const [mensajeEnviado, setMensajeEnviado] = useState(false);

useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  if (params.get("enviado") === "true") {
    setMensajeEnviado(true);

    const timer = setTimeout(() => {
      setMensajeEnviado(false);

      // Limpia la URL para que no reaparezca al refrescar
      window.history.replaceState({}, "", "/");
    }, 5000);

    return () => clearTimeout(timer);
  }
}, []);
  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Nutrición Efectiva inicio">
          <Image
            src="/images/logo.jpg"
            alt="Logo Nutrición Efectiva"
            width={180}
            height={90}
            priority
          />
        </a>
        <nav className="nav" aria-label="Menú principal">
          <a href="#servicios">Servicios</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#agenda">Agenda</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
        </nav>
        <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
      </header>

      <section id="inicio" className="hero section">
        <div className="heroText">
          <p className="eyebrow">Nutrición personalizada</p>
          <h1>Nutrición personalizada para una vida saludable.</h1>
          <p className="lead">
            Te acompaño a construir hábitos sostenibles, mejorar tu relación con la comida y alcanzar tus objetivos con un plan adaptado a tu estilo de vida.
          </p>
          <div className="actions">
            <a className="button primary" href="#agenda">Agendar cita</a>
            <a className="button secondary" href="#servicios">Ver servicios</a>
          </div>
        </div>

        <div className="heroImage" aria-label="Fotografía profesional de Francella">
          <span className="float food1">🥑</span>
          <span className="float food2">🍓</span>
          <span className="float food3">🍅</span>
          <span className="float food4">🌿</span>
          <Image src="/images/francella.jpg" alt="Francella, nutricionista" width={760} height={760} priority />
        </div>
      </section>

      <section id="servicios" className="section services">
        <p className="eyebrow center">Servicios</p>
        <h2>Planes diseñados para tus metas reales</h2>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="icon">✓</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="sobre-mi" className="section about">
        <div className="aboutContent">
          <div>
            <p className="eyebrow">Sobre Francella</p>

            <h2>
              Nutrición con cercanía, evidencia y acompañamiento real.
            </h2>

            <p className="aboutText">
              Creo firmemente que la nutrición debe adaptarse a las personas
              y no al revés. Mi objetivo es acompañarte a construir hábitos
              sostenibles, mejorar tu relación con la comida y alcanzar tus
              metas desde un enfoque humano, práctico y basado en evidencia.
            </p>

            <p className="aboutText">
              Más que una dieta, busco brindarte herramientas para que
              desarrolles una relación saludable con la alimentación que
              puedas mantener a lo largo de tu vida.
            </p>
          </div>

          <div className="credentialsCard">
            <h3>Lic. Francella Rojas Castro</h3>

            <p className="credentialNumber">
              Nutricionista colegiada · CPN 2169-16
            </p>

            <ul className="credentialsList">
              <li>🎓 Licenciatura en Nutrición.</li>
              <li>🥗 Consulta privada desde 2016.</li>
              <li>📏 Evaluación antropométrica.</li>
              <li>🏃 Certificación en entrenamiento funcional.</li>
              <li>🧠 Formación en neuronutrición infantil.</li>
              <li>🎤 Experiencia en ferias y educación en salud.</li>
            </ul>
          </div>
        </div>

        <div className="highlightsGrid">
          <div className="highlightCard">
            <span>🎓</span>
            <h3>Formación profesional</h3>
            <p>Licenciada en Nutrición por la Universidad de San José.</p>
          </div>

          <div className="highlightCard">
            <span>🧠</span>
            <h3>Formación continua</h3>
            <p>Capacitación en neuronutrición infantil y actualización constante.</p>
          </div>

          <div className="highlightCard">
            <span>🏃</span>
            <h3>Enfoque integral</h3>
            <p>Certificación en entrenamiento funcional para complementar tus objetivos.</p>
          </div>

          <div className="highlightCard">
            <span>❤️</span>
            <h3>Hábitos sostenibles</h3>
            <p>Planes adaptados a tu realidad, sin dietas extremas.</p>
          </div>
        </div>
      </section>

      <section id="agenda" className="section booking">
        
        <div>
          
          <p className="eyebrow light">Agenda tu consulta</p>
          <h2>Da el primer paso hacia una vida más saludable</h2>
          <p>Escríbenos por WhatsApp, Instagram o completa el formulario y te contactaremos para coordinar tu cita.</p>
        </div>
        <form
          className="form"
          action="https://formsubmit.co/nutricionefectiva2169@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="Nueva solicitud de cita - Nutrición Efectiva" />
          <input type="hidden" name="_captcha" value="true" />
          <input
            type="hidden"
            name="_next"
            value="https://nutricion-efectiva.vercel.app/?enviado=true"
          />

          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            required
            minLength={3}
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            required
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            required
            pattern="[0-9]{8}"
            title="Ingresa un número de teléfono válido de 8 dígitos."
          />

          <textarea
            name="mensaje"
            placeholder="Cuéntanos qué objetivo te gustaría trabajar"
            rows={4}
            required
            minLength={10}
          />
          <button className="button yellow" type="submit">Enviar solicitud</button>
          
        </form>

      </section>

      <footer className="footer">
        <p>© 2026 Nutrición Efectiva. Todos los derechos reservados.</p>
        <div>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </footer>
        {mensajeEnviado && (
          <div className="successToast">
            ✅ ¡Gracias! Hemos recibido tu solicitud y nos pondremos en contacto contigo muy pronto.
          </div>
        )}
      <a
        className="whatsappFloat"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        💬 WhatsApp
      </a>
      
    </main>
    
  );
}
