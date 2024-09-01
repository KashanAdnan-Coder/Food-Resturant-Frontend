import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProviders } from "@/redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restauro Bites",
  description: "Restauro Bites Website using Next.js Redux Toolkit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProviders>
          {children}
        </StoreProviders>
      </body>
    </html>
  );
}
