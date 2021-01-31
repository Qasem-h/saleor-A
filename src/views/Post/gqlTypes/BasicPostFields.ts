/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BasicPostFields
// ====================================================

export interface BasicPostFields_pategory {
  __typename: "Pategory";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface BasicPostFields_thumbnail {
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

export interface BasicPostFields_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface BasicPostFields {
  __typename: "Post";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  publicationDate: any | null;
  content: string;
  contentJson: any;
  pategory: BasicPostFields_pategory | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail: BasicPostFields_thumbnail | null;
  /**
   * The main thumbnail for a post.
   */
  thumbnail2x: BasicPostFields_thumbnail2x | null;
}
