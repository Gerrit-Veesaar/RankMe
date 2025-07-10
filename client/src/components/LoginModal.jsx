import React from "react";

function LoginModal({ onClose, onGoogleSignIn, mode }) {
  const title = mode === "login" ? "Log in with:" : "Sign up with:";

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.close}>✖</button>
        <h2 style={{ marginBottom: "20px" }}>{title}</h2>

        <button style={styles.button} onClick={onGoogleSignIn}>
          Google Account
        </button>

        <button
          style={styles.buttonSecondary}
          onClick={() => alert("Phone/Email login coming soon!")}
        >
          Phone or Email Address
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999999 // <-- increased to make sure it overlays everything
  },
  modal: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "20px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    width: "90%",
    maxWidth: "250px"
  },
  button: {
    backgroundColor: "#ff4081",
    color: "#fff",
    padding: "12px 25px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "15px",
    width: "100%",
    fontWeight: "bold",
    transition: "all 0.3s ease"
  },
  buttonSecondary: {
    backgroundColor: "#eee",
    color: "#333",
    padding: "12px 25px",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "15px",
    width: "100%",
    fontWeight: "bold",
    transition: "all 0.3s ease"
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "15px",
    background: "transparent",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#999"
  }
};

export default LoginModal;
