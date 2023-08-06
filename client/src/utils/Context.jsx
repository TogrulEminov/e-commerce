import { createContext, useEffect, useState } from 'react';
export const Context = createContext(null);

function AppContext({ children }) {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  useEffect(() => {
    let count = 0;
    cartItems?.map((item) => (count += item.attributes.quantity));
    setCartCount(count);
    let subTotal = 0;
    cartItems?.map(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };
  const handleRemoveCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === 'inc') {
      items[index].attributes.quantity += 1;
    } else if (type === 'dec') {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };
  const VALUES = {
    categories,
    products,
    setProducts,
    setCategories,
    cartItems,
    setCartItems,
    cartCount,
    setCartCount,
    cartSubTotal,
    setCartSubTotal,
    handleToCart,
    handleCartProductQuantity,
    handleRemoveCart,
  };
  return <Context.Provider value={VALUES}>{children}</Context.Provider>;
}

export default AppContext;
