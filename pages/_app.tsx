import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import TabBar from "../components/TabBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
      <TabBar />
    </div>
  );
}

export default MyApp;
