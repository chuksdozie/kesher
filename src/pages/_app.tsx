// pages/_app.tsx
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Inter, Karla } from "next/font/google";
import DashboardLayout from "@/layout/DashboardLayout";

const inter = Karla({ subsets: ["latin"] });

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
