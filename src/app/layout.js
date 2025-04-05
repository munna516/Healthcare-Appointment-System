import localFont from "next/font/local";
import "./globals.css";
import NextAuthProvider from "src/providers/NextAuthProvider";
import { Navbar } from "@components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { Footer } from "@components/Footer/Footer";

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
  title: "HealthPoint- Health Care System",
  description:
    "A seamless and efficient platform for scheduling and managing healthcare appointments with AI-powered symptom analysis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <nav>
          <Navbar />
          {/* {children} */}
          </nav>
          <main className="min-h-screen scroll-smooth max-w-screen-2xl mx-auto">
            {children}
            <Toaster />
          </main>
          <footer>
            <Footer />
          </footer>
        </NextAuthProvider>
      </body>
    </html>
  );
}
