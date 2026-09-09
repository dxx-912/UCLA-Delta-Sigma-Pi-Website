import type { Metadata } from "next";
import { Archivo, Karla } from "next/font/google";
import "./globals.css";
// The /next entry point, not /react — it hooks into App Router navigation so
// client-side route changes are counted as pageviews.
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UCLA Delta Sigma Pi — Xi Omicron Chapter",
  description:
    "UCLA's premier co-ed business fraternity. Founded in 1999, the Xi Omicron Chapter of Delta Sigma Pi aims to nurture the next generation of business leaders at UCLA.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Marks JS as available before paint so scroll-reveal styles apply only
            with JS; without it, every section stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      {/* Column layout so short pages (e.g. the Leadership cover) still push
          the footer to the bottom of the viewport instead of leaving a white gap. */}
      <body className="flex min-h-screen flex-col font-body text-ink antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* In the root layout, so every route is tracked without per-page setup. */}
        <Analytics />
      </body>
    </html>
  );
}
