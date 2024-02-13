import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/ui/navbar";

const geist = localFont({
  src: "../public/fonts/Geist-Regular.woff2",
  display: "swap",
  variable: "--font-regular",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono-Regular.woff2",
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: {
    default: "the Lincoln Leek",
    template: "%s | the Lincoln Leek",
  },
  metadataBase: new URL(
    `${
      process.env.NODE_ENV === "production"
        ? "https://lhs-leek.vercel.app"
        : "http://localhost:3000"
    }`,
  ),
  description:
    "An unofficial school newspaper for Lincoln High School, providing open journalism for everyone.",
  color: "magenta",
  openGraph: {
    title: "the Lincoln Leek",
    description:
      "An unofficial school newspaper for Lincoln High School, providing open journalism for everyone.",
    type: "website",
    images: "/brand/leek-socialcard.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "the Lincoln Leek",
    description:
      "An unofficial school newspaper for Lincoln High School, providing open journalism for everyone.",
    images: ["/brand/leek-socialcard.png"],
  },
  icons: {
    icon: "/brand/leek-logo-favicon.svg",
    shortcut: "/brand/leek-logo-favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
