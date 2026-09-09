import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://le-ngor-menu.solitdio079.chatgpt.site'),
  title: 'Le Ngor — Restaurant & Menu',
  description: 'La carte du Restaurant Le Ngor : grillades, poissons, fruits de mer et spécialités.',
  openGraph: {
    title: 'Le Ngor — Restaurant & Menu',
    description: 'Grillades, poissons, fruits de mer et spécialités du Restaurant Le Ngor.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Le Ngor — Grillades, poissons et fruits de mer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Ngor — Restaurant & Menu',
    description: 'Grillades, poissons, fruits de mer et spécialités du Restaurant Le Ngor.',
    images: ['/og.png'],
  },
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
