import { useState } from "react";
import emailjs from "@emailjs/browser";

// ⚙️ REMPLACE CES 3 VALEURS PAR LES TIENNES
const SERVICE_ID = "TON_SERVICE_ID";
const TEMPLATE_ID = "TON_TEMPLATE_ID";
const PUBLIC_KEY = "TA_PUBLIC_KEY";

function Contact() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    service: "",
    message: "",
  });
  const [envoi, setEnvoi] = useState("idle"); // idle | envoi | succes | erreur

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnvoi("envoi");

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        nom: form.nom,
        telephone: form.telephone,
        service: form.service,
        message: form.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setEnvoi("succes");
      setForm({ nom: "", telephone: "", service: "", message: "" });
    })
    .catch(() => {
      setEnvoi("erreur");
    });
  };

  return (
    <section id="contact" style={styles.section}>

      {/* Colonne gauche */}
      <div style={styles.colonne}>
        <p style={styles.label}>Nous trouver</p>
        <h2 style={styles.titre}>Contactez-nous</h2>
        <div style={styles.ligne} />
        <p style={styles.sousTitre}>
          Venez nous rendre visite ou écrivez-nous.
          Nous répondons dans les 2 heures ouvrables.
        </p>

        <div style={styles.infoItem}>
          <span style={styles.infoIcone}>📍</span>
          <div>
            <h4 style={styles.infoTitre}>Adresse</h4>
            <p style={styles.infoTexte}>Douala PK15 Station Vision Energie, Cameroun</p>
          </div>
        </div>

        <div style={styles.infoItem}>
          <span style={styles.infoIcone}>📞</span>
          <div>
            <h4 style={styles.infoTitre}>Téléphone</h4>
            <p style={styles.infoTexte}>+237 651 363 504</p>
          </div>
        </div>

        <div style={styles.infoItem}>
          <span style={styles.infoIcone}>⏰</span>
          <div>
            <h4 style={styles.infoTitre}>Horaires</h4>
            <p style={styles.infoTexte}>Lundi – Samedi : 8h00 – 17h30</p>
          </div>
        </div>
      </div>

      {/* Colonne droite — Formulaire */}
      <div style={styles.colonne}>
        <form onSubmit={handleSubmit}>

          <div style={styles.formGroupe}>
            <label style={styles.formLabel}>Nom complet</label>
            <input
              style={styles.formInput}
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Votre nom et prénom"
              required
            />
          </div>

          <div style={styles.formGroupe}>
            <label style={styles.formLabel}>Téléphone</label>
            <input
              style={styles.formInput}
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
              placeholder="+237 6XX XXX XXX"
              required
            />
          </div>

          <div style={styles.formGroupe}>
            <label style={styles.formLabel}>Service souhaité</label>
            <select
              style={styles.formInput}
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Choisir un service…</option>
              <option>Saisie & Frappe</option>
              <option>Impression & Photocopie</option>
              <option>Déclaration des Impôts</option>
              <option>Tirage ACF & DSF</option>
              <option>Enrôlement CNI & Passeport</option>
              <option>Numérisation</option>
              <option>Rédaction Administrative</option>
              <option>Services Internet</option>
            </select>
          </div>

          <div style={styles.formGroupe}>
            <label style={styles.formLabel}>Message</label>
            <textarea
              style={{ ...styles.formInput, minHeight: "110px", resize: "vertical" }}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Décrivez votre besoin…"
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            style={styles.bouton}
            disabled={envoi === "envoi"}
          >
            {envoi === "envoi" ? "Envoi en cours…" : "Envoyer →"}
          </button>

          {/* Messages retour */}
          {envoi === "succes" && (
            <p style={styles.succes}>
              ✅ Message envoyé ! Nous vous répondrons bientôt.
            </p>
          )}
          {envoi === "erreur" && (
            <p style={styles.erreur}>
              ❌ Une erreur s'est produite. Réessayez ou appelez-nous.
            </p>
          )}

        </form>
      </div>

    </section>
  );
}

const styles = {
 section: {
    padding: "90px 5%",
    backgroundColor: "#0B1F3A",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "48px",
    alignItems: "start",
  },
  colonne: {},
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
    fontSize: "2.2rem",
    color: "white",
    marginBottom: "12px",
  },
  ligne: {
    width: "48px",
    height: "3px",
    backgroundColor: "#C9A84C",
    marginBottom: "20px",
    borderRadius: "2px",
  },
  sousTitre: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.95rem",
    lineHeight: 1.7,
    marginBottom: "36px",
  },
  infoItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "24px",
  },
  infoIcone: { fontSize: "22px", marginTop: "2px" },
  infoTitre: {
    fontSize: "0.72rem",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "#C9A84C",
    fontWeight: "bold",
    marginBottom: "4px",
  },
  infoTexte: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "0.9rem",
  },
  formGroupe: { marginBottom: "18px" },
  formLabel: {
    display: "block",
    fontSize: "0.72rem",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "rgba(255,255,255,0.5)",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  formInput: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "6px",
    padding: "12px 16px",
    color: "white",
    fontSize: "0.9rem",
    outline: "none",
    fontFamily: "sans-serif",
  },
  bouton: {
    backgroundColor: "#C9A84C",
    color: "#0B1F3A",
    padding: "14px 32px",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "0.95rem",
    border: "none",
    cursor: "pointer",
    marginTop: "8px",
    width: "100%",
  },
  succes: {
    marginTop: "16px",
    color: "#22c55e",
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
  erreur: {
    marginTop: "16px",
    color: "#ef4444",
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
};

export default Contact;