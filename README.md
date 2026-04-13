#  Sephora Beauty - React Store Project

##  Descripción
Este proyecto es una aplicación web de catálogo de belleza inspirada en **Sephora**, desarrollada con **React + Vite**. El objetivo principal es demostrar el manejo avanzado de **Props**, el levantamiento de estado (**Lifting State Up**) para un carrito de compras funcional y la implementación de rutas dinámicas.

La aplicación destaca por una interfaz "Beauty" altamente personalizada, diseñada para ofrecer una experiencia de usuario limpia, moderna y profesional.

---

##✨ Características Principales
 **Estado Global de Carrito:** Gestión centralizada de productos agregados desde `App.jsx`.
 **Lifting State Up:** Comunicación bidireccional entre componentes para actualizar el total y el contador del Header.
 **Navegación Dinámica:** Uso de `react-router-dom` para transiciones fluidas entre secciones.
 **Diseño "Premium Beauty":** Estética femenina con gradientes suaves, sombras personalizadas y bordes redondeados.
 **Arquitectura Modular:** Organización por *features* para facilitar la escalabilidad.
 **Formatos Internacionales:** Uso de funciones auxiliares para el formateo de precios en USD.

---

 Interfaz Gráfica
La aplicación utiliza **Bootstrap 5** con una capa de personalización CSS para lograr:
- **Header Sticky:** Menú de navegación siempre visible con buscador integrado.
- **Badge Dinámico:** Indicador rosa en tiempo real sobre el icono del carrito.
- **Tarjetas de Producto:** Diseño centrado con efectos de hover y botones de acción rápida.
- **Formulario de Pago:** Interfaz validada visualmente para la recolección de datos de compra.
- **Responsive Design:** Adaptabilidad completa para dispositivos móviles y tablets.

---

## 🏗 Arquitectura del Proyecto

El proyecto sigue una estructura modular organizada por capas de funcionalidad:

```text
TALLER2SOFIA/
├── public/
│   └── img/               
├── src/
│   ├── features/
│   │   └── layout/
│   │       └── components/
│   │           ├── Content.jsx  
│   │           ├── Footer.jsx
│   │           ├── Header.jsx
│   │           └── Props.jsx
│   ├── shared/
│   │   └── styles/        # App.css e index.css
│   ├── App.jsx            
│   ├── main.jsx           
│   └── Routes.jsx         
├── index.html
└── vite.config.js

##  Datos del Autor

**Nombre:** sofia Gonzalez Ortiz  
**Rol:** Desarrolladora Frontend en formación  
**Tecnologías de enfoque:** React + Bootstrap  