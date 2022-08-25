import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type CartType = {
  itemsInCart: TItemCart[];
  addItemCart: (item: TItem, quantity?: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartType>({} as CartType);

const CartProvider: React.FC = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState<TItemCart[] | null>(null);

  const addItemCart: CartType["addItemCart"] = (item, quantity = 1) => {
    setItemsInCart((state) =>
      state !== null
        ? findItemById(state, item.id) === undefined
          ? [
              ...state.filter((filteredItem) => filteredItem.id !== item.id),
              {
                ...item,
                quantity,
              },
            ]
          : state.map((statedItem) => ({
              ...statedItem,
              ...(statedItem.id === item.id && {
                quantity: quantity + statedItem.quantity,
              }),
            }))
        : []
    );
  };

  const findItemById = (state: any, id: any) =>
    state.find((itemSearch: any) => itemSearch.id === id);

  const clearCart = () => {
    setItemsInCart([]);
  };

  const refreshStoreCart = async () => {
    try {
      await AsyncStorage.setItem("@cart", JSON.stringify(itemsInCart));
    } catch (error) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const cartValues = await AsyncStorage.getItem("@cart");
        setItemsInCart(cartValues !== null ? JSON.parse(cartValues) : []);
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    refreshStoreCart();
  }, [itemsInCart]);

  return (
    <CartContext.Provider
      value={{
        itemsInCart: itemsInCart ? itemsInCart : [],
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
