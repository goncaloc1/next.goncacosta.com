import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PhotoProvider } from "../hooks/usePhoto";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PhotoProvider>
        <Component {...pageProps} />
      </PhotoProvider>

      <script type="text/javascript" src="/lib/common.js"></script>
    </>
  );
}
export default MyApp;
