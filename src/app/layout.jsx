import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

import { poppins } from "./fonts";

export const metadata = {
  title: "Orderyuuks",
  description: "Percayakan kebutuhan digitalmu di sini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
