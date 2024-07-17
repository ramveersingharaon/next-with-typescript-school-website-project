import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";

const poppins = Poppins({
  display: "swap",
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 const getCookies = cookies()

 const token = getCookies.get('token')?.value
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout token ={token}>{children}</Layout>
        <Footer />
      </body>
    </html>
  );
}
