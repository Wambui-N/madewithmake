import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Made With Make | AI-Powered Workflows",
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
      <body className="satoshi-regular">
        <Nav />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
