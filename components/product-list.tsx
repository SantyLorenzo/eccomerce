"use client"

import React, { useState } from 'react';
import { ProductCard } from './product-card';
import { Product, useCartStore } from '@/stores/cartStore';
import { useProducts } from '@/hooks/useProducts';
import { EyeIcon, LoaderCircle } from 'lucide-react';

export const ProductList: React.FC = () => {
  const searchTerm = useCartStore(state => state.searchTerm);
  const { data: allProducts, isLoading, error } = useProducts();
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  React.useEffect(() => {
    if (allProducts && displayedProducts.length === 0) {
      setDisplayedProducts(allProducts.slice(0, 3));
    }
  }, [allProducts, displayedProducts.length]);

  const filteredProducts = displayedProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLoadMore = () => {
    if (allProducts) {
      const nextProducts = allProducts.slice(displayedProducts.length, displayedProducts.length + 3);
      setDisplayedProducts((prev) => [...prev, ...nextProducts]);
    }
  };

  if (isLoading) {
    return (
      <div className='text-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <LoaderCircle className='animate-spin' />
      </div>
    )
  }

  if (error) {
    return (
      <p className='text-gray-800'>Error loading products. Please try again later.</p>
    )
  }

  return (
    <div className='flex flex-col items-center gap-12'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts && filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button
        onClick={handleLoadMore}
        disabled={!filteredProducts || !!searchTerm || !allProducts || filteredProducts.length >= allProducts?.length}
        className="min-w-64 flex justify-center gap-4 border-black bg-white text-black font-bold py-2 px-4 rounded disabled:bg-gray-400"
      >
        <EyeIcon />
        Ver más
      </button>
    </div>
  );
};
