import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import AuthProvider from "@/services/AuthProvider";
import Footer from "@/components/shared/Footer/Footer";
// import 'animate.css';

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <div className="">
            {/* Navbar Content */}
            <Navbar />
          </div>
          <div className="pt-20">
            {/* Adjust padding to match navbar height */}
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
