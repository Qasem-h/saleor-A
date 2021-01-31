/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostList
// ====================================================

export interface PostList_posts_edges_node_pategory {
  __typename: "Pategory";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface PostList_posts_edges_node_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface PostList_posts_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface PostList_posts_edges_node {
  __typename: "Post";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  publicationDate: any | null;
  content: string;
  contentJson: any;
  pategory: PostList_posts_edges_node_pategory | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail: PostList_posts_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail2x: PostList_posts_edges_node_thumbnail2x | null;
}

export interface PostList_posts_edges {
  __typename: "PostCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: PostList_posts_edges_node;
}

export interface PostList_posts_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface PostList_posts {
  __typename: "PostCountableConnection";
  edges: PostList_posts_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: PostList_posts_pageInfo;
}

export interface PostList {
  /**
   * List of the shop's posts.
   */
  posts: PostList_posts | null;
}

export interface PostListVariables {
  after?: string | null;
  first: number;
}
