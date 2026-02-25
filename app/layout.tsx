import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Robson Quadros | Fotógrafo e Videomaker',
  description: 'Portfólio e links de Robson Quadros - Fotógrafo e Videomaker',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
