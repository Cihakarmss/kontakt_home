// contexts/CartContext.js
"use client";
import { createContext, useContext, useReducer } from 'react';

// Cart actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  TOGGLE_ITEM_SELECTION: 'TOGGLE_ITEM_SELECTION'
};

// Cart reducer
function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1, selected: true }]
      };

    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case CART_ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0)
      };

    case CART_ACTIONS.TOGGLE_ITEM_SELECTION:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, selected: !item.selected }
            : item
        )
      };

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
}

// Initial state
const initialState = {
  items: [],
  isOpen: false
};

// Create context
const CartContext = createContext();

// Cart Provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id, quantity } });
  };

  const toggleItemSelection = (id) => {
    dispatch({ type: CART_ACTIONS.TOGGLE_ITEM_SELECTION, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  // Calculate totals
  const selectedItems = state.items.filter(item => item.selected);
  const totalItems = selectedItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalOriginalAmount = selectedItems.reduce((total, item) => total + (item.originalPrice * item.quantity), 0);
  const totalDiscount = totalOriginalAmount - totalAmount;

  const value = {
    items: state.items,
    selectedItems,
    totalItems,
    totalAmount,
    totalOriginalAmount,
    totalDiscount,
    addItem,
    removeItem,
    updateQuantity,
    toggleItemSelection,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// AddToBox component - updated to use context
export function AddToBox({ product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.discountPrice.replace('₼', '')),
      originalPrice: parseFloat(product.originalPrice.replace('₼', '')),
      image: product.image,
      quantity: quantity,
      category: product.category
    };

    addItem(cartItem);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="add-to-box">
      <div className="quantity-selector">
        <button 
          className="quantity-btn"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          -
        </button>
        <span className="quantity-display">{quantity}</span>
        <button 
          className="quantity-btn"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      
      <button
        onClick={handleAddToCart}
        className={`btn-add-cart ${isAdded ? 'success' : ''}`}
      >
        {isAdded ? '✓ Səbətə əlavə edildi!' : '🛒 Səbətə əlavə et'}
      </button>
    </div>
  );
}

// Usage example in _app.js or layout.js:
/*
import { CartProvider } from '@/contexts/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
*/