import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Match Magician",
  description: "Created by Nihad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
