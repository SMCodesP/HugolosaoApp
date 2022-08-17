import React, { createContext, useContext, useEffect, useState } from "react";

type CartType = {
  itemsInCart: TItemCart[];
  addItemCart: (item: TItem, quantity?: number) => void;
};

const CartContext = createContext<CartType>({} as CartType);

const CartProvider: React.FC = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState<TItemCart[]>([]);

  const addItemCart: CartType["addItemCart"] = (item, quantity = 1) => {
    setItemsInCart((state) => [
      ...state.filter((filteredItem) => filteredItem.id !== item.id),
      {
        ...item,
        quantity,
      },
    ]);
  };

  useEffect(() => {
    if (itemsInCart.length !== 0) {
    }
  }, [itemsInCart]);

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addItemCart,
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
