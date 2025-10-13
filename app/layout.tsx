import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Adnan",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${jetBrainsMono.variable} antialiased font-sans h-full overflow-hidden`}
      >

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="mx-auto max-w-6xl px-4 h-screen">
            <div className="grid grid-cols-[1fr_3fr] h-full">

              <Sidebar />

              <ScrollArea className="h-full overflow-auto">
                <div className="flex flex-col h-full">
                  <Header />
                  <main className="flex-1">{children}</main>
                </div>
              </ScrollArea>

            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
