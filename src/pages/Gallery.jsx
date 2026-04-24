import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'

const trees = [
  'Arce Japonés',
  'Pino Negro',
  'Ficus Retusa',
  'Olmo Chino',
  'Enebro',
  'Azalea'
]

const Gallery = () => {
  return (
    <>
      <NavBar />
      <main>
        <section className="gallery-section">
          <h1>Nuestra Colección</h1>
          <p className="gallery-desc">
            Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.
          </p>
          <div className="gallery-grid">
            {trees.map((name, i) => (
              <Card key={i}>{name}</Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Gallery;
