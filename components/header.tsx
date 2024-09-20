"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useCartStore } from '@/stores/cartStore';

export const Header: React.FC = () => {
  const { cartItems, searchTerm, setSearchTerm } = useCartStore(state => state);

  return (
    <header className="bg-slate-400 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            alt="logo"
            width={140}
            height={40}
            src="/logo.png"
          />
        </Link>
        <input
          type="text"
          value={searchTerm}
          placeholder="Buscar productos..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 pl-4 rounded-full mr-4 text-black w-6/12"
        />
        <Link href="/cart">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -bottom-4 -left-4 bg-red-500 rounded-full px-2 py-1 text-xs">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};