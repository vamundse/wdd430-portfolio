import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Full-stack developer portfolio',
};

export default function RootLayout({
  children} : {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    );
  }