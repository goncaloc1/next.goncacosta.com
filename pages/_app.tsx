import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js" />
      <Script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js" />
      <Script src="/lib/mCustomScrollbar/jquery.mCustomScrollbar.min.js" />
      <Script src="/lib/common.js" /> */}

      {/*
        Doesn't work with next/script
        It tries to use jquery before it's initialized
        And that's fine, I'll try use node_modules later.
      */}
      <script
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/lib/mCustomScrollbar/jquery.mCustomScrollbar.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://malsup.github.io/min/jquery.cycle2.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://malsup.github.io/min/jquery.cycle2.center.min.js"
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
