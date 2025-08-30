"use client";
import { useCart } from "@/hooks/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartToBox() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    clearCart,
    getTotalItems,
  } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Sepetim ({totalItems} Mehsul)</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Sepetiniz boş</p>
            <Link href="/" className="continue-btn">
              Esas sehifeye dön
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.originalPrice}₼</p>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        ➖
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        ➕
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Toplam: {totalPrice}₼</h3>
              <button className="checkout-btn">Sifarisi resmilesdir</button>
              <button onClick={clearCart} className="clear-btn">
                Sepeti Temizle
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
