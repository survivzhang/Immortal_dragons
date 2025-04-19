import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Snowfall from "@/components/canvasbg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-primary`}
      >
        <Snowfall />
        <Navbar />
        <main className="min-h-screen p-8 mr-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
