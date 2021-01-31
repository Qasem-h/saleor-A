import "./scss/index.scss";

import * as React from "react";
import { useIntl } from "react-intl";

import { commonMessages } from "@temp/intl";
import { PostsLatest, Title } from "../../components";

import { PostList } from "../../@next/components/organisms";

import { maybe } from "../../core/utils";

import { Pategory_pategory } from "./gqlTypes/Pategory";
import { PategoryPosts_posts } from "./gqlTypes/PategoryPosts";

interface PageProps {
  pategory: Pategory_pategory;
  displayLoader: boolean;
  hasNextPage: boolean;
  posts: PategoryPosts_posts;
  onLoadMore: () => void;
}

const Page: React.FC<PageProps> = ({
  pategory,
  displayLoader,
  hasNextPage,
  onLoadMore,
  posts,
}) => {
  const canDisplayPosts = maybe(
    () => !!posts.edges && posts.totalCount !== undefined
  );
  const hasPosts = canDisplayPosts && !!posts.totalCount;
  const intl = useIntl();

  return (
    <div className="pategory">
      <div className="container">
        <div className="pategory__title">
          <Title
            title={pategory.name}
            subTitle={`${pategory.name} Posts Archive`}
          />
        </div>
        {canDisplayPosts && (
          <PostList
            posts={posts.edges.map(edge => edge.node)}
            canLoadMore={hasNextPage}
            loading={displayLoader}
            onLoadMore={onLoadMore}
          />
        )}
      </div>
      {!hasPosts && (
        <PostsLatest title={intl.formatMessage(commonMessages.youMightLike)} />
      )}
    </div>
  );
};

export default Page;
