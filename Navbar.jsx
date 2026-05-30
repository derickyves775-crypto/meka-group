import { useState } from "react";

function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <nav style={styles.nav}>

      {/* Logo */}
      <div style={styles.logoZone}>
        <img
          src="/meka.jpeg"
          alt="Meka Group SARL"
          style={styles.logoImg}
        />
        <span style={styles.logoTexte}>Meka Group SARL</span>
      </div>

      {/* Bouton burger (mobile) */}
      <button
  className="nav-burger"
  style={styles.burger}
  onClick={() => setMenuOuvert(!menuOuvert)}
>
        {menuOuvert ? "✕" : "☰"}
      </button>

      {/* Liens desktop */}
      <ul className="nav-links" style={styles.links}>
        <li><a href="#accueil" style={styles.link}>Accueil</a></li>
        <li><a href="#services" style={styles.link}>Services</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>

      {/* Menu mobile */}
      {menuOuvert && (
  <ul className="nav-menu-mobile" style={styles.menuMobile}>
          <li>
            <a
              href="#accueil"
              style={styles.linkMobile}
              onClick={() => setMenuOuvert(false)}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#services"
              style={styles.linkMobile}
              onClick={() => setMenuOuvert(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={styles.linkMobile}
              onClick={() => setMenuOuvert(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}

    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#0B1F3A",
    padding: "0 5%",
    height: "65px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  logoZone: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoImg: {
    height: "42px",
    width: "42px",
    borderRadius: "6px",
    objectFit: "cover",
  },
  logoTexte: {
    color: "#C9A84C",
    fontSize: "1rem",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  // Liens visibles uniquement sur grand écran
  links: {
    listStyle: "none",
    display: "flex",
    gap: "32px",
    "@media(max-width:768px)": {
      display: "none",
    },
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
  // Bouton burger visible uniquement sur mobile
  burger: {
    display: "none",
    background: "none",
    border: "none",
    color: "white",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  // Menu déroulant mobile
  menuMobile: {
    listStyle: "none",
    width: "100%",
    backgroundColor: "#0B1F3A",
    padding: "16px 5%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
  linkMobile: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default Navbar;