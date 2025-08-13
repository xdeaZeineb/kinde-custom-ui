import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Add class="dark" to the body to force dark mode */}
      <body className="dark">{children}</body>
    </html>
  );
}
