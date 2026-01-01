import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
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
        className={`${poppins.variable} ${jetBrainsMono.variable} antialiased font-sans min-h-screen transition-colors duration-1000`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TooltipProvider delayDuration={1000}>
            {/* Container */}
            <div className="mx-auto max-w-6xl h-screen px-4">
              <div className="grid grid-cols-[200px_800px] h-full gap-2">
                {/* Left Sidebar */}
                <aside className="sticky top-0 h-full">
                  <Sidebar />
                </aside>

                {/* Main Content */}
                <ScrollArea className="h-full overflow-auto">
                  <main className="py-10 space-y-20 px-4">
                    {children}
                  </main>
                </ScrollArea>

              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
