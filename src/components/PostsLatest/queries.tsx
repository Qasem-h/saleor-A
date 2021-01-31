import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { basicPostFragment } from "../../views/Post/queries";
import { LatestPosts } from "./gqlTypes/LatestPosts";

export const featuredPosts = gql`
  ${basicPostFragment}
  query LatestPosts {
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
`;

export const TypedLatestPostsQuery = TypedQuery<LatestPosts, {}>(featuredPosts);
