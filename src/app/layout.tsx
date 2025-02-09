import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script"; // Import for third-party scripts
import "./globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "MADE WITH MAKE | AI-Powered Workflows",
  description:
    "Save time, get more leads, and make your business run smoothly with easy, custom automation built for you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="satoshi-regular bg-black">
        {/* Hotjar Script */}
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:5297957,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />

        <Nav />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
