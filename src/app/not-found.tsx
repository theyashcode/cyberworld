import Link from "next/link";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! Jo page aap dhundh rahe ho wo exist nahi karta.
      </p>

      <Link href="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    color: "white",
    textAlign: "center" as const,
  },
  code: {
    fontSize: "120px",
    margin: "0",
  },
  title: {
    fontSize: "32px",
    margin: "10px 0",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "white",
    color: "#764ba2",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
