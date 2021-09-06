import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PhotoProvider } from "../hooks/usePhoto";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PhotoProvider>
        <Component {...pageProps} />
      </PhotoProvider>

      <script
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      ></script>
      {/* jquery.mCustomScrollbar v3.x will break horizontal scrolling and layout */}
      <script
        type="text/javascript"
        src="/lib/mCustomScrollbar2.8.7/jquery.mCustomScrollbar.min.js"
      ></script>
      {/* jquery.mousewheel should be imported automatically by jquery.mCustomScrollbar
      but since version 2.8.5, for what it seems to be a bug, we have to do it explicitly */}
      <script
        type="text/javascript"
        src="/lib/mCustomScrollbar2.8.7/jquery.mousewheel.min.js"
      ></script>
      <script type="text/javascript" src="/lib/common.js"></script>
    </>
  );
}
export default MyApp;
