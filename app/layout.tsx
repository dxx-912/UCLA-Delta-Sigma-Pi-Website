import type { Metadata } from "next";
import { Archivo, Karla } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AUTHOR_NAME, AUTHOR_URL } from "@/components/siteConfig";

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
  // Emits <meta name="author" content="Daniel Xing" /> alongside title/description.
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
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
        {/* Build credit for anyone with dev tools open. Inline in <head> rather
            than a client component so it fires once per full page load without
            adding a hydration boundary. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log(
  "%c${AUTHOR_NAME}%c Site designed & built by ${AUTHOR_NAME}\\n${AUTHOR_URL}",
  "font:600 12px/1.8 ui-sans-serif,system-ui;background:#2b2b2b;color:#fff;padding:4px 8px;border-radius:3px",
  "font:12px/1.8 ui-sans-serif,system-ui;color:#6b7280"
);`,
          }}
        />
      </head>
      <body className="font-body text-ink antialiased">
        {/* React cannot emit a bare comment node from JSX, so this inert wrapper
            carries it. Renders as an empty div — no layout or visual effect. */}
        <div
          dangerouslySetInnerHTML={{
            __html: `<!-- Site designed & built by ${AUTHOR_NAME}, ${new Date().getFullYear()} -->`,
          }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
