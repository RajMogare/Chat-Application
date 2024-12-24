import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Provider from "@/components/Provider";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/Bottom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chat App",
  description: "Chat App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-2 `}
      >
        <Provider>
          <TopBar />
          {children}
          <BottomBar/>
        </Provider>
      </body>
    </html>
  );
}
