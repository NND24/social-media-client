import "./globals.css";

export const metadata = {
  title: "Trang chủ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={``}>{children}</body>
    </html>
  );
}
