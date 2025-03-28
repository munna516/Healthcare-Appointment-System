import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/providers/NextAuthProvider";
import Providers from "./providers";

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

export const metadata = {
  title: "Healthcare Apointment System",
  description:
    "A seamless and efficient platform for scheduling and managing healthcare appointments with AI-powered symptom analysis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NextAuthProvider>
            <nav>
              <Navbar />
            </nav>
            <main className="pt-16 min-h-screen">
              {children}
              <Toaster />
            </main>
            <footer>
              <Footer />
            </footer>
          </NextAuthProvider>
        </Providers>
      </body>
    </html>
  );
}
