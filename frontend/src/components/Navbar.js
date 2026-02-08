import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px 40px",
        background: "linear-gradient(90deg, #134E5E, #71B280)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white" }}>Darukaa Earth 🌍</h2>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  marginLeft: "20px",
  textDecoration: "none",
  fontWeight: "500",
};

export default Navbar;
