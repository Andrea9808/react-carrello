import React from 'react'
import products from '../products'
import CartItem from './CartItem'
import '../Cart.css'
import {MdRemoveShoppingCart} from 'react-icons/md'

const Cart = () => {
  return (
    <section style={{ margin: '2rem' }}>
      <div className='row'>
        <div className='col-12 d-flex justify-content-between align-items-center custom-gap'>
          <h6 className='flex-grow-1 text-center'>Item</h6>
          <h6 className='flex-grow-1 text-center'>Nome</h6>
          <h6 className='flex-grow-1 text-center'>Qty</h6>
          <h6 className='flex-grow-1 text-center'>Prezzo</h6>
          <button className='btn btn-danger'>
            <MdRemoveShoppingCart />
          </button>
        </div>
      </div>
      <hr />
      <section>
        {
          products.map((el => {
            return (
              <CartItem key={el._id} {...el} />
            )
          }))
        }
      </section>
    </section>
  );
};

export default Cart
