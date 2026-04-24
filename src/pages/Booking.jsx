import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import BookingForm from '../components/BookingForm.jsx'

const Booking = () => {
  return (
    <>
      <NavBar />
      <main>
        <section className="booking-section">
          <h1>Reserva un Taller</h1>
          <p className="booking-desc">
            Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
          </p>
          <BookingForm />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Booking;