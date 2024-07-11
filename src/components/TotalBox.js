import React from "react";
import "../TotalBox.css";

const TotalBox = () => {
    const cardStyle = {
      width: '400px',
      margin: '0 auto',
      marginTop: '20px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px'
    };
  
    return (
      <section className="text-center">
        <div className="card" style={cardStyle}>
          <header className="card-header">
            <h4>Carrello</h4>
          </header>
          <div className="card-content">
            <h4>0 €</h4>
          </div>
          <footer className="card-footer">
            <button className="button">Checkout</button>
          </footer>
        </div>
      </section>
    );
  };

export default TotalBox;