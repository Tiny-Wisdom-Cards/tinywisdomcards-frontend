import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// export const metadata = {
//   title: "Tiny Wisdom Cards",
//   description: "A collection of cards for self-discovery and mindfulness",
// };


export const metadata = {
  title: "Tiny Wisdom Cards - A collection of cards for self-discovery and mindfulness",
  description:
    "Tiny Wisdom Cards",
  metadataBase: new URL("https://tinywisdomcards.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Tiny Wisdom Cards - A collection of cards for self-discovery and mindfulness",
    description:
      "Each item in our collection is a testament to this vision, meticulously designed with imagination and reverence. It's our legacy, shared with you.",
    url: "https://tinywisdomcards.com",
    siteName: "Tiny Wisdom Cards",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Tiny Wisdom Cards Logo",
      },
    ],
    locale: "en-IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tiny Wisdom Cards - A collection of cards for self-discovery and mindfulness",
    description:
      "Each item in our collection is a testament to this vision, meticulously designed with imagination and reverence. It's our legacy, shared with you.",
    images: ["/images/logo.svg"],
    creator: "@YourTwitterHandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "#1c6d7e",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K1RB7B496K"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K1RB7B496K');
          `}
      </Script>
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
