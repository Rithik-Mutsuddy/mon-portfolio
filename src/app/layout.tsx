import './globals.css';
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio de Rithik',
  description: 'Site personnel de Rithik Mutssuddy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="flex">
        <ThemeProvider attribute="class" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
