import type { Metadata } from 'next';
// @ts-ignore
import './globals.css';
import { AnimatedCursor } from '../components/AnimatedCursor';

export const metadata: Metadata = {
  title: 'Akash Pallam | AI/ML Engineer & Unity XR Developer',
  description: 'Premium portfolio of Akash Pallam — AI, XR/AR, Unity, Computer Vision, Accessibility AI, and applied research.',
  metadataBase: new URL('https://akashpallam13.com'),
  openGraph: {
    title: 'Akash Pallam | AI/ML Engineer & Unity XR Developer',
    description: 'Research-grade portfolio for AI, XR/AR, Unity, and computer vision innovation.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AnimatedCursor />
        {children}
      </body>
    </html>
  );
}
