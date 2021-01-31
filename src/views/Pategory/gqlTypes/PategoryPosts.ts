/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PategoryPosts
// ====================================================

export interface PategoryPosts_posts_edges_node_pategory {
  __typename: "Pategory";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface PategoryPosts_posts_edges_node_thumbnail {
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

export interface PategoryPosts_posts_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface PategoryPosts_posts_edges_node {
  __typename: "Post";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  publicationDate: any | null;
  content: string;
  contentJson: any;
  pategory: PategoryPosts_posts_edges_node_pategory | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail: PategoryPosts_posts_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail2x: PategoryPosts_posts_edges_node_thumbnail2x | null;
}

export interface PategoryPosts_posts_edges {
  __typename: "PostCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: PategoryPosts_posts_edges_node;
}

export interface PategoryPosts_posts_pageInfo {
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

export interface PategoryPosts_posts {
  __typename: "PostCountableConnection";
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
  edges: PategoryPosts_posts_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: PategoryPosts_posts_pageInfo;
}

export interface PategoryPosts {
  /**
   * List of the shop's posts.
   */
  posts: PategoryPosts_posts | null;
}

export interface PategoryPostsVariables {
  id: string;
  after?: string | null;
  pageSize?: number | null;
}
