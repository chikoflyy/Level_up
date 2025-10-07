import React from 'react'

export default function ModalReseña() {
  return (
    <dialog id="modalReviews">
      <h2 id="rvTitle"></h2>
      <div id="reviewsList"></div>
      <form id="formReview">
        <label
          >Puntuación:
          <select id="rvRating">
            <option value="5">5 ★</option>
            <option value="4">4 ★</option>
            <option value="3">3 ★</option>
            <option value="2">2 ★</option>
            <option value="1">1 ★</option>
          </select> </label
        ><br />
        <label>Comentario: <textarea id="rvComment" required></textarea></label
        ><br />
        <button type="submit">Enviar reseña</button>
      </form>
      <button onclick="this.closest('dialog').close()">Cerrar</button>
    </dialog>
  )
}
