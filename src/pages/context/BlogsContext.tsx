import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

const BlogsContext = createContext<
  | {
      blogs: [];
      setBlogs: Dispatch<SetStateAction<[]>>;
    }
  | undefined
>(undefined);

const BlogsContextProvider = ({ children }: any) => {
  const [blogs, setBlogs] = useState<[]>([]);
  const value = { blogs, setBlogs };

  return (
    <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>
  );
};

export const useBlogsContext = () => {
  const context = useContext(BlogsContext);

  if (context === undefined) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveStateProvider"
    );
  }

  return context;
};

export default BlogsContextProvider;
