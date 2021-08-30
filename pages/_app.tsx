import "../styles/globals.css";
import type { AppProps } from "next/app";
import mailgo from "mailgo";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    mailgo();
  });
  return <Component {...pageProps} />;
}
export default MyApp;
