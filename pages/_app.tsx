import { AppProps } from "next/app";
import "../styles/globals.css";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function RootApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
