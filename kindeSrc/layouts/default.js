import React from "react";

export default function RootLayout({ children }) {
  // Simple, standard CSS for styling the page.
  const styles = `
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #0d1117; /* Dark background */
      color: #e6edf3;           /* Light text */
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .auth-card {
      background-color: #161b22; /* Slightly lighter card background */
      padding: 2.5rem;
      border-radius: 0.75rem;
      border: 1px solid #30363d;
      width: 100%;
      max-width: 420px;
      text-align: center;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  `;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign In</title>
        <style>{styles}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
