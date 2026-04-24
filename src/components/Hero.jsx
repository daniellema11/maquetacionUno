import { NavLink } from 'react-router-dom'

const Hero = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>El arte de la paciencia</h1>
      <p>
        Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
        Un espacio para reconectar con la naturaleza.
      </p>
      <NavLink to="/pages/booking" className="btn">Reserva un taller</NavLink>
    </div>
    <div></div>
  </section>
)

export default Hero;
