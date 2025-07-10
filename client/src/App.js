import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleSignIn from "./components/GoogleSignIn";

function App() {
  const [openBox, setOpenBox] = useState(null);

  const buttonStyle = {
    backgroundColor: "#ffffff33",
    color: "#FFF",
    padding: "8px 16px",
    border: "2px solid #FFF",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    backdropFilter: "blur(4px)",
    userSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    marginRight: "10px",
    transition: "background-color 0.2s ease-in-out",
  };

  const infoBoxStyle = {
    marginTop: "12px",
    maxWidth: "360px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#FFF",
    padding: "16px",
    borderRadius: "12px",
    fontSize: "14px",
    lineHeight: "1.5",
    textAlign: "left",
  };

  return (
    <GoogleOAuthProvider clientId="920302410837-77ca7k4f0s1s8l9ss070n6okqrumeeia.apps.googleusercontent.com">
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {/* Blurred background image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('background-image.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(6px)",
            transform: "scale(1.05)",
            zIndex: 1,
          }}
        />

        {/* Fade overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 2,
          }}
        />

        {/* Top-left RankMe text/logo */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "30px",
            zIndex: 4,
            fontSize: "45px",
            fontWeight: "bold",
            color: "#FFF",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            letterSpacing: "1px",
            cursor: "pointer",
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
          }}
          onClick={() => window.location.reload()}
        >
          RankMe
        </div>

        {/* Buttons container */}
        <div
          style={{
            position: "absolute",
            top: "26px",
            left: "250px",
            zIndex: 4,
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ffffff55")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ffffff33")}
            onClick={() => setOpenBox(openBox === "learn" ? null : "learn")}
          >
            Learn
          </button>

          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ffffff55")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ffffff33")}
            onClick={() => setOpenBox(openBox === "support" ? null : "support")}
          >
            Support
          </button>
        </div>

        {/* Info box container */}
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "250px",
            zIndex: 4,
          }}
        >
          {openBox === "learn" && (
            <div style={infoBoxStyle}>
              <strong>Why RankMe?</strong>
              <br />
              <br />
              RankMe is a dating app that uses a unique ranking system to help
              you find better matches. It’s not just about swiping — you rate
              others based on your vibe, preferences, and values.
            </div>
          )}

          {openBox === "support" && (
            <div style={infoBoxStyle}>
              <strong>Support</strong>
              <br />
              <br />
              gmail: gerrit.veesaar@gmail.com
            </div>
          )}
        </div>

        {/* Centered main content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "3vh",
            height: "100vh",
            color: "#222",
          }}
        >
          <h1
            style={{
              fontSize: "81px",
              fontWeight: "bold",
              marginBottom: "30px",
              textAlign: "center",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              color: "#FFF",
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
            }}
          >
            Make Dating Make Sense.
          </h1>

          <GoogleSignIn
            style={{
              transform: "scale(2)",
              transformOrigin: "center",
            }}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
