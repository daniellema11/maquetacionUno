import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'

const Philosophy = () => {
	return (
		<>
		<NavBar />
		<main>
		<section className="philosophy">
			<div className="container philosophy-content">
				<h1>Menos es más</h1>
				<p>
					Nuestra filosofia se centra en la observacion y el respeto por los ritmos
					naturales. Creemos que cultivar un Bonsai no es solo jardineria, sino una
					meditacion activa.
				</p>
				<p>
					En nuestro estudio, te ensenamos a escuchar al arbol, entendiendo que cada
					corte y cada alambrado debe tener un proposito. Buscamos el equilibrio
					perfecto entre la intervencion humana y la expresion salvaje de la
					naturaleza.
				</p>
			</div>
		</section>
		</main>
		<Footer />
		</>
	)
}

export default Philosophy
