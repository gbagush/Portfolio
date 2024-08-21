// app/layout.tsx
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import LatestCommit from '../components/LatestCommit';
import Image from 'next/image';

// Importing Inter font with weights 100 to 900 and display swap
const inter = Inter({
  subsets: ["latin"],
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  display: "swap",
});

// Importing JetBrains Mono font with weights 100 to 800 and display swap
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: [100, 200, 300, 400, 500, 600, 700, 800],
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "a simple portfolio created with patience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/about me.png" /></head>
      <body suppressHydrationWarning={true} className={`${inter.className} ${jetBrainsMono.className} bg-gruvbox-dark text-gruvbox-milk`}>
        <div className="sm:pt-20 max-w-screen-lg mx-auto p-5 relative">
          <div className="z-0 absolute -mt-5 right-5 opacity-30 select-none">
            <Image
              src="/rocket.gif"
              alt="Rocket"
              width={160}  
              height={160} 
              unoptimized
              className="w-40 h-auto" 
            />
          </div>

          <div className="mb-10"><Navbar /></div>
          <div className="relative mb-10">
            {children}
          </div>
          <div className="z-0 absolute -mt-10 text-[8rem] opacity-10 select-none">🔧</div>
          <LatestCommit />
        </div>
      </body>
    </html>
  );
}
