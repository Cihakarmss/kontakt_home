"use client";
import { useCart } from "@/hooks/CartContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <div>
      <nav>
        <div>
          <div className="logo_header">
            <Link href="/">
              <Image
                src="/logo_kontakt.svg"
                alt="Kontakt Logo"
                width={155}
                height={34.31}
              />
            </Link>
          </div>

          <ul>
            <li>
              <Link href="/trade-in">Trade-in</Link>
            </li>
            <li>
              <Link href="/magazalar">Mağazalar</Link>
            </li>
            <li>
              <Link href="/korporativ">Korporativ satışlar</Link>
            </li>
          </ul>

          <div className="right-nav">
            <div className="phone_number">
              <span>*</span>
              <Link href="tel:6060">6060</Link>
            </div>

            <div className="profInfo_buttons">
              <Link href="/ayliq" className="ayliq">
                Aylıq Ödəniş
              </Link>
              <button className="register">Daxil ol</button>
            </div>

            <div className="language-selector">
              <div>
                AZ <div className="icon-chevron-down"></div>
              </div>
              <div className="language_items">
                <div>RU</div>
              </div>
            </div>

            <Link href="/cartpage" className="cart-button">
              🛒
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
