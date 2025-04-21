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

export const metadata = {
  title: "Zichen Zhang - Portfolio",
  description: "Web developer and creative thinker",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

const RootLayout = ({ children }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-primary`}
      >
        <Snowfall />
        <Navbar />
        <main className="min-h-screen p-4 md:p-8 mr-0 md:mr-[60px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
