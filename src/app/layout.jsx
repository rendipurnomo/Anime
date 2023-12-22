import { Exo_2 } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

const exo = Exo_2({ subsets: ['latin'],
  weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Anime',
  description: 'Anime listing movie',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${exo.className} bg-color-dark text-color-light`} suppressHydrationWarning={true}>
        <Navbar />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
