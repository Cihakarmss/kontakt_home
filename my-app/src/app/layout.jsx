import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";


export default function RootLayout( { children }) {
  return (
    <html lang="en" >
      <body >
        <Nav />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
 
}
