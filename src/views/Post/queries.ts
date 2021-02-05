import gql from "graphql-tag";
import { TypedQuery } from "../../core/queries";
import { PostDetails, PostDetailsVariables } from "./gqlTypes/PostDetails";

export const basicPostFragment = gql`
  fragment BasicPostFields on Post {
    id
    title
    publicationDate
    content
    contentJson
    pategory {
      id
      name
    }
    thumbnail {
      url
      alt
    }
    thumbnail2x: thumbnail(size: 720) {
      url
    }
  }
`;
export const postFragment = gql`
  ${basicPostFragment}
  fragment PostDetails on Post {
    ...BasicPostFields
    contentJson
    pategory {
      id
      name
      posts(first: 3) {
        edges {
          node {
            ...BasicPostFields
            pategory {
              id
              name
            }
          }
        }
      }
    }
    images {
      id
      url
    }
  }
`;

export const postDetailsQuery = gql`
  ${basicPostFragment}
  query PostDetails($id: ID!) {
    post(id: $id) {
      ...BasicPostFields
      contentJson
      pategory {
        id
        name
        posts(first: 3) {
          edges {
            node {
              ...BasicPostFields
            }
          }
        }
      }
      images {
        id
        alt
        url
      }
      seoDescription
      seoTitle
    }
  }
`;

export const TypedPostDetailsQuery = TypedQuery<
  PostDetails,
  PostDetailsVariables
>(postDetailsQuery);
