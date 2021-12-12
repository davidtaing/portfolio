import "../common/styles/globals.css";
import type { AppProps } from "next/app";

// Components

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
