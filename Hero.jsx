function Hero() {
  return (
    <section id="accueil" className="hero-section" style={styles.section}>
      <div style={styles.content}>

        <div className="hero-badge" style={styles.badge}>
          Secretariat Bureautique Professionnel
        </div>

        <h1 className="hero-titre" style={styles.titre}>
          Bienvenue chez<br />
          <span style={styles.titreOr}>Meka Group SARL</span>
        </h1>

        <p className="hero-sous-titre" style={styles.sousTitre}>
          Saisie, impression, declaration d'impots, enrolement CNI et passeport.
          Nous prenons en charge toutes vos taches administratives
          avec rigueur et rapidite.
        </p>

        <a className="hero-bouton" href="#contact" style={styles.bouton}>
          Demander un devis
        </a>

        <div className="hero-stats" style={styles.stats}>
          <div>
            <h3 style={styles.statNombre}>500+</h3>
            <p style={styles.statLabel}>Clients servis</p>
          </div>
          <div>
            <h3 style={styles.statNombre}>10 ans</h3>
            <p style={styles.statLabel}>Experience</p>
          </div>
          <div>
            <h3 style={styles.statNombre}>24h</h3>
            <p style={styles.statLabel}>Delai express</p>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    backgroundColor: "#0B1F3A",
    display: "flex",
    alignItems: "center",
    padding: "100px 5% 60px",
  },
  content: {
    maxWidth: "680px",
    width: "100%",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "rgba(201,168,76,0.15)",
    border: "1px solid rgba(201,168,76,0.4)",
    color: "#C9A84C",
    fontSize: "0.78rem",
    letterSpacing: "2px",
    padding: "8px 18px",
    borderRadius: "100px",
    marginBottom: "28px",
  },
  titre: {
    fontSize: "3rem",
    color: "white",
    lineHeight: 1.2,
    marginBottom: "24px",
    fontFamily: "Georgia, serif",
  },
  titreOr: {
    color: "#C9A84C",
    fontStyle: "italic",
  },
  sousTitre: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "1.05rem",
    lineHeight: 1.8,
    marginBottom: "40px",
  },
  bouton: {
    display: "inline-block",
    backgroundColor: "#C9A84C",
    color: "#0B1F3A",
    padding: "14px 32px",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "0.95rem",
    textDecoration: "none",
  },
  stats: {
    display: "flex",
    gap: "40px",
    marginTop: "60px",
    paddingTop: "40px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
  statNombre: {
    fontSize: "2rem",
    color: "#C9A84C",
    fontFamily: "Georgia, serif",
  },
  statLabel: {
    fontSize: "0.78rem",
    color: "rgba(255,255,255,0.5)",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
  },
};

export default Hero;