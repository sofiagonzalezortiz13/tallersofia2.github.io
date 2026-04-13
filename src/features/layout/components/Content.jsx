import React from "react"; 

// Recibimos cart, addToCart y clearCart como props desde App.jsx
export const Content = ({ cart, addToCart, clearCart }) => {
  
  const productos = [
    { id: 1, nombre: "Gloss", precio: 53, img: "img/1.jpeg" },
    { id: 2, nombre: "Polvo compacto", precio: 45, img: "img/2.jpeg" },
    { id: 3, nombre: "Mascara de pestañas", precio: 32, img: "img/3.jpeg" },
    { id: 4, nombre: "Iluminador", precio: 99, img: "img/4.jpeg" },
    { id: 5, nombre: "Rubor", precio: 29, img: "img/5.jpeg" },
    { id: 6, nombre: "Base", precio: 48, img: "img/6.jpeg" },
  ];

  // Calculamos el total usando los datos que vienen por props
  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  const formatoPrecio = (precio) => {
    return (precio || 0).toLocaleString("en-US");
  };

  // Función para manejar el botón de confirmar
  const handleConfirmar = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío 🌸 ¡Agrega algunos productos!");
      return;
    }
    alert(`¡Gracias por tu compra! ✨\nTotal pagado: $${formatoPrecio(total)} USD.`);
    clearCart(); // Esto limpia el carrito en App.jsx y actualiza el Header
  };

  return (
    <main
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(to right, #fff6f9, #ffeef4)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row g-4">
          
          {/* COLUMNA DE PRODUCTOS */}
          <div className="col-lg-8">
            <h3 className="mb-4 fw-bold" style={{ color: "#b83280" }}>
              💄 Colección Beauty
            </h3>
            <div className="row">
              {productos.map((p) => (
                <div className="col-sm-6 col-md-4 mb-4" key={p.id}>
                  <div className="card h-100 border-0 shadow-sm text-center" style={{ borderRadius: "25px" }}>
                    <div style={{ padding: "20px" }}>
                      <img src={p.img} alt={p.nombre} style={{ height: "220px", width: "100%", objectFit: "contain" }} />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h6 className="fw-semibold" style={{ color: "#9d174d" }}>{p.nombre}</h6>
                      <p className="fw-bold fs-5" style={{ color: "#d63384" }}>${formatoPrecio(p.precio)} USD</p>
                      <button 
                        onClick={() => addToCart(p)} 
                        className="btn mt-3 fw-semibold text-white" 
                        style={{ background: "linear-gradient(45deg, #f9a8d4, #f472b6)", borderRadius: "15px", border: "none" }}
                      >
                        🛍 Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA DE DETALLES (CARRITO) */}
          <div className="col-lg-4">
            <div className="shadow-sm p-4 bg-white" style={{ borderRadius: "30px", border: "2px solid #fbcfe8" }}>
              <h4 className="text-center fw-bold mb-4" style={{ color: "#b83280" }}>📝 Detalles de Compra</h4>
              
              <div className="mb-3">
                <p>Items en carrito: <strong>{cart.length}</strong></p>
                <p>Total: <strong>${formatoPrecio(total)} USD</strong></p>
              </div>

              <input className="form-control mb-3" placeholder="Nombre completo" style={{ borderRadius: "15px" }} />
              <input className="form-control mb-3" placeholder="Correo electrónico" style={{ borderRadius: "15px" }} />
              <hr />
              <h6 className="fw-semibold mb-3" style={{ color: "#9d174d" }}>💳 Pago</h6>
              <input className="form-control mb-3" placeholder="Número de tarjeta" style={{ borderRadius: "15px" }} />
              
              <button 
                onClick={handleConfirmar}
                className="btn w-100 fw-bold mt-3 text-white" 
                style={{ background: "linear-gradient(45deg, #f472b6, #ec4899)", borderRadius: "20px", border: "none" }}
              >
                Confirmar compra 💖
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};