"use client"

import React from 'react';

import { Product, useCartStore } from '@/stores/cartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems, removeFromCart } = useCartStore(state => state);

  const itemInCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <div className="p-4 overflow-ellipsis">
        <h2 className="text-gray-800 font-bold text-xl mb-2 truncate">{product.title}</h2>
        <p className="text-gray-600 text-sm mb-2 line-clamp-4">{product.description}</p>
        <div className=' bg-violet-400 p-1 absolute top-1/3 right-0 shadow-lg'>
          <p className="text-gray-900 text-xl font-bold">USD {product.price.toFixed(2)}</p>
        </div>
        {itemInCart ? (
          <div className="bg-white absolute top-8 left-8 flex items-center gap-2">
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-black font-bold px-3 py-1 border"
            >
              -
            </button>
            <span className="text-black font-bold">{itemInCart.quantity}</span>
            <button
              onClick={() => addToCart(product)}
              className="text-black font-bold px-3 py-1 border"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-white text-black font-bold px-3 py-1  border absolute top-8 left-8"
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};