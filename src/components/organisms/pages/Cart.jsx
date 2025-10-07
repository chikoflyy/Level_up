import React from 'react'

export default function Cart() {

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
            id: "PP002",
            name: "Poleron Minecraft",
            category: "polerones gamers personalizados",
            price: 23192,
            img: "https://http2.mlstatic.com/D_NQ_NP_979957-MLC76491126266_052024-O-poleron-de-nino-minecraft-clasico-jockey-azul-poleron-canguro-con-capucha-interior-de-polar.webp",
            desc: "Polera con el logo del famoso juego Minecraft.",
        },
        {
            id: "PP003",
            name: "Polera Fortnite",
            category: "poleras personalizadas",
            price: 12990,
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_687056-MLC85110928663_052025-F.webp",
            desc: "Polera con estampado del popular juego Fortnite.",
        },
        {
            id: "PP004",
            name: " Polera Manga Corta Zelda Cod 15",
            category: "poleras personalizadas",
            price: 11990,
            img: "https://http2.mlstatic.com/D_NQ_NP_634019-MLC78421233551_082024-O-polera-manga-corta-zelda-cod-15.webp",
            desc: "Polera con estampado del popular juego Zelda.",
        },
    ];

      const formatPrice = (value) => value.toLocaleString("es-CL") + " CLP";

    return (
        <main className="container layout" id="catalogo">
            <aside className="sidebar">
                <h3>Filtros</h3>
                <div className="filter">
                    <label>Precio (CLP)</label>
                    <div className="row gap">
                        <input type="number" id="minPrice" placeholder="Mín" min="0" />
                        <input type="number" id="maxPrice" placeholder="Máx" min="0" />
                    </div>
                </div>

                <div className="filter">
                    <label>Ordenar</label>
                    <select id="sortSelect">
                        <option value="relevance">Relevancia</option>
                        <option value="priceAsc">Precio: menor a mayor</option>
                        <option value="priceDesc">Precio: mayor a menor</option>
                        <option value="ratingDesc">Mejor calificados</option>
                    </select>
                </div>

                <button id="applyFilters" className="btn btn-outline">
                    Aplicar filtros
                </button>
                <button id="clearFilters" className="btn btn-ghost">Limpiar</button>
                <div className="panel promo" id="duocPanel" hidden>
                    <strong>Beneficio DUOC</strong>
                    <p>Descuento de por vida: <b>20%</b> aplicado al finalizar compra.</p>
                </div>
                <div className="panel points" id="pointsPanel" hidden>
                    <strong>Puntos LevelUp</strong>
                    <p>Disponibles: <b id="pointsAvailable">0</b></p>
                    <p>Nivel: <b id="userLevel">Bronze</b></p>
                </div>
            </aside>

            <section className="grid" id="productsGrid">



                {products.map((p) => (


                    <div className="card product" key={p.id}>
                        <div className="thumb-container" key={p.id}>
                            <img src={p.img} alt={p.name} className="thumb" />
                        </div>
                        <h4>{p.name}</h4>
                        <p>{p.desc}</p>
                        <p className="price">{formatPrice(p.price)}</p>
                        <div className="row gap">
                            {/* <button className="btn btn-primary" onclick="addToCart('${p.id}')">Agregar</button>
                            <button className="btn btn-outline" onclick="openReviews('${p.id}')"> Reseñas</button> */}
                        </div>
                        </div>
                        
                ))
                }


            </section>

        </main>
    )
}
