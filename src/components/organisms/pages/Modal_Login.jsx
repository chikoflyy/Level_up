import React from 'react'

export default function Modal_Login() {
  return (
    <dialog id="modalLogin">
      <form id="formLogin" method="dialog">
        <h2>Iniciar Sesión</h2>
        <label>Email: <input type="email" id="liEmail" required /></label><br />
        <label>Contraseña: <input type="password" id="liPass" required /></label
        ><br />
        <button type="submit">Entrar</button>
        <button type="button" onclick="this.closest('dialog').close()">
          Cancelar
        </button>
      </form>
    </dialog>
  )
}
