import "../common/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../common/components/navigation/Header";
import TabBar from "../common/components/navigation/TabBar";

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
