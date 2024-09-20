import type { NextPage } from 'next';
import { ProductList } from '@/components/product-list';

const Home: NextPage = () => {
  return (
    <main className="container mx-auto p-12 bg-gray-200">
      <ProductList />
    </main>
  );
};

export default Home;