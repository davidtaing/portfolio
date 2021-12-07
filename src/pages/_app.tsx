import "../common/styles/globals.css";
import type { AppProps } from "next/app";

// Components
import Header from "../common/components/navigation/Header";
import TabBar from "../common/components/navigation/TabBar";
import BlogsContextProvider from "../common/contexts/BlogsContext";
import ProjectsContextProvider from "../common/contexts/ProjectsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <BlogsContextProvider>
        <ProjectsContextProvider>
          <Header />
          <Component {...pageProps} />
          <TabBar />
        </ProjectsContextProvider>
      </BlogsContextProvider>
    </div>
  );
}

export default MyApp;
