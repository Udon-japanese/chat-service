import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className="dark:bg-gray-900">
        <Main />
        <NextScript />
        <Script src="../node_modules/flowbite/dist/flowbite.min.js" />
      </body>
    </Html>
  );
}
