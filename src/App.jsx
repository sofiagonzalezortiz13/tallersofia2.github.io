import { useState } from 'react';
import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";
import Props from "./features/layout/components/Props";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  const [cart, setCart] = useState([]);

  // 2. Función para agregar productos
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

 
  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter basename="/taller2sofia">
      {/* Pasamos la cantidad de productos al Header */}
      <Header cartCount={cart.length} />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <Content 
              cart={cart} 
              addToCart={addToCart} 
              clearCart={clearCart} 
            />
          } 
        />
        <Route path="/props" element={<Props />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;