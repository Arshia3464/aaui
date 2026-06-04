// app/not-found.tsx
import "./globals.css";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p>Page not found</p>
          <a href="/en" className="text-blue-500 underline mt-4 block">
            Go Home
          </a>
        </div>
      </body>
    </html>
  );
}
