function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.texte}>
        © 2025 <span style={styles.or}>Meka Group SARL</span> — Tous droits réservés
      </p>
      <p style={styles.adresse}>
        📍 Douala PK15 Station Vision Energie, Cameroun &nbsp;|&nbsp; 📞 +237 651 363 504
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#060F1E",
    padding: "28px 5%",
    textAlign: "center",
    borderTop: "1px solid rgba(201,168,76,0.2)",
  },
  texte: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.85rem",
    marginBottom: "8px",
  },
  or: {
    color: "#C9A84C",
  },
  adresse: {
    color: "rgba(255,255,255,0.25)",
    fontSize: "0.78rem",
  },
};

export default Footer;