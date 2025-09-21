import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Environment variables for tracking IDs
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-MGP4QGR2';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-SS84M5RKCS';

export const metadata: Metadata = {
  title: "Neurdle",
  description: "A Neuro-themed wordle.",
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  robots: "index, follow",
  openGraph: {
    title: "Neurdle",
    description: "A Neuro-themed wordle.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags are now handled by Next.js metadata API above */}
      </head>
      <body>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height={0} width={0} 
            style={{
              display: "none",
              visibility: "hidden"
            }}>
          </iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
