// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Outfit } from "next/font/google";
import DashboardLayout from "@/layout/DashboardLayout";

const inter = Outfit({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <main className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </QueryClientProvider>
    </main>
  );
}
