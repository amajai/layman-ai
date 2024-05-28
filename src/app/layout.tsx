import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Layman AI",
  description: "Simplifies complex text, making it easy to understand",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <Nav/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
