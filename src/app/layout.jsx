import "./globals.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${poppins.variable} ${josefin.variable}`}>
      <body className={``}>{children}</body>
    </html>
  );
}
