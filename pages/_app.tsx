import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
//import jQuery from "jquery";
//import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const $ = jQuery;
  //   console.log($);
  // }, []);

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

      {/* <script
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"
      ></script> */}

      {/* <script
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
      ></script> */}

      {/* <script
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"
      ></script> */}

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
