import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "artikles page",
  description: "this is blog page",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen  max-md:mb-[102px]">
        <header>
          <Navbar />
        </header>
        <main className="mt-[88px] flex-grow">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
