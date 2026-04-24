import Swal from 'sweetalert2';

export function showReservationSuccess() {
  return Swal.fire({
    title: 'Reservado',
    text: 'Tu solicitud fue registrada correctamente.',
    icon: 'success',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#5d7052'
  });
}
