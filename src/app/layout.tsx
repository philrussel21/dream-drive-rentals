import {Inter} from 'next/font/google';
import type {Metadata} from 'next';
import {Header} from '@app/components';
import headerLinks from '@app/data/header.json';
import contactData from '@app/data/contact.json';
import './globals.css';
import {Footer} from '@app/components/partials';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Dream Drive Rentals',
  description: 'Generated by create next app',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-black text-brand-platinum">
          <Header links={headerLinks} />
          {children}
          <Footer
            email={contactData.contact.email}
            phone={contactData.contact.phone}
            address={contactData.contact.address}
            links={headerLinks}
            content="We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs."
          />
        </main>
      </body>
    </html>
  );
}
