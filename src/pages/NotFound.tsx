import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 Not Found</h1>
      <p style={styles.message}>
        Oups ! .. La page que tu cherches n'existe pas !
      </p>
      <Link to="/" style={styles.link}>
        ← Retour à la page d'accueil{" "}
      </Link>
    </div>
  );
};

const styles = {
  container: {
    TextAlign: "center",
    padding: "80px 20px",
    color: "#fff",
  },
  title: {
    fontSize: "72px",
    marginBottom: "20px",
  },
  message: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
  },
};

export default NotFoundPage;
