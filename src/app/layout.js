// layout.js
import './globals.css';
import AOSProvider from '@/components/AOSProvider';
import ScrollToTopButton from '@/components/ScrollToTopButton'; // Import the component
import Script from 'next/script'; // ✅ import Script here
import Favicon from '/public/favicon.ico'; // ✅ import the favicon
export const metadata = {
  metadataBase: new URL('https://www.nanakductcleaning.com'),
    title: 'Nanak Duct Cleaning | Professional Duct Cleaning Services in Canada',
  description: 'Nanak Duct Cleaning provides expert air duct, dryer vent, and furnace cleaning services in Brampton, Toronto, and the Greater Toronto Area. Improve your indoor air quality and save on energy bills with our reliable and affordable services.',
  keywords: 'duct cleaning in Canada, duct cleaning Brampton, duct cleaning Toronto, duct cleaning Mississauga, duct cleaning GTA, furnace cleaning, air duct cleaning, dryer vent cleaning, vent cleaning services Canada, professional duct cleaning, HVAC cleaning, commercial duct cleaning, residential duct cleaning, best duct cleaning services Canada, affordable duct cleaning, indoor air quality improvement, energy savings, certified duct cleaners, Nanak Duct Cleaning services',
  author: 'Nanak Duct Cleaning',
  openGraph: {
    title: 'Nanak Duct Cleaning | Professional Duct Cleaning Services in Canada',
    description: 'Nanak Duct Cleaning provides expert air duct, dryer vent, and furnace cleaning services in Brampton, Toronto, and the Greater Toronto Area. Improve your indoor air quality and save on energy bills with our reliable and affordable services.',
    siteName: 'Nanak Duct Cleaning',
    locale: 'en_CA',
    type: 'website',
images: [
      {
        url: '/logo1.png', // Replace with a high-quality image (at least 1200x630px)
        width: 1200,
        height: 630,
        alt: 'Nanak Duct Cleaning van with professional cleaners.',
      },
    ],
  },
icons: [{ rel: 'icon', url: Favicon.src }], // ✅ use imported favicon
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Favicon (absolute URL for SEO & Google Search) */}
        <link rel="icon" href={Favicon.src} type="image/x-icon" />
        <link rel="shortcut icon" href={Favicon.src} type="image/x-icon" />


  {/* Canonical URL */}
  <link rel="canonical" href="https://www.nanakductcleaning.com/" />

  {/* Structured Data for favicon/logo */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.nanakductcleaning.com/",
      "name": "Nanak Duct Cleaning",
      "publisher": {
        "@type": "Organization",
        "name": "Nanak Duct Cleaning",
        "logo": {
          "@type": "ImageObject",
          url: Favicon.src,
        }
      }
    })
  }} />

  {/* Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-T54H29T4P4"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-T54H29T4P4');
    `}
  </Script>
</head>

      <body>
        {/* Wrap children with the AOSProvider */}
        <AOSProvider>
          <div className="container-max-width">
            {children}
          </div>
          <ScrollToTopButton /> {/* Correct placement: inside the main JSX tree */}
        </AOSProvider>
      </body>
    </html>
  );
}