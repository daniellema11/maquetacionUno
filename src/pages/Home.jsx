import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>El arte de la paciencia</h1>
            <p>
              Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
              Un espacio para reconectar con la naturaleza.
            </p>
            <button className="btn">Reserva un taller</button>
          </div>
          <div></div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
