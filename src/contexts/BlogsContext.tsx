import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

import { Post } from "../utils/blogs";

const BlogsContext = createContext<
  | {
      blogs: Array<Post>;
      setBlogs: Dispatch<SetStateAction<Array<Post>>>;
    }
  | undefined
>(undefined);

const BlogsContextProvider = ({ children }: any) => {
  const [blogs, setBlogs] = useState<Array<Post>>(new Array<Post>());
  const value = { blogs, setBlogs };

  return (
    <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>
  );
};

export const useBlogsContext = () => {
  const context = useContext(BlogsContext);

  if (context === undefined) {
    throw new Error(
      "useBlogsContext must be used within a BlogsContextProvider"
    );
  }

  return context;
};

export default BlogsContextProvider;
