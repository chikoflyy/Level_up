import React from 'react'

export default function Register() {
  return (
        <dialog id="modalSignup">
      <form id="formSignup" method="dialog">
        <h2>Crear Cuenta</h2>
        <label>Nombre: <input type="text" id="suName" required /></label><br />
        <label>Email: <input type="email" id="suEmail" required /></label><br />
        <label
          >Fecha de nacimiento:
          <input type="date" id="suBirth" required /></label
        ><br />
        <label>Contraseña: <input type="password" id="suPass" required /></label
        ><br />
        <label>Código de referido: <input type="text" id="suRef" /></label
        ><br />
        <button type="submit">Registrarme</button>
        <button type="button" onclick="this.closest('dialog').close()">
          Cancelar
        </button>
      </form>
    </dialog>
  )
}
