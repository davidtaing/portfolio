import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

import { Post } from "../../services/blogService";

const BlogsContext = createContext<
  | {
      blogs: Array<Post>;
      setBlogs: Dispatch<SetStateAction<Array<Post>>>;
    }
  | undefined
>(undefined);

interface Props {
  children: React.ReactNode;
}

const BlogsContextProvider = ({ children }: Props) => {
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
