import { Dispatch, SetStateAction, createContext } from "react";
import { Post } from "./types";

interface PostsInfoContextProp {
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
}

export const PostsContext = createContext<PostsInfoContextProp>({
  posts: [],
  setPosts: () => {},
});