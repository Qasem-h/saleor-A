import "./scss/index.scss";
import { Link } from "react-router-dom";

// import isEqual from "lodash/isEqual";
import * as React from "react";

import { Thumbnail } from "@components/molecules";
import { generatePostUrl } from "../../core/utils";

import { LatestPosts_posts_edges_node } from "../PostsLatest/gqlTypes/LatestPosts";

interface PostListItemProps {
  post: LatestPosts_posts_edges_node;
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  return (
    <div className="post-list-item">
      <div className="post-list-item__image">
        <div className="post-list-item__image__date">
          {post.publicationDate}
        </div>
        <Thumbnail source={post} />
      </div>
      <div className="post-list-item__post-body">
        <h4 className="post-list-item__post-body_title">{post.title}</h4>
        <div className="post-list-item__post-body_btn-bar">
          <Link to={generatePostUrl(post.id, post.title)} key={post.id}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
