import React from "react";
import "../TotalBox.css";
import { useGlobalContext } from "../context/context";
import formatNumber from "../utils/formatNumber";

const TotalBox = () => {

  //stile del carrello
    const cardStyle = {
      width: '400px',
      margin: '0 auto',
      marginTop: '20px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px'
    };

    const { total} = useGlobalContext();
  
    return (
      <section className="text-center my-5">
        <div className="card" style={cardStyle}>
          <header className="card-header">
            <h4>Carrello</h4>
          </header>
          <div className="card-content">
            <h4>{formatNumber(total)}</h4>
          </div>
          <footer className="card-footer">
            <button className="button">Checkout</button>
          </footer>
        </div>
      </section>
    );
  };

export default TotalBox;