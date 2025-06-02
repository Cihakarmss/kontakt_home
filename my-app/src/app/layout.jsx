import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
