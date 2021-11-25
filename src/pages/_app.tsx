import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import TabBar from "../components/TabBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Header />
      <Component {...pageProps} />
      <TabBar />
    </div>
  );
}

export default MyApp;
