import { PostList_posts_edges_node } from "../../../../views/Blog/gqlTypes/PostList";

export const POST: PostList_posts_edges_node = {
  __typename: "Post",
  id: "UHJvZHVjdDo3Mg==",
  title: "Apple Juice",
  publicationDate: "2020-12-1",
  content: "this is content",
  contentJson: "this is content json",
  pategory: {
    __typename: "Pategory",
    id: "UHJvZHVjdDo3Mg==",
    name: "mug",
  },
  thumbnail: {
    __typename: "Image",
    alt: "",
    url:
      "http://localhost:8000/media/__sized__/posts/saleordemopost_fd_juice_06_102xcfi-thumbnail-255x255.png",
  },
  thumbnail2x: {
    __typename: "Image",
    url:
      "http://localhost:8000/media/__sized__/posts/saleordemopost_fd_juice_06_102xcfi-thumbnail-510x510.png",
  },
};
