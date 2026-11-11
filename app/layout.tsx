import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skilverss — Premium Creative Design Agency",
  description: "Skilverss is a premium creative design agency crafting thumbnails, posters, banners, logos, social posts, catalogs, presentations and video edits that help brands stand out.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts + icons loaded via plain <link> tags (NOT next/font) so a
            flaky/offline network never breaks `next dev` or the build. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,500&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
