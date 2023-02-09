import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";
import "@/styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rubik.className}>
      <Component {...pageProps} />
    </main>
  );
}
