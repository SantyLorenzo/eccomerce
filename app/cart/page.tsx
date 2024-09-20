import Link from 'next/link';
import type { NextPage } from 'next';
import { CartList } from '@/components/cart-list';

const Cart: NextPage = () => {
  return (
    <main className="flex flex-col items-center p-12 gap-24">
      <CartList />
      <Link href="/">
        <button
          className="min-w-64 flex justify-center gap-4 border-black bg-white text-black font-bold py-2 px-4 rounded disabled:bg-gray-400">
          Seguir comprando
        </button>
      </Link>
    </main >
  );
};

export default Cart;