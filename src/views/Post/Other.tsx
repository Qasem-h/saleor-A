import * as React from "react";
import { FormattedMessage } from "react-intl";

import { PostList } from "@components/organisms";

import { PostDetails_post_pategory_posts_edges } from "./gqlTypes/PostDetails";

const OtherPosts: React.FC<{
  posts: PostDetails_post_pategory_posts_edges[];
}> = ({ posts }) => (
  <div className="post-page__other-posts">
    <div className="container">
      <h4 className="post-page__other-posts__title">
        <FormattedMessage defaultMessage="Other posts in this Category" />
      </h4>
      <PostList posts={posts.map(({ node }) => node)} />
    </div>
  </div>
);

export default OtherPosts;
