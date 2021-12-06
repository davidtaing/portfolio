import "../common/styles/globals.css";
import type { AppProps } from "next/app";

// Components
import Header from "../common/components/navigation/Header";
import TabBar from "../common/components/navigation/TabBar";
import BlogsContextProvider from "../common/contexts/BlogsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <BlogsContextProvider>
        <Header />
        <Component {...pageProps} />
        <TabBar />
      </BlogsContextProvider>
    </div>
  );
}

export default MyApp;
