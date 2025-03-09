import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";


export const metadata: Metadata = {
  title: "Stevie's Details LLC",
  description: "Premium automotive details servicing Orange County, California!",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="__next">

          <header>
            <nav>
                <h1 id="top-left-text"><Link href="/">Stevie's Details LLC</Link></h1>
                <div>
                  <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><a href="https://www.yelp.com/biz/stevie-s-details-santa-ana-3#reviews" target="_" aria-label="Reviews link opens in a new tab">Reviews</a></li>
                  </ul>
                </div>
            </nav>
          </header>

          <main className="main-column">
            {children}
          </main>

          <footer>
          © {new Date().getFullYear()} Stevie's Details LLC
          </footer>

        </div>
      </body>
    </html>
  );
}
