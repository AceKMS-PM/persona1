import Navbar from "@/components/navbar";

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

// Note: Re-importing Providers and ConvexProviderWrapper inside layout.tsx logic
import { Providers } from "./providers/theme-provider";
import { ConvexProviderWrapper } from "./providers/convex-provider";
import "./globals.css";
