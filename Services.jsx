import { useState } from "react";

const SERVICES = [
  {
    icon: "📄",
    titre: "Saisie & Frappe",
    desc: "Traitement rapide de vos documents.",
    prestations: [
      "Saisie de lettres et courriers",
      "Frappe de rapports et mémoires",
      "Mise en page de thèses",
      "Saisie de tableaux et listes",
      "Correction orthographique incluse",
    ],
  },
  {
    icon: "🖨️",
    titre: "Impression & Photocopie",
    desc: "Impression couleur et noir/blanc.",
    prestations: [
      "Impression noir & blanc (A4, A3)",
      "Impression couleur haute qualité",
      "Photocopies simples et multiples",
      "Impression recto-verso",
      "Reliure de documents",
    ],
  },
  {
    icon: "🧾",
    titre: "Déclaration des Impôts",
    desc: "Accompagnement pour vos déclarations fiscales.",
    prestations: [
      "Déclaration mensuelle de TVA",
      "Déclaration de l'impôt sur le revenu",
      "Déclaration patente",
      "Suivi du dossier fiscal",
      "Conseil et orientation fiscale",
    ],
  },
  {
    icon: "📊",
    titre: "Tirage ACF & DSF",
    desc: "Tirage de vos attestations fiscales.",
    prestations: [
      "Tirage de l'Attestation de Conformité Fiscale (ACF)",
      "Tirage de la Déclaration Statistique et Fiscale (DSF)",
      "Vérification de conformité",
      "Archivage numérique du document",
      "Assistance en cas de blocage",
    ],
  },
  {
    icon: "🪪",
    titre: "Enrôlement CNI & Passeport",
    desc: "Assistance pour l'enrôlement en ligne.",
    prestations: [
      "Enrôlement CNI en ligne",
      "Demande de passeport en ligne",
      "Vérification des pièces requises",
      "Suivi du dossier",
      "Impression du récépissé",
    ],
  },
  {
    icon: "📁",
    titre: "Numérisation",
    desc: "Scan et archivage numérique.",
    prestations: [
      "Scan de documents (A4, A3)",
      "Conversion en PDF",
      "Envoi par e-mail",
      "Archivage sur clé USB",
      "OCR (texte reconnu depuis image)",
    ],
  },
  {
    icon: "✍️",
    titre: "Rédaction Administrative",
    desc: "Rédaction de documents officiels.",
    prestations: [
      "Rédaction de CV professionnel",
      "Lettre de motivation",
      "Demande d'emploi",
      "Correspondances officielles",
      "Contrats et conventions simples",
    ],
  },
  {
    icon: "🌐",
    titre: "Services Internet",
    desc: "Accès internet et démarches en ligne.",
    prestations: [
      "Navigation et recherche internet",
      "Création et envoi d'e-mails",
      "Téléchargement de formulaires",
      "Inscription sur plateformes en ligne",
      "Transfert de fichiers",
    ],
  },
];

function Popup({ service, onFermer }) {
  return (
    <div
      className="popup-overlay"
      style={styles.overlay}
      onClick={onFermer}
    >
      <div
        className="popup-box"
        style={styles.popup}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={styles.popupEntete}>
          <span style={styles.popupIcone}>{service.icon}</span>
          <h3 style={styles.popupTitre}>{service.titre}</h3>
          <button style={styles.fermer} onClick={onFermer}>✕</button>
        </div>

        <div style={styles.ligne} />

        <p style={styles.popupLabel}>Nos prestations :</p>
        <ul style={styles.liste}>
          {service.prestations.map((p, i) => (
            <li key={i} style={styles.listeItem}>
              <span style={styles.puce}>◆</span> {p}
            </li>
          ))}
        </ul>

        <a href="#contact" style={styles.bouton} onClick={onFermer}>
          Demander un devis pour ce service
        </a>
      </div>
    </div>
  );
}

function CarteService({ service }) {
  const [survol, setSurvol] = useState(false);
  const [ouvert, setOuvert] = useState(false);

  return (
    <>
      <div
        style={{
          ...styles.carte,
          borderColor: survol ? "#C9A84C" : "rgba(0,0,0,0.06)",
          transform: survol ? "translateY(-6px)" : "translateY(0)",
          boxShadow: survol ? "0 20px 40px rgba(11,31,58,0.12)" : "none",
          transition: "all 0.3s",
          cursor: "pointer",
        }}
        onMouseEnter={() => setSurvol(true)}
        onMouseLeave={() => setSurvol(false)}
        onClick={() => setOuvert(true)}
      >
        <div style={styles.icone}>{service.icon}</div>
        <h3 style={styles.carteTitre}>{service.titre}</h3>
        <p style={styles.carteDesc}>{service.desc}</p>
        <p style={styles.voirPlus}>Voir les prestations →</p>
      </div>

      {ouvert && (
        <Popup service={service} onFermer={() => setOuvert(false)} />
      )}
    </>
  );
}

function Services() {
  return (
    <section id="services" className="services-section" style={styles.section}>
      <div style={styles.entete}>
        <p style={styles.label}>Ce que nous faisons</p>
        <h2 className="services-titre" style={styles.titre}>Nos Prestations</h2>
        <div style={styles.ligneTitre} />
        <p style={styles.sousTitre}>
          Cliquez sur un service pour voir le détail des prestations.
        </p>
      </div>
      <div className="services-grille" style={styles.grille}>
        {SERVICES.map((service, index) => (
          <CarteService key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "90px 5%",
    backgroundColor: "#F7F3EC",
  },
  entete: {
    textAlign: "center",
    marginBottom: "56px",
  },
  label: {
    fontSize: "0.72rem",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#C9A84C",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  titre: {
    fontFamily: "Georgia, serif",
    fontSize: "2.4rem",
    color: "#0B1F3A",
    marginBottom: "12px",
  },
  ligneTitre: {
    width: "48px",
    height: "3px",
    backgroundColor: "#C9A84C",
    margin: "0 auto 20px",
    borderRadius: "2px",
  },
  sousTitre: {
    color: "#6B7280",
    fontSize: "1rem",
    lineHeight: 1.7,
    maxWidth: "520px",
    margin: "0 auto",
  },
  grille: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  carte: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "32px 24px",
    border: "1px solid",
  },
  icone: {
    fontSize: "32px",
    marginBottom: "16px",
  },
  carteTitre: {
    fontFamily: "Georgia, serif",
    fontSize: "1.1rem",
    color: "#0B1F3A",
    marginBottom: "10px",
  },
  carteDesc: {
    color: "#6B7280",
    fontSize: "0.88rem",
    lineHeight: 1.65,
    marginBottom: "16px",
  },
  voirPlus: {
    color: "#C9A84C",
    fontSize: "0.82rem",
    fontWeight: "bold",
  },
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  popup: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "36px",
    maxWidth: "480px",
    width: "100%",
    boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
  },
  popupEntete: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  popupIcone: { fontSize: "28px" },
  popupTitre: {
    fontFamily: "Georgia, serif",
    fontSize: "1.4rem",
    color: "#0B1F3A",
    flex: 1,
  },
  fermer: {
    background: "none",
    border: "none",
    fontSize: "1.1rem",
    cursor: "pointer",
    color: "#6B7280",
    padding: "4px 8px",
  },
  ligne: {
    width: "48px",
    height: "3px",
    backgroundColor: "#C9A84C",
    marginBottom: "20px",
    borderRadius: "2px",
  },
  popupLabel: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#C9A84C",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  liste: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "28px",
  },
  listeItem: {
    fontSize: "0.92rem",
    color: "#374151",
    lineHeight: 1.5,
  },
  puce: {
    color: "#C9A84C",
    fontSize: "0.5rem",
    verticalAlign: "middle",
    marginRight: "8px",
  },
  bouton: {
    display: "block",
    textAlign: "center",
    backgroundColor: "#C9A84C",
    color: "#0B1F3A",
    padding: "13px 24px",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "0.9rem",
    textDecoration: "none",
  },
};

export default Services;