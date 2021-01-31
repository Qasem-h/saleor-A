import "./scss/index.scss";

import * as React from "react";
import { useIntl } from "react-intl";

import { commonMessages } from "@temp/intl";
import {
  // Breadcrumbs,
  // extractBreadcrumbs,
  PostsLatest,
  Title,
} from "../../components";

import { PostList } from "../../@next/components/organisms";

import { maybe } from "../../core/utils";

import { PostList_posts } from "./gqlTypes/PostList";

interface PageProps {
  displayLoader: boolean;
  hasNextPage: boolean;
  posts: PostList_posts;
  onLoadMore: () => void;
}

const Page: React.FC<PageProps> = ({
  displayLoader,
  hasNextPage,
  onLoadMore,
  posts,
}) => {
  const canDisplayPosts = maybe(
    // () => !!posts.edges && posts.totalCount !== undefined
    () => !!posts.edges
  );
  // const hasPosts = canDisplayPosts && !!posts.totalCount;
  const hasPosts = canDisplayPosts;
  const intl = useIntl();

  return (
    <div className="blog-page">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <div className="blog-page__title">
              <Title title="Blog title" subTitle="blog subtitle" />
            </div>
            <div className="blog-page__posts">
              {canDisplayPosts && (
                <PostList
                  posts={posts.edges.map(edge => edge.node)}
                  canLoadMore={hasNextPage}
                  loading={displayLoader}
                  onLoadMore={onLoadMore}
                />
              )}
            </div>
          </div>

          {!hasPosts && (
            <PostsLatest
              title={intl.formatMessage(commonMessages.youMightLike)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
