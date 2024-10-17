import { ThemeProvider } from 'next-themes';
import "./globals.css";
import ThemeToggler from './components/ThemeToggler';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <ThemeToggler />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
