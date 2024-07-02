import "./globals.css";
import Navbar from '@/components/navbar'
import { Providers } from "./Providers";
import Footer from '@/components/footer'
import About from "./about/page";

export const metadata = {
  title: "PortFolio Prathmesh Gatade",
  description: "personal portfolio site",

  icons: '/favicon.ico?v=1'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-black">
        <Providers>
          <div className="z-10"><Navbar /></div>
          <div className="mt-[3.9%] -z-10">{children}</div>
          <div><Footer /></div>
        </Providers>
      </body>
    </html>
  );
}
