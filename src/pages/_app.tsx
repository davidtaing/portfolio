import "../common/styles/globals.css";
import type { AppProps } from "next/app";

// Components
import Header from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
