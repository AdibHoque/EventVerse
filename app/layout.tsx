import type {Metadata, Viewport} from "next";
import "./globals.css";
import {Poppins} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#624CF5",
};

export const metadata: Metadata = {
  title: "EventVerse - Your Go-To Platform for Events and Experiences!",
  description:
    "Discover, host, and attend exclusive events on EventVerse. The ultimate platform for unforgettable experiences, where you can create events, buy tickets, and connect with others.",
  icons: {
    icon: "/assets/images/logo.svg",
    shortcut: "/assets/images/logo.svg",
  },
  keywords: ["events", "management", "organizer", "buy tickets", "connect"],
  applicationName: "EventVerse",

  openGraph: {
    title: "EventVerse - Your Event, Our Platform!",
    description:
      "Discover, host, and attend exclusive events all in one place.",
    url: "https://eventversely.vercel.app/",
    siteName: "EventVerse",
    images: [
      {
        url: "/assets/images/og-image.webp",
        width: 800,
        height: 600,
        alt: "EventVerse banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EventVerse - Discover Events & Create Memories",
    description:
      "The ultimate platform for hosting and attending exclusive events.",
    images: ["/assets/images/og-image.webp"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
