"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import electronics from "@/data/productCardData";
import AddtoBox from "@/components/AddtoBox";

export default function DetailsPage() {
  const params = useParams();
  const { id } = params;
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedStorage, setSelectedStorage] = useState('256GB');

  const product = electronics.find((p) => p.id === parseInt(id));
  if (!product) return <p>Ürün bulunamadı</p>;

  return (
    <div className="product-container">
      <div className="product-layout">
        {/* Image Section */}
        <div className="product-images">
          <img 
            src={product.image} 
            alt={product.name} 
            className="main-image"
          />
          <div className="thumbnail-list">
            <img src={product.image} alt="thumbnail" className="thumbnail active" />
            <img src={product.image} alt="thumbnail" className="thumbnail" />
            <img src={product.image} alt="thumbnail" className="thumbnail" />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="product-info">
          <div className="product-brand">Apple səhifəsinə keç</div>
          
          <h1 className="product-title">{product.name}</h1>
          
          <div className="delivery-info">2 saata çapırmağa</div>
          
          <div className="rating">
            <div className="stars">★ 0.0</div>
            <div className="rating-text">Rəylər 0</div>
            <div className="product-code">Məhsul mövuddadır TM-DG-SBP-110S-SM-2933</div>
          </div>

          {/* Color Selection */}
          <div className="color-section">
            <h3>Rəng seçimi:</h3>
            <div className="color-options">
              <div 
                className={`color-option black ${selectedColor === 'black' ? 'selected' : ''}`}
                onClick={() => setSelectedColor('black')}
              ></div>
              <div 
                className={`color-option white ${selectedColor === 'white' ? 'selected' : ''}`}
                onClick={() => setSelectedColor('white')}
              ></div>
              <div 
                className={`color-option gold ${selectedColor === 'gold' ? 'selected' : ''}`}
                onClick={() => setSelectedColor('gold')}
              ></div>
              <div 
                className={`color-option blue ${selectedColor === 'blue' ? 'selected' : ''}`}
                onClick={() => setSelectedColor('blue')}
              ></div>
            </div>
          </div>

          

          {/* Price Section */}
          <div className="price-section">
            <div className="discount-badge">-400₼</div>
            <div>
              <span className="current-price">{product.discountPrice}</span>
              <span className="original-price">{product.originalPrice}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <AddtoBox product={product} />
            <button className="btn-one-click">
              📱 Bir klikə al
            </button>
            <button className="btn-favorite">♡</button>
            <button className="btn-compare">⚖</button>
          </div>

          {/* Trade-in Section */}
          <div className="trade-in-section">
            <div className="trade-in-badge">Trade-in Yeni</div>
            <p>Cihazını Trade-in ilə dəyişərək şəraitli şərtlər əldə et</p>
          </div>

          {/* Product Details */}
          <div className="product-details">
            <h3>Həssəl alış kalkulyatoru</h3>
            <div className="detail-item">
              <span className="detail-label">Kateqoriya:</span>
              <span className="detail-value">{product.category}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Anbar:</span>
              <span className="detail-value">{product.stock}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Taksit:</span>
              <span className="detail-value">{product.installment}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Endirim:</span>
              <span className="detail-value">{product.discount}</span>
            </div>
          </div>

          {/* Installment Calculator */}
          <div className="installment-section">
            <h3>Taksit kalkulyatoru</h3>
            <div className="installment-options">
              <div className="installment-option">
                <div className="installment-months">6 ay</div>
                <div className="installment-amount">533₼</div>
              </div>
              <div className="installment-option">
                <div className="installment-months">12 ay</div>
                <div className="installment-amount">267₼</div>
              </div>
              <div className="installment-option">
                <div className="installment-months">18 ay</div>
                <div className="installment-amount">178₼</div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      
      {/* Chat Support */}
      <div className="chat-support">
        Canlı dəstək xidməti
      </div>
    </div>
  );
}