import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/navigation/Header";
import TabBar from "../components/navigation/TabBar";
import ActiveSectionProvider from "../contexts/ActiveSectionContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <ActiveSectionProvider>
        <Header />
        <Component {...pageProps} />
        <TabBar />
      </ActiveSectionProvider>
    </div>
  );
}

export default MyApp;
