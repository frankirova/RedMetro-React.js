

import React from "react";

function Card(props
    ) {

    return (
      <div className="card">
        <div className="card-img-top">
            <img src={props.img} alt="img"></img>
        </div>
        <h4 className="card-title">{props.title}</h4>
        <p className="card-body text-secondary">{props.text}</p>
        <button id=""className="btn btn-success">Agregar al carrito</button>
      </div>
      
    );
  }
  export default Card;