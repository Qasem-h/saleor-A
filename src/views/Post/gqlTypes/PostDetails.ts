/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostDetails
// ====================================================

export interface PostDetails_pategory_posts_edges_node_pategory {
  __typename: "Pategory";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface PostDetails_pategory_posts_edges_node_thumbnail {
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

export interface PostDetails_pategory_posts_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface PostDetails_pategory_posts_edges_node {
  __typename: "Post";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  publicationDate: any | null;
  content: string;
  contentJson: any;
  pategory: PostDetails_pategory_posts_edges_node_pategory | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail: PostDetails_pategory_posts_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail2x: PostDetails_pategory_posts_edges_node_thumbnail2x | null;
}

export interface PostDetails_pategory_posts_edges {
  __typename: "PostCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: PostDetails_pategory_posts_edges_node;
}

export interface PostDetails_pategory_posts {
  __typename: "PostCountableConnection";
  edges: PostDetails_pategory_posts_edges[];
}

export interface PostDetails_pategory {
  __typename: "Pategory";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * List of posts in the pategory.
   */
  posts: PostDetails_pategory_posts | null;
}

export interface PostDetails_thumbnail {
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

export interface PostDetails_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface PostDetails_images {
  __typename: "PostImage";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface PostDetails {
  __typename: "Post";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  publicationDate: any | null;
  content: string;
  contentJson: any;
  pategory: PostDetails_pategory | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail: PostDetails_thumbnail | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail2x: PostDetails_thumbnail2x | null;
  /**
   * List of images for the post.
   */
  images: (PostDetails_images | null)[] | null;
}
