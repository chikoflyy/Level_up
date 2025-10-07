import React from 'react'

export default function Buttom() {
  return (
    <div className="user-controls">
      <button onClick="document.getElementById('modalSignup').showModal()">
        Registrarse
      </button>
      <button onClick="document.getElementById('modalLogin').showModal()">
        Iniciar Sesión
      </button>
      <button onClick={()=>openProfile()}>Mi Perfil</button>
    </div>
  )
}
