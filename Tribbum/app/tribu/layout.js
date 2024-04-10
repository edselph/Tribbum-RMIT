import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import WebAppHeader from "@/components/tribu/molecules/header/webAppHeader";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <header className="relative z-50">
          <WebAppHeader />
        </header>
        <main className="relative w-full z-40">{children}</main>
      </body>
    </html>
  );
}
