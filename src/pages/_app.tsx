import "../styles/globals.css";
import type { AppProps } from "next/app";

// Components
import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import BlogsContextProvider from "../contexts/BlogsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Navbar />
      <BlogsContextProvider>
        <Component {...pageProps} />
      </BlogsContextProvider>
      <Tabbar />
    </div>
  );
}

export default MyApp;
