import React from 'react';
import estilos from './Card.module.css';

export default function Card({name, min, max, img, onClose}) {
  // acá va tu código
  return(
    <div className={estilos.contenedor}>
      <button className={estilos.btn} onClick={onClose}>X</button>
      <h3>{name}</h3>
      <h5>Minima</h5>
      <p>{min}</p>
      <h5>Maxima</h5>
      <p>{max}</p>
      <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Img not found" />
    </div>
  )
};