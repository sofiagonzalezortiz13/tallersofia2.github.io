import React from "react";
import { NavLink } from "react-router-dom";

// Recibimos cartCount desde App.jsx
export const Header = ({ cartCount }) => {
  return (
    <header
      className="py-3 sticky-top shadow"
      style={{
        background: "linear-gradient(90deg, #fff0f5, #ffe4ec)",
      }}
    >
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

          {/* LOGO + TITULO */}
          <div className="d-flex align-items-center gap-3">
            <NavLink to="/" className="text-decoration-none d-flex align-items-center gap-3">
              <img
                src="img/logo.jpeg"
                alt="Logo"
                width="60"
                height="60"
                className="rounded-circle shadow"
                style={{
                  border: "2px solid #ff69b4"
                }}
              />
              <div>
                <h1
                  className="fw-bold fs-4 mb-0"
                  style={{
                    color: "#d63384",
                    letterSpacing: "1px"
                  }}
                >
                  Sephora
                </h1>
              </div>
            </NavLink>

            <NavLink
              to="/props"
              className="text-decoration-none fw-semibold ms-3"
              style={{ color: "#d63384" }}
            >
              Props
            </NavLink>
          </div>

          {/* BUSCADOR + CARRITO */}
          <form className="w-100 w-md-50" role="search" onSubmit={(e) => e.preventDefault()}>
            <div className="d-flex align-items-center gap-2">

              {/* Buscador */}
              <div
                className="input-group rounded-pill overflow-hidden shadow-sm"
                style={{
                  border: "1px solid #ffc0cb",
                  backgroundColor: "#ffffff"
                }}
              >
                <span className="input-group-text bg-white border-0 text-pink px-3">
                  <i className="bi bi-search" style={{ color: "#ff69b4" }}></i>
                </span>

                <input
                  type="search"
                  className="form-control border-0"
                  placeholder="Buscar productos de belleza..."
                />

                <button
                  type="submit"
                  className="btn fw-semibold px-4"
                  style={{
                    background: "linear-gradient(45deg, #ff69b4, #ff85c1)",
                    border: "none",
                    color: "white"
                  }}
                >
                  Buscar
                </button>
              </div>

              {/* CARRITO DINÁMICO */}
              <button
                type="button"
                className="btn position-relative rounded-circle d-flex align-items-center justify-content-center shadow"
                style={{
                  width: "50px",
                  height: "50px",
                  background: "linear-gradient(145deg, #ff69b4, #ff85c1)",
                  border: "none",
                  transition: "all 0.3s ease"
                }}
              >
                <i className="bi bi-cart3 fs-5 text-white"></i>

                {/* Mostramos el número real del carrito */}
                <span
                  className="position-absolute badge rounded-pill bg-danger"
                  style={{
                    top: "5px",
                    right: "5px",
                    fontSize: "0.65rem"
                  }}
                >
                  {cartCount}
                </span>
              </button>

            </div>
          </form>

        </div>
      </div>
    </header>
  );
};