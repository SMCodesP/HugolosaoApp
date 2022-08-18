import React, { createContext, useContext, useEffect, useState } from "react";

type CartType = {
  itemsInCart: TItemCart[];
  addItemCart: (item: TItem, quantity?: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartType>({} as CartType);

const CartProvider: React.FC = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState<TItemCart[]>([]);

  const addItemCart: CartType["addItemCart"] = (item, quantity = 1) => {
    setItemsInCart((state) => {
      return [
        ...state.filter((filteredItem) => filteredItem.id !== item.id),
        {
          ...item,
          quantity:
            findItemById(state, item.id) !== undefined
              ? quantity + findItemById(state, item.id).quantity
              : quantity,
        },
      ];
    });
  };

  const findItemById = (state: any, id: any) =>
    state.find((itemSearch: any) => itemSearch.id === id);

  const clearCart = () => {
    setItemsInCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addItemCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartType {
  const context = useContext(CartContext);

  return context;
}

export { useCart, CartProvider };

export default CartContext;
