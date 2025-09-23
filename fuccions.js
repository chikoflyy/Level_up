document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // Datos iniciales de productos
  // ===============================
  const products = [
    // ===== Juegos de mesa =====
    {
      id: "JM001",
      name: "Catan",
      category: "juegos de mesa",
      price: 29990,
      img: "https://m.media-amazon.com/images/I/81sDS1Q6X9S._AC_SX679_.jpg",
      desc: "Juego de estrategia para 3-4 jugadores.",
    },
    {
      id: "JM002",
      name: "Carcassonne",
      category: "juegos de mesa",
      price: 24990,
      img: "https://m.media-amazon.com/images/I/81lvb6kQqtL._AC_SX679_.jpg",
      desc: "Juego de fichas ideal para 2-5 jugadores.",
    },
    {
      id: "JM003",
      name: "Ticket to Ride",
      category: "juegos de mesa",
      price: 32990,
      img: "https://m.media-amazon.com/images/I/81VBtTD5tWL._AC_SX679_.jpg",
      desc: "Juego de trenes y rutas por todo el mundo.",
    },

    // ===== Accesorios =====
    {
      id: "AC001",
      name: "Control Xbox Series X",
      category: "accesorios",
      price: 59990,
      img: "https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_SY450_.jpg",
      desc: "Control inalámbrico compatible con Xbox y PC.",
    },
    {
      id: "AC002",
      name: "Auriculares HyperX Cloud II",
      category: "accesorios",
      price: 89990,
      img: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SY450_.jpg",
      desc: "Auriculares gaming con micrófono y sonido 7.1.",
    },
    {
      id: "AC003",
      name: "Teclado mecánico Razer BlackWidow",
      category: "accesorios",
      price: 129990,
      img: "https://m.media-amazon.com/images/I/81qH7xXQJSL._AC_SX679_.jpg",
      desc: "Teclado mecánico con switches Razer y RGB.",
    },

    // ===== Consolas =====
    {
      id: "CO001",
      name: "PlayStation 5",
      category: "consolas",
      price: 549990,
      img: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_SY450_.jpg",
      desc: "Consola de última generación con gráficos impresionantes.",
    },
    {
      id: "CO002",
      name: "Xbox Series X",
      category: "consolas",
      price: 499990,
      img: "https://m.media-amazon.com/images/I/61JGKhqxHxL._AC_SY450_.jpg",
      desc: "Consola potente con soporte para 4K y juegos en línea.",
    },
    {
      id: "CO003",
      name: "Nintendo Switch OLED",
      category: "consolas",
      price: 399990,
      img: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SY450_.jpg",
      desc: "Consola híbrida portátil con pantalla OLED.",
    },

    // ===== Computadores =====
    {
      id: "CG001",
      name: "PC Gamer ASUS ROG Strix",
      category: "computadores gamers",
      price: 1299990,
      img: "https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_SY450_.jpg",
      desc: "Potente PC gamer con componentes de última generación.",
    },
    {
      id: "CG002",
      name: "PC Gamer MSI Aegis",
      category: "computadores gamers",
      price: 1099990,
      img: "https://m.media-amazon.com/images/I/719TV+LFkvL._AC_UY218_.jpg",
      desc: "PC gaming con refrigeración líquida y RGB.",
    },

    // ===== Sillas =====
    {
      id: "SG001",
      name: "GTPLAYER Silla Gamer",
      category: "sillas gamers",
      price: 349990,
      img: "https://m.media-amazon.com/images/I/61vEYQ0Um4L._AC_SX679_.jpg",
      desc: "Soporte ergonómico y personalización ajustable.",
    },
    {
      id: "SG002",
      name: "Silla Gamer DXRacer Formula",
      category: "sillas gamers",
      price: 299990,
      img: "https://m.media-amazon.com/images/I/61g-1pkm-tL._AC_SX679_.jpg",
      desc: "Diseño ergonómico con reposabrazos ajustables.",
    },

    // ===== Mouse =====
    {
      id: "MS001",
      name: "Mouse Logitech G502 HERO",
      category: "mouse",
      price: 49990,
      img: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SY450_.jpg",
      desc: "Sensor de alta precisión y botones programables.",
    },
    {
      id: "MS002",
      name: "Razer DeathAdder V2",
      category: "mouse",
      price: 44990,
      img: "https://m.media-amazon.com/images/I/61HIJnrPojL._AC_SX466_.jpg",
      desc: "Mouse ergonómico con alta velocidad y precisión.",
    },

    // ===== Mousepad =====
    {
      id: "MP001",
      name: "Razer Goliathus",
      category: "mousepad",
      price: 29990,
      img: "https://m.media-amazon.com/images/I/81ACRfPHn-L._AC_SX466_.jpg",
      desc: "Superficie amplia con iluminación RGB.",
    },
    {
      id: "MP002",
      name: "Corsair MM300 PRO",
      category: "mousepad",
      price: 19990,
      img: "https://m.media-amazon.com/images/I/61n4oNwr+iL._AC_SX466_.jpg",
      desc: "Mousepad duradero y resistente al desgaste.",
    },

    // ===== Poleras =====
    {
      id: "PP001",
      name: "Poleron Gamer Level-Up",
      category: "polerones gamers personalizados",
      price: 14990,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_774887-MLC83973951563_042025-F-scott-pilgrim-level-up-poleron-canguro.webp",
      desc: "Polera gamer personalizada con el logo Level Up.",
    },
    {
      id: "PP001",
      name: "Poleron Minecraft",
      category: "polerones gamers personalizados",
      price: 23192,
      img: "https://http2.mlstatic.com/D_NQ_NP_979957-MLC76491126266_052024-O-poleron-de-nino-minecraft-clasico-jockey-azul-poleron-canguro-con-capucha-interior-de-polar.webp",
      desc: "Polera con el logo del famoso juego Minecraft.",
    },
    {
      id: "PP002",
      name: "Polera Fortnite",
      category: "poleras personalizadas",
      price: 12990,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_687056-MLC85110928663_052025-F.webp",
      desc: "Polera con estampado del popular juego Fortnite.",
    },
    {
      id: "PP002",
      name: " Polera Manga Corta Zelda Cod 15",
      category: "poleras personalizadas",
      price: 11990,
      img: "https://http2.mlstatic.com/D_NQ_NP_634019-MLC78421233551_082024-O-polera-manga-corta-zelda-cod-15.webp",
      desc: "Polera con estampado del popular juego Zelda.",
    },
  ];

  const categoryData = {
  pc: {
    title: "Origen de Productos",
    items: [
      "Detallar los fabricantes y distribuidores de cada producto para asegurar la autenticidad y calidad.",
      "Ofrecer sugerencias de productos basadas en el historial de compras y las preferencias del usuario.",
      "Resaltar cómo las compras apoyan a la comunidad gamer y los eventos locales."
    ]
  },
  consola: {
    title: "Origen de Productos",
    items: [
      "Detalles de fabricantes oficiales de consolas y accesorios.",
      "Recomendaciones basadas en preferencias y juegos comprados anteriormente.",
      "Impacto en la comunidad gamer y soporte a eventos locales."
    ]
  }
};



  // ===============================
  // Estado global
  // ===============================
  let cart = [];
  let currentUser = null;
  let reviews = {};
  let points = 0;

  // ===============================
  // Helpers
  // ===============================
  const formatPrice = (value) => value.toLocaleString("es-CL") + " CLP";

  // ===============================
  // Render productos
  // ===============================
  function renderProducts(list = products) {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = "";
    list.forEach((p) => {
      const card = document.createElement("div");
      card.className = "card product";
      card.innerHTML = `
  <div class="thumb-container">
    <img src="${p.img}" alt="${p.name}" class="thumb">
  </div>
  <h4>${p.name}</h4>
  <p>${p.desc}</p>
  <p class="price">${formatPrice(p.price)}</p>
  <div class="row gap">
    <button class="btn btn-primary" onclick="addToCart('${
      p.id
    }')">Agregar</button>
    <button class="btn btn-outline" onclick="openReviews('${
      p.id
    }')"> Reseñas</button>
  </div>
`;

      grid.appendChild(card);
    });
  }
  renderProducts();

  // ===============================
  // Carrito
  // ===============================

  // ===============================
  // Carrito
  // ===============================

 // Función para agregar al carrito
window.addToCart = function (id) {
  const item = products.find((p) => p.id === id); // busca producto en el catálogo
  const found = cart.find((i) => i.id === id); // busca si ya existe en el carrito

  if (found) {
    found.qty++; // si ya existe, aumenta cantidad
  } else {
    cart.push({ ...item, qty: 1 }); // si no existe, lo agrega
  }

  updateCartUI();

  // === Efecto visual en el ícono del carrito ===
  const cartIcon = document.getElementById("cartCount");
  cartIcon.classList.add("flash");
  setTimeout(() => cartIcon.classList.remove("flash"), 500);
};

// Función para actualizar la vista del carrito
function updateCartUI() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";
  let subtotal = 0;

  cart.forEach((i) => {
    subtotal += i.price * i.qty;

    // Crear fila del carrito con nombre, qty y precio
    const row = document.createElement("div");
    row.className = "row between cart-item";
    row.innerHTML = `
      <span>${i.name}</span>
      <div class="qty">
        <button onclick="changeQty('${i.id}', -1)">-</button>
        <span>${i.qty}</span>
        <button onclick="changeQty('${i.id}', 1)">+</button>
      </div>
      <span>${formatPrice(i.price * i.qty)}</span>
    `;
    list.appendChild(row);
  });

  // Calcular descuentos
  let discount = 0;
  if (currentUser && currentUser.email.includes("@duoc")) {
    discount = subtotal * 0.2; // 20% descuento
  }
  const total = subtotal - discount;

  // Actualizar número de productos en el ícono
  document.getElementById("cartCount").textContent = cart.reduce(
    (a, i) => a + i.qty,
    0
  );

  // Actualizar totales
  document.getElementById("sumSubtotal").textContent = formatPrice(subtotal);
  document.getElementById("sumDuoc").textContent = formatPrice(discount);
  document.getElementById("sumTotal").textContent = formatPrice(total);
}

// Cambiar cantidad (+ o -)
window.changeQty = function (id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== id); // elimina si llega a 0
  }

  updateCartUI();
};


// Registro y Login
const formSignup = document.getElementById("formSignup");
if (formSignup) {
  formSignup.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("suName").value.trim();
    const email = document.getElementById("suEmail").value.trim();
    const birth = document.getElementById("suBirth").value;
    const password = document.getElementById("suPass").value;
    const ref = document.getElementById("suRef").value.trim();

    // Calcular edad desde fecha de nacimiento
    let age = 0;
    if (birth) {
      const birthDate = new Date(birth);
      const today = new Date();
      age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
    }

    // Mostrar errores debajo del formulario
    let errorBox = document.getElementById("signupError");
    if (!errorBox) {
      errorBox = document.createElement("div");
      errorBox.id = "signupError";
      errorBox.style.color = "red";
      errorBox.style.marginTop = "10px";
      formSignup.appendChild(errorBox);
    }
    errorBox.textContent = "";

    const errors = [];
    if (age < 18) {
      errors.push("Debes ser mayor de 18 años.");
    }

    const validEmail = /^[\w.-]+@(gmail\.com|duocuc\.cl)$/i;
    if (!validEmail.test(email)) {
      errors.push("El correo debe terminar en @gmail.com o @duocuc.cl.");
    }

    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,24}$/;
    if (!validPassword.test(password)) {
      errors.push("La contraseña debe tener entre 8 y 24 caracteres, incluir mayúscula, minúscula y caracter especial.");
    }

    if (errors.length > 0) {
      errorBox.textContent = errors.join(" ");
      return;
    }

    // Guardar usuario en memoria
    const newUser = { name, email, age, password, ref };
    localStorage.setItem("user", JSON.stringify(newUser));
    currentUser = newUser;

    if (currentUser.email.includes("@duoc"))
      document.getElementById("duocPanel").hidden = false;

    if (ref) {
      points += 100;
      document.getElementById("pointsAvailable").textContent = points;
      document.getElementById("pointsPanel").hidden = false;
    }

    toggleAuthUI();
    errorBox.textContent = "";
    alert("Registro exitoso.");
    document.getElementById("modalSignup").close();
  });
}

const formLogin = document.getElementById("formLogin");
if (formLogin) {
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("liEmail").value.trim();
    const password = document.getElementById("liPass").value;

    let errorBox = document.getElementById("loginError");
    if (!errorBox) {
      errorBox = document.createElement("div");
      errorBox.id = "loginError";
      errorBox.style.color = "red";
      errorBox.style.marginTop = "10px";
      formLogin.appendChild(errorBox);
    }
    errorBox.textContent = "";

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
      errorBox.textContent = "Correo o contraseña incorrectos.";
      return;
    }

    currentUser = savedUser;
    toggleAuthUI();
    errorBox.textContent = "";
    alert("Inicio de sesión exitoso.");
    document.getElementById("modalLogin").close();
  });
}

function toggleAuthUI() {
  document.getElementById("btnLogin").hidden = !!currentUser;
  document.getElementById("btnSignup").hidden = !!currentUser;
  document.getElementById("btnProfile").hidden = !currentUser;

  if (currentUser) {
    if (document.getElementById("pfName"))
      document.getElementById("pfName").value = currentUser.name;
    if (document.getElementById("pfEmail"))
      document.getElementById("pfEmail").value = currentUser.email;
    if (document.getElementById("pfAge"))
      document.getElementById("pfAge").value = currentUser.age || "";
  }
}
  // ===============================
  // Filtros y búsqueda
  // ===============================
  const filterProducts = (cat = "all") => {
    let list = [...products];
    const search = document.getElementById("searchInput").value.toLowerCase();
    const min = parseInt(document.getElementById("minPrice").value) || 0;
    const max = parseInt(document.getElementById("maxPrice").value) || Infinity;
    const sort = document.getElementById("sortSelect").value;

    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(search) &&
        p.price >= min &&
        p.price <= max &&
        (cat.toLowerCase() === "todos" ||
          cat.toLowerCase() === "all" ||
          p.category === cat.toLowerCase())
    );

    if (sort === "priceAsc") list.sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") list.sort((a, b) => b.price - a.price);

    renderProducts(list);
  };

  document
    .getElementById("searchInput")
    .addEventListener("input", () => filterProducts("all"));
  document
    .getElementById("minPrice")
    .addEventListener("input", () => filterProducts("all"));
  document
    .getElementById("maxPrice")
    .addEventListener("input", () => filterProducts("all"));
  document
    .getElementById("sortSelect")
    .addEventListener("change", () => filterProducts("all"));

  document.querySelectorAll(".chip").forEach((c) =>
    c.addEventListener("click", (e) => {
      e.preventDefault();
      filterProducts(c.dataset.cat);
    })
  );

  // ===============================
  // Modales abrir/cerrar
  // ===============================
  document
    .querySelectorAll("[data-close]")
    .forEach((btn) =>
      btn.addEventListener("click", () => btn.closest("dialog").close())
    );

  document.getElementById("btnSignup").onclick = () =>
    document.getElementById("modalSignup").showModal();
  document.getElementById("btnLogin").onclick = () =>
    document.getElementById("modalLogin").showModal();
  document.getElementById("btnProfile").onclick = () =>
    document.getElementById("modalProfile").showModal();
  document.getElementById("btnCart").onclick = () => {
    updateCartUI();
    document.getElementById("modalCart").showModal();
  };
});
