import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "MADE WITH MAKE | AI-Powered Workflows",
  description:
    "Save time, get more leads, and make your business run smoothly with easy, custom automation built for you.",
  keywords: [
    "AI automation",
    "workflow automation",
    "business automation",
    "CRM integration",
    "lead generation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="satoshi-regular bg-black">
        <Nav />
        <div className="">
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
        <Footer />
      </body>
    </html>
  );
}
