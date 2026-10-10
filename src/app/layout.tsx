import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChatProvider } from "@/components/ChatProvider";
import Chat from "@/components/Chat";
import { pharmacy } from "@/lib/data";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: pharmacy.name,
  description: pharmacy.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col font-sans">
        <ChatProvider>
          <Navbar />
          <main className="site-main flex-1">{children}</main>
          <Footer />
          <Chat />
        </ChatProvider>
      </body>
    </html>
  );
}
