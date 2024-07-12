import React from 'react';
import '../Cart.css';
import { MdRemoveShoppingCart } from 'react-icons/md';
import CartItem from './CartItem';
import { useGlobalContext } from '../context/context';

const Cart = () => {

  const { products} = useGlobalContext();
  const {deleteAll} = useGlobalContext();
 

  return (
    <section className='text-center' style={{ margin: '2rem' }}>
      <div className='row'>
        <div className='col-12'>
          <div className='d-flex justify-content-between align-items-center custom-gap'>
            <h4>Carrello</h4>
            <button onClick={deleteAll} className='btn btn-danger'>
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
