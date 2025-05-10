import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import Footer from "./components/footer";
import "./globals.css";


const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Toby Killen",
  icons: {
    icon: "/me_2.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
