import "../styles/globals.css";
import type { AppProps } from "next/app";

// Components
import Header from "../components/Navbar";
import BlogsContextProvider from "../contexts/BlogsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Header />
      <BlogsContextProvider>
        <Component {...pageProps} />
      </BlogsContextProvider>
    </div>
  );
}

export default MyApp;
