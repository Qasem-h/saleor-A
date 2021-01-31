import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { basicPostFragment } from "../Post/queries";
import { Pategory, PategoryVariables } from "./gqlTypes/Pategory";
import {
  PategoryPosts,
  PategoryPostsVariables,
} from "./gqlTypes/PategoryPosts";

export const pategoryPostsDataQuery = gql`
  query Pategory($id: ID!) {
    pategory(id: $id) {
      seoDescription
      seoTitle
      id
      name
      ancestors(last: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

export const TypedPategoryPostsDataQuery = TypedQuery<
  Pategory,
  PategoryVariables
>(pategoryPostsDataQuery);

export const pategoryPostsQuery = gql`
  ${basicPostFragment}
  query PategoryPosts($id: ID!, $after: String, $pageSize: Int) {
    posts(after: $after, first: $pageSize, filter: { pategories: [$id] }) {
      totalCount
      edges {
        node {
          ...BasicPostFields
          pategory {
            id
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const TypedPategoryPostsQuery = TypedQuery<
  PategoryPosts,
  PategoryPostsVariables
>(pategoryPostsQuery);
