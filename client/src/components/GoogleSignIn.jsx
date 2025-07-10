import React, { useState } from "react";
import LoginModal from "./LoginModal";

function GoogleSignIn() {
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("join");

  const handleOpen = (action) => {
    setMode(action);
    setShowModal(true);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
    // You can hook up Firebase or OAuth2 here
  };

  return (
    <div>
      <div style={{ position: "absolute", top: "20px", right: "30px", zIndex: 1001 }}>
        <button
          onClick={() => handleOpen("login")}
          style={buttonStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Log in
        </button>
      </div>

      <div style={{ position: "absolute", top: "575px", right: "897px", zIndex: 1001 }}>
        <button
          onClick={() => handleOpen("join")}
          style={pinkButtonStyle}
          onMouseEnter={handlePinkHover}
          onMouseLeave={handlePinkLeave}
        >
          Join now
        </button>
      </div>

      {showModal && (
        <LoginModal
          mode={mode}
          onClose={() => setShowModal(false)}
          onGoogleSignIn={handleGoogleSignIn} // ✅ now passed
        />
      )}
    </div>
  );
}


// 🎨 Styling
const buttonStyle = {
  backgroundColor: "white",
  color: "black",
  border: "1px solid black",
  padding: "12px 24px",
  borderRadius: "25px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
};

const pinkButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#ff4081",
  color: "white",
  border: "none",
};

// 🖱️ Hover Effects
const handleHover = (e) => {
  e.currentTarget.style.backgroundColor = "black";
  e.currentTarget.style.color = "white";
};

const handleLeave = (e) => {
  e.currentTarget.style.backgroundColor = "white";
  e.currentTarget.style.color = "black";
};

const handlePinkHover = (e) => {
  e.currentTarget.style.opacity = "0.85";
};

const handlePinkLeave = (e) => {
  e.currentTarget.style.opacity = "1";
};

export default GoogleSignIn;
