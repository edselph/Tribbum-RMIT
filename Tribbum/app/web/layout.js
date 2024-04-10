import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/web/molecules/header/header";
import Footer from "@/components/web/molecules/footer/footer";
import CConsent from "@/components/web/molecules/c-consent/c-consent";
import GoogleAnalytics from "@/services/googleAnalytics";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Tribbum",
  description:
    "Encuentra a tu nueva tribu. Encuentra un nuevo hogar, una forma de vida o una nueva etapa que permitirá compartir tu día a día con quien tú quieras.",
  icons: {
    icon: "./favicon.ico",
  },
  referrer: "origin-when-cross-origin",
  keywords: [
    "tribu",
    "comparte casa",
    "familia monoparental",
    "familia homoparental",
    "familias sin hijos",
    "personas mayores",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        {/* <GoogleAnalytics />  */}
        {/* not active */}
        <header className="relative z-50">
          <Header />
        </header>
        <main className="relative w-full z-40">{children}</main>
        <CConsent />
        <footer className="relative z-50">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
