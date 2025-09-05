// layout.js
import './globals.css';
import AOSProvider from '@/components/AOSProvider';

export const metadata = {
  title: 'Nanak Duct Cleaning | Professional Duct Cleaning Services in Canada',
  description: 'Nanak Duct Cleaning provides expert air duct, dryer vent, and furnace cleaning services in Brampton, Toronto, and the Greater Toronto Area. Improve your indoor air quality and save on energy bills with our reliable and affordable services.',
  keywords: 'duct cleaning, furnace cleaning, air duct cleaning, dryer vent cleaning, GTA, Toronto, Mississauga, Brampton, Canada',
  author: 'Nanak Duct Cleaning',
  openGraph: {
    title: 'Nanak Duct Cleaning | Professional Duct Cleaning Services in Canada',
    description: 'Nanak Duct Cleaning provides expert air duct, dryer vent, and furnace cleaning services in Brampton, Toronto, and the Greater Toronto Area. Improve your indoor air quality and save on energy bills with our reliable and affordable services.',
    siteName: 'Nanak Duct Cleaning',
    locale: 'en_CA',
    type: 'website',
  },
  icons: {
    icon: '/title-logo.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* Wrap children with the AOSProvider */}
        <AOSProvider>
          <div className="container-max-width">
            {children}
          </div>
        </AOSProvider>
      </body>
    </html>
  );
}