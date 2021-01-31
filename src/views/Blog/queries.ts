import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { basicPostFragment } from "../Post/queries";

import { PostList, PostListVariables } from "./gqlTypes/PostList";

export const postList = gql`
  ${basicPostFragment}
  query PostList($after: String, $first: Int!) {
    posts(after: $after, first: $first) {
      edges {
        node {
          ...BasicPostFields
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

export const TypedPostsQuery = TypedQuery<PostList, PostListVariables>(
  postList
);
