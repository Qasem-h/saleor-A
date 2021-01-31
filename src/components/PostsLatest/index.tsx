import * as React from "react";

import { PostListItem, Title } from "..";
import { maybe } from "../../core/utils";
import { TypedLatestPostsQuery } from "./queries";
import "./scss/index.scss";

interface PostsLatestProps {
  title?: string;
  subTitle?: string;
}

const PostsLatest: React.FC<PostsLatestProps> = ({ title }) => {
  return (
    <TypedLatestPostsQuery displayError={false}>
      {({ data }) => {
        const posts = maybe(() => data.posts.edges, []);
        if (posts.length) {
          return (
            <div className="posts-Latest">
              <div className="container">
                <Title title={title} subTitle="Latest post from our blog" />
                <div className="row">
                  {posts.map(({ node: post }) => (
                    <div className="col-lg-4">
                      <PostListItem post={post} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }
        return null;
      }}
    </TypedLatestPostsQuery>
  );
};

PostsLatest.defaultProps = {
  title: "Latest",
  subTitle: "Latest post from our blog",
};

export default PostsLatest;
