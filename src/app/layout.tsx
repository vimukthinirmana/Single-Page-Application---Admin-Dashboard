import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Pagewrapper from "@/components/pagewrapper";

const karla = Karla({
    weight:['200','300','400','500','600','700','800'],
    subsets:['latin'],
    variable:"--font-karla"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Sidebar></Sidebar>
        <Header></Header>
        <Pagewrapper childern={undefined}>
         
        </Pagewrapper>
        
        </body>
    </html>
  );
}
