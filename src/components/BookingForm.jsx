import { useState } from 'react';
import { saveLocalStorage, getLocalStorage } from '../helpers/localstorage';
import { showReservationSuccess } from '../helpers/alert';

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    experience: '',
    message: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Guardar datos usando helper
    const reservas = getLocalStorage('reservas') || [];
    reservas.push(form);
    saveLocalStorage('reservas', reservas);
    showReservationSuccess();
    setForm({ name: '', email: '', experience: '', message: '' });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} autoComplete="off">
      <div className="form-group">
        <label htmlFor="name">Nombre completo</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ej. Ana Silva"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tu@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="experience">Nivel de experiencia</label>
        <select
          id="experience"
          name="experience"
          value={form.experience}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="principiante">Principiante (Nunca he tenido un Bonsái)</option>
          <option value="intermedio">Intermedio (Tengo algunos árboles)</option>
          <option value="avanzado">Avanzado (Busco perfeccionar técnicas)</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje (Opcional)</label>
        <textarea
          id="message"
          name="message"
          placeholder="¿Qué te gustaría aprender?"
          value={form.message}
          onChange={handleChange}
          rows={4}
        />
      </div>
      <button className="btn2" type="submit">Enviar Solicitud</button>
    </form>
  );
};

export default BookingForm;
