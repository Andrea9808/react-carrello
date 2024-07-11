import React from 'react';
import '../Cart.css';
import { MdRemoveShoppingCart } from 'react-icons/md';
import CartItem from './CartItem';
import products from '../products';

const Cart = () => {
  return (
    <section className='text-center' style={{ margin: '2rem' }}>
      <div className='row'>
        <div className='col-12'>
          <div className='d-flex justify-content-between align-items-center custom-gap'>
            <h4>Carrello</h4>
            <button className='btn btn-danger'>
            <span className='mx-2 d-none d-lg-inline-block'>Rimuovi tutto dal carrello</span>
            <MdRemoveShoppingCart />
            </button>
          </div>
        </div>
      </div>
      <hr />
      {products.map((el) => (
        <CartItem key={el._id} {...el} />
      ))}
    </section>
  );
};

export default Cart;
