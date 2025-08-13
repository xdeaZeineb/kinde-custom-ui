import "../../globals.css";

// This is a React Server Component, which Kinde's build system will render.
export default function LoginPage() {
  return (
    <html lang="en">
      {/* Add class="dark" to the body to force dark mode */}
      <body className="dark">
        <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
          <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 text-card-foreground shadow-lg">
            {/* This is the most important part.
              Kinde will replace this placeholder with the actual, functional
              sign-in form (for email, passwords, OTP, etc.).
              It will automatically be styled by your globals.css file.
            */}
            {"{{kinde_login_form}}"}
          </div>
        </div>
      </body>
    </html>
  );
}
