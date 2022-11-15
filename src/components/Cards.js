import React from "react";
import Card from "./Card";
import img1 from "../img/n820.jpg";
import img2 from "../img/archerc202.jpg";
import img3 from "../img/archerc602.jpg";
const cards = [
    {
        "id": 1,
        "nombre":"TL-WR820N",
        "stock": 10,
        "precio": 3550,
        "img": img1,
        "liCaracteristicas":["Velocidad de transmisión Inalámbrica de 300Mbps.","IPTV es compatible con los nuevos protocolos para optimizar la transmisión"],
        "cantidad": 1
    },
    {
        "id": 2,
        "nombre":"ARCHER C20",
        "stock": 10,
        "precio": 6999,
        "img": img2,
        "liCaracteristicas":["Soporta el estándar 802.11ac.","Conexiones simultáneas de 2.4GHz y 5GHz, Señal Omnidireccional Estable, Cobertura Superior Con 3 antenas externas fijas "],
        "cantidad": 1
    },
    {
        "id": 3,
        "nombre":"ARCHER C60",
        "stock": 10,
        "precio": 17600,
        "img": img3,
        "liCaracteristicas":["Consigue un Wi-Fi más rápido","El avanzado Wi-Fi AC desbloquea el rendimiento de tus dispositivos inalámbricos"],
        "cantidad": 1
    }
] 
function Cards() {
    return (
      <div className="container d-flex justify-content-center align-items-center h-100  ">
        <div className="row">
            <h3 className="titulo">Routers</h3>
            {
            cards.map(card => (
                <div className="col-md-4" key={card.id}>
                <Card title={card.nombre} img={card.img} text={card.liCaracteristicas}/>
            </div>
            ))
            
            }
        </div>
      </div>
    );
}
export default Cards ;