import AppHeader from "@/components/AppHeader/AppHeader";

import "./globals.css";
import styles from "./layout.module.css";
import TanStackProvider from "@/components/TanStackProvider";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "900"],
  display: "swap",
  variable: "--font-roboto",
  subsets: ["latin"],
});

const roboto2 = Roboto({
  weight: ["400", "900"],
  display: "swap",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto} ${roboto2}`}>
        <TanStackProvider>
          <div className={styles.shell}>
            <AppHeader />
            <main className={styles.content}>{children}</main>
          </div>
        </TanStackProvider>
      </body>
    </html>
  );
}
