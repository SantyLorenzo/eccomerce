"use client"

import React from 'react';
import { useCartStore } from '@/stores/cartStore';

export const CartList: React.FC = () => {
  const { cartItems } = useCartStore(state => state);

  if (cartItems.length === 0) {
    return (
      <p className='text-gray-800'>No hay items en el carrito.</p>
    )
  }

  return (
    <div className='w-2/3 gap-6 flex flex-col'>
      <h2 className='text-gray-800 text-2xl'>Tu Carrito</h2>
      <ul className='rounded-xl bg-white p-8'>
        {cartItems.map(item => (
          <li key={item.id} className="flex items-center gap-12 py-2 border-b last:border-b-0">
            <span className='text-gray-800'>{item.quantity}</span>
            <span className='text-gray-800'>{item.title}</span>
            <span className='text-gray-800 flex ml-auto'>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};