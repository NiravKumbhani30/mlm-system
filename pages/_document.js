import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="images/favicon.ico" />
        <link
          rel="stylesheet"
          href="/vendor/admin-resources/jquery-jvectormap-1.2.2.css"
        />

        <link
          href="/css/app-modern.min.css"
          rel="stylesheet"
          type="text/css"
          id="app-style"
        />

        <link href="/css/icons.min.css" rel="stylesheet" type="text/css" />

        <script src="/js/vendor.min.js"></script>

        <script src="/vendor/apexcharts/apexcharts.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
