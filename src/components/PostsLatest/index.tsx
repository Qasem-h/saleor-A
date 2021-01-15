import * as React from "react";
import { Link } from "react-router-dom";

import { Carousel, PostListItem } from "..";
import { generatePostUrl, maybe } from "../../core/utils";
import { TypedLatestPostsQuery } from "./queries";

import "./scss/index.scss";

interface PostsLatestProps {
  title?: string;
}

const PostsLatest: React.FC<PostsLatestProps> = ({ title }) => {
  return (
    <TypedLatestPostsQuery displayError={false}>
      {({ data }) => {
        const posts = maybe(
          () => data.shop.homepageCollection.posts.edges,
          []
        );
               console.log("psots ", posts);

        if (posts.length) {
          return (
            <div className="posts-featured">
              <div className="container">
                <h3>{title}</h3>
                <Carousel>
                  {posts.map(({ node: post }) => (
                    <Link
                      to={generatePostUrl(post.id, post.name)}
                      key={post.id}
                    >
                      <PostListItem post={post} />
                    </Link>
                  ))}
                </Carousel>
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
};

export default PostsLatest;
