/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Pategory
// ====================================================

export interface Pategory_pategory_ancestors_edges_node {
  __typename: "Pategory";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Pategory_pategory_ancestors_edges {
  __typename: "PategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: Pategory_pategory_ancestors_edges_node;
}

export interface Pategory_pategory_ancestors {
  __typename: "PategoryCountableConnection";
  edges: Pategory_pategory_ancestors_edges[];
}

export interface Pategory_pategory {
  __typename: "Pategory";
  seoDescription: string | null;
  seoTitle: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * List of ancestors of the pategory.
   */
  ancestors: Pategory_pategory_ancestors | null;
}

export interface Pategory {
  /**
   * Look up a pategory by ID or slug.
   */
  pategory: Pategory_pategory | null;
}

export interface PategoryVariables {
  id: string;
}
