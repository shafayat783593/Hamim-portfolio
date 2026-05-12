import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdul Al Hamim | Portfolio",
  description: "Full-Stack Developer Portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <Providers>
          <Navbar />
          <main className="w-full overflow-x-hidden">{children}</main>
        </Providers>
      </body>
    </html>
  );
}