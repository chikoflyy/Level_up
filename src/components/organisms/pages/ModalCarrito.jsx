import React from 'react'

export default function ModalCarrito() {
  return (
    <dialog id="modalCart">
      <h2>Mi Carrito</h2>
      <div id="cartItems"></div>
      <p>Subtotal: <span id="sumSubtotal">$0</span></p>
      <p>Descuento DUOC: <span id="sumDuoc">$0</span></p>
      <p>
        Usar puntos: <input type="number" id="pointsToUse" min="0" value="0" />
      </p>
      <p>Descuento por puntos: <span id="sumPoints">$0</span></p>
      <h3>Total: <span id="sumTotal">$0</span></h3>
      <button id="btnCheckout">Finalizar Compra</button>
      <button onclick="this.closest('dialog').close()">Cerrar</button>
    </dialog>
  )
}
