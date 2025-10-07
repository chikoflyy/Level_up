import React from 'react'

export default function Header() {
    return (
        // <!-- HEADER estilo marketplace -->
        <header className="topbar">
            <div className="container row between center-v">
                <div className="brand row center-v">
                    <img
                        className="logo"
                        src="https://cdn.dribbble.com/userupload/25331627/file/original-6d94687ee057e04de1c89504c65c773b.png"
                        width="60"
                        height="60"
                        alt="Logo LEVEL-UP"
                    />
                    <h1 className="brand-title">LEVEL-UP <span>GAMER</span></h1>
                </div>
                {/* <!-- search--> */}
                <div className="search">
                    <input
                        id="searchInput"
                        type="search"
                        placeholder="Buscar juegos y accesorios..."
                    />
                </div>
                {/* <!-- login--> */}
                <nav className="nav row center-v">
                    <button id="btnLogin" className="link">Iniciar sesión</button>
                    <button id="btnSignup" className="btn btn-primary">Registrarse</button>
                    <button id="btnCart" className="icon-btn" title="Carrito">
                        🛒 <span id="cartCount" className="badge">0</span>
                    </button>
                    <button id="btnProfile" className="icon-btn" title="Perfil" hidden>
                        👤
                    </button>
                </nav>
            </div>
            {/* <!-- categorias --> */}
            <div className="subnav">
                <div className="container row wrap gap">
                    <a href="#" className="chip" data-cat="Todos">Todos</a>
                    <a href="#" className="chip" data-cat="Juegos de Mesa">Juegos de Mesa</a>
                    <a href="#" className="chip" data-cat="Accesorios">Accesorios</a>
                    <a href="#" className="chip" data-cat="Consolas">Consolas</a>
                    <a href="#" className="chip" data-cat="Computadores Gamers"
                    >Computadores Gamers</a
                    >
                    <a href="#" className="chip" data-cat="Sillas Gamers">Sillas Gamers</a>
                    <a href="#" className="chip" data-cat="Mouse">Mouse</a>
                    <a href="#" className="chip" data-cat="Mousepad">Mousepad</a>
                    <a href="#" className="chip" data-cat="Polerones Gamers Personalizados"
                    >Polerones</a
                    >
                    <a href="#" className="chip" data-cat="Poleras Personalizadas"
                    >Poleras</a
                    >
                </div>
            </div>
        </header>
    )
}