import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { BiPlus, BiMinus } from 'react-icons/bi';
import '../CartItem.css';
import { useGlobalContext } from '../context/context';
import formatNumber from '../utils/formatNumber';

const CartItem = ({ _id, name, image, price, qty, countInStock }) => {
  const { deleteItem, addQty, removeQty } = useGlobalContext();

  // state per gestire la visibilità del modal di conferma e l'ID dell'elemento da eliminare
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // funzione per aggiungere la quantità di un elemento nel carrello
  const aggiungiQty = (_id) => {
    if (qty + 1 > countInStock) {
      return; // evita di aumentare oltre la quantità disponibile in stock
    }
    addQty(_id);
  }

  // funzione per diminuire la quantità di un elemento nel carrello o mostrare il modal di conferma se la quantità è zero
  const diminuisciQty = (_id) => {
    if (qty - 1 <= 0) {

      // imposta l'ID dell'elemento da eliminare
      setItemToDelete(_id); 

      // mostra il modal di conferma
      setShowModal(true); 
    } else {

      //rimuove un'unità dalla quantità dell'elemento nel carrello
      removeQty(_id); 
    }
  }

  // conferma l'eliminazione dell'elemento dal carrello
  const confirmDelete = () => {
    // chiama la funzione per eliminare l'elemento dal carrello
    deleteItem(itemToDelete); 

    // nasconde il modal di conferma
    setShowModal(false); 
  }

  // annulla l'eliminazione dell'elemento dal carrello
  const cancelDelete = () => {
    setShowModal(false); // nasconde il modal di conferma
    setItemToDelete(null); // resetta l'ID dell'elemento da eliminare
  }

  return (
    <>
      {/* visualizza il singolo elemento del carrello */}
      <article className='my-4 text-center cart-item'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-3'>
            <img src={image} alt={name} className='cart-item-image' />
          </div>
          <div className='col-12 col-md-3'>
            <h6 className='cart-item-name'>{name}</h6>
          </div>
          <div className='col-6 col-md-2'>
            <div className='d-flex align-items-center justify-content-center'>
              {/* bottone per diminuire la quantità */}
              <button onClick={() => diminuisciQty(_id)} className='btn btn-sm btn-outline-secondary'>
                <BiMinus />
              </button>
              <span className='mx-2'>{qty}</span> 
              {/* bottone per aumentare la quantità */}
              <button onClick={() => aggiungiQty(_id)} className='btn btn-sm btn-outline-secondary'>
                <BiPlus />
              </button>
            </div>
          </div>
          <div className='col-6 col-md-2'>
            <h6 className='cart-item-price'>{formatNumber(price)}</h6> 
          </div>
          <div className='col-12 col-md-2'>
            {/* bottone per eliminare l'elemento dal carrello */}
            <button onClick={() => deleteItem(_id)} className='btn btn-danger btn-sm'>
              <MdDelete />
            </button>
          </div>
        </div>
      </article>

      {/* modal di conferma per l'eliminazione dell'elemento */}
      {showModal && (
        <div className='modal fade show d-block'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title'>Sei sicuro di voler rimuovere "{name}" prodotto dal carrello?</h4>
              </div>
              <div className='modal-footer'>
                <button onClick={confirmDelete} className='btn btn-danger'>Sì</button>
                <button onClick={cancelDelete} className='btn btn-secondary'>No</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
