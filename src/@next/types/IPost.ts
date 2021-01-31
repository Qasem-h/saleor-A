import { PostList_posts_edges_node } from "../../views/Blog/gqlTypes/PostList";

type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type IPost = WithOptional<
  PostList_posts_edges_node,
  "slug" | "seoTitle" | "seoDescription"
>;
