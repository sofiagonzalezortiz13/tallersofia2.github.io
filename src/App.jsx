import { useState } from 'react';
import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";
import Props from "./features/layout/components/Props";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  const [cart, setCart] = useState([]);

  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

 
  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter basename="/tallersofia2.github.io">
      
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