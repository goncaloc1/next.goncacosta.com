import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

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
      {/* Could download scripts from https://malsup.github.io/min/jquery.cycle2.min.js but prefer
       not risking jquery.cycle2 being deprecated and loosing the references. */}
      <script
        type="text/javascript"
        src="/lib/jquery/jquery.cycle2.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/lib/jquery/jquery.cycle2.center.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/lib/jquery/jquery.viewport.mini.js"
      ></script>
      <script type="text/javascript" src="/lib/common.js"></script>
    </>
  );
}
export default MyApp;
