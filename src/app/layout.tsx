import { Providers } from "../components/providers/theme-provider";
import { ConvexProviderWrapper } from "../components/providers/convex-provider";
import Navbar from "../components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <ConvexProviderWrapper>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
          </ConvexProviderWrapper>
        </Providers>
      </body>
    </html>
  );
}
