import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/stores/cartStore';

const fetchProducts = async (page: number = 1, limit: number = 10): Promise<Product[]> => {
  const { data } = await axios.get(`https://fakestoreapi.com/products?limit=${limit}&skip=${(page - 1) * limit}`);
  return data;
};

export const useProducts = (page: number = 1, limit: number = 100) => {
  return useQuery<Product[], Error>({
    queryKey: ['products', page, limit],
    queryFn: () => fetchProducts(page, limit),
  });
};