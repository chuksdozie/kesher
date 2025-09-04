// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Outfit } from "next/font/google";
import DefaultLayout from "@/layout/DefaultLayout";

const inter = Outfit({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <main className={`${inter.className} text-gray-600 text-xs`}>
      <QueryClientProvider client={queryClient}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </QueryClientProvider>
    </main>
  );
}
