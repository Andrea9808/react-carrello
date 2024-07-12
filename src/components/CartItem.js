import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { BiPlus, BiMinus } from 'react-icons/bi';
import '../CartItem.css';
import { useGlobalContext } from '../context/context';
import formatNumber from '../utils/formatNumber';

const CartItem = ({ _id, name, image, price, qty, countInStock }) => {
  const { deleteItem, addQty, removeQty } = useGlobalContext();

  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const aggiungiQty = (_id) => {
    if (qty + 1 > countInStock) {
      return;
    }
    return addQty(_id);
  }

  const diminuisciQty = (_id) => {
    if (qty - 1 <= 0) {
      setItemToDelete(_id);
      setShowModal(true);
      return;
    }
    return removeQty(_id);
  }

  const confirmDelete = () => {
    deleteItem(itemToDelete);
    setShowModal(false);
  }

  const cancelDelete = () => {
    setShowModal(false);
    setItemToDelete(null);
  }

  return (
    <>
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
              <button onClick={() => diminuisciQty(_id)} className='btn btn-sm btn-outline-secondary'>
                <BiMinus />
              </button>
              <span className='mx-2'>{qty}</span>
              <button onClick={() => aggiungiQty(_id)} className='btn btn-sm btn-outline-secondary'>
                <BiPlus />
              </button>
            </div>
          </div>
          <div className='col-6 col-md-2'>
            <h6 className='cart-item-price'>{formatNumber(price)}</h6>
          </div>
          <div className='col-12 col-md-2'>
            <button onClick={() => deleteItem(_id)} className='btn btn-danger btn-sm'>
              <MdDelete />
            </button>
          </div>
        </div>
      </article>

      {showModal && (
        <div className='modal fade show d-block'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title'>Sei sicuro di voler rimuovere questo prodotto dal carrello?</h4>
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
