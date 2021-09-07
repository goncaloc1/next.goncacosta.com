import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PhotoProvider } from "../hooks/usePhoto";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PhotoProvider>
      <Component {...pageProps} />
    </PhotoProvider>
  );
}
export default MyApp;
