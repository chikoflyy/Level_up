import React from 'react'

export default function Modal_perfil() {
  return (
    <dialog id="modalProfile">
      <form id="formProfile" method="dialog">
        <h2>Mi Perfil</h2>
        <label>Nombre: <input type="text" id="pfName" /></label><br />
        <label>Preferencias: <textarea id="pfPrefs"></textarea></label><br />
        <p>Mi código de referido: <span id="pfMyRef"></span></p>
        <p>Puntos: <span id="pfPoints">0</span></p>
        <p>Nivel: <span id="pfLevelTag">Bronze</span></p>
        <p id="pfDuocTag" hidden>🎓 Descuento DUOC activo</p>
        <button type="submit">Guardar cambios</button>
        <button type="button" onclick="this.closest('dialog').close()">
          Cerrar
        </button>
      </form>
    </dialog>
  )
}
