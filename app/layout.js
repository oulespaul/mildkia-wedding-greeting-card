import "./globals.css";
import { Inter } from "next/font/google";
import 'animate.css/animate.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Mild ♥ Kia";
const APP_DESCRIPTION = "Wedding greeting card online";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - PWA App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/mk-icon-192x192.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
