import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/SiteChrome";
import { site } from "@/lib/projects";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Downloaded and self-hosted at build time by next/font — no runtime request
// to Google, which also keeps the static export self-contained.
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },

  // The site is meant to be reached by direct link only, so every page asks
  // search engines not to index it or follow its links. This is the reliable
  // mechanism: robots.txt controls crawling, not indexing.
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
