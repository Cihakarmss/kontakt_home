import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import { CartProvider } from "@/hooks/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <main>
            <Nav />
            {children}
            <Footer />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
