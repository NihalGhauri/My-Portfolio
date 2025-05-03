
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nihalkhanghauri.vercel.app/"),
  keywords: [
    "Nihal Khan Ghauri",
    "nihal khan ghauri",
    "nihal khan ghouri",
    "Nihal khan",
    "Nihal",
    "Portfolio", 
    "Developer", 
    "software engineer", 
    "web developer", 
    "full-stack developer", 
    "Nihal Khan Portfolio",
    "Nihal Khan ghauri Portfolio",
  ],
  title: "Nihal Khan Ghauri | Portfolio",
  description: "Explore Nihal Khan Ghauri's portfolio. Full-stack developer with expertise in modern web technologies, AI-powered solutions, and a passion for innovation.",
  openGraph: {
    title: "Nihal Khan Ghauri | Portfolio",
    description: "Nihal Khan Ghauri professional portfolio showcasing cutting-edge projects, advanced programming expertise, and AI-powered solutions. Dive into skills, achievements, and innovative ideas shaping the future of technology.",
    images: [
      {
        url: "https://nihalkhanghauri.vercel.app/hero-image.png",
        width: 600, 
        height: 300,
        alt: "Nihal Khan Ghauri Portfolio Hero Image",
      },
    ],
    url: "https://nihalkhanghauri.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihal Khan Ghauri | Portfolio",
    description: "Explore Nihal Khan Ghauri's portfolio. Full-stack developer with expertise in modern web technologies, AI-powered solutions, and a passion for innovation.",
    images: ["https://nihalkhanghauri.vercel.app/hero-image.png"], 
  },
  icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
     <body className={`${inter.className} bg-black text-white`}
    
>
    

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
