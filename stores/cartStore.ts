import { create } from 'zustand';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};

type CartItem = Product & { quantity: number };

interface StoreState {
  cartItems: CartItem[];
  searchTerm: string;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  setSearchTerm: (term: string) => void;
}

export const useCartStore = create<StoreState>((set) => ({
  cartItems: [],
  searchTerm: '',
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === productId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return {
            cartItems: state.cartItems.map((item) =>
              item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            ),
          };
        } else {
          return {
            cartItems: state.cartItems.filter((item) => item.id !== productId),
          };
        }
      }
      return state;
    }),
  clearCart: () => set({ cartItems: [] }),
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
