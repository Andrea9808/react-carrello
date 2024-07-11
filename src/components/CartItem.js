import React from 'react';
import { MdDelete } from 'react-icons/md';
import { BiPlus, BiMinus } from 'react-icons/bi';
import '../CartItem.css'; // Importa il file CSS per i dettagli stilistici

const CartItem = ({ _id, name, image, price }) => {
  return (
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
            <button className='btn btn-sm btn-outline-secondary'>
              <BiMinus />
            </button>
            <span className='mx-2'>1</span> {/* Qui puoi usare una variabile di stato per la quantità */}
            <button className='btn btn-sm btn-outline-secondary'>
              <BiPlus />
            </button>
          </div>
        </div>
        <div className='col-6 col-md-2'>
          <h6 className='cart-item-price'>{price}</h6>
        </div>
        <div className='col-12 col-md-2'>
          <button className='btn btn-danger btn-sm'>
            <MdDelete />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
