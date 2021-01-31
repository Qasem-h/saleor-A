/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestPosts
// ====================================================

export interface LatestPosts_posts_edges_node_pategory {
  __typename: "Pategory";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface LatestPosts_posts_edges_node_thumbnail {
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

export interface LatestPosts_posts_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface LatestPosts_posts_edges_node {
  __typename: "Post";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  publicationDate: any | null;
  content: string;
  contentJson: any;
  pategory: LatestPosts_posts_edges_node_pategory | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail: LatestPosts_posts_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail2x: LatestPosts_posts_edges_node_thumbnail2x | null;
}

export interface LatestPosts_posts_edges {
  __typename: "PostCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: LatestPosts_posts_edges_node;
}

export interface LatestPosts_posts {
  __typename: "PostCountableConnection";
  edges: LatestPosts_posts_edges[];
}

export interface LatestPosts {
  /**
   * List of the shop's posts.
   */
  posts: LatestPosts_posts | null;
}
