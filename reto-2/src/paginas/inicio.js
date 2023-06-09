import React from 'react';
import Navbar from '../componentes/navbar';
import Footer from '../componentes/footer';
import Carga from '../componentes/carga';
import Modificar from '../componentes/modificar';
import "../css/inicio.css"
const inicio = () => {
  return (
    <div>

         <Navbar />

     <Carga/>
     <Modificar/>
      <Footer/> 
    </div>
    
  );
};

export default inicio;
