// layout.js
import './globals.css';
import AOSProvider from '@/components/AOSProvider';
import ScrollToTopButton from '@/components/ScrollToTopButton'; // Import the component

export const metadata = {
  metadataBase: new URL('https://nanakductcleaning.com'),
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }, // multi-size ICO
    ],
    apple: '/favicon-180x180.png', // Apple touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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