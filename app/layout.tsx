import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Robson Quadros | Diretor de Estratégia & Marketing',
  description: 'Estruturando negócios com estratégia, tráfego e posicionamento. Crescimento com método, não com sorte.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
