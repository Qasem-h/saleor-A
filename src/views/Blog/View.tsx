import "./scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Loader } from "@components/atoms";
import { POSTS_PER_PAGE } from "../../core/config";
import { MetaWrapper, NotFound, OfflinePlaceholder } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";

import Page from "./Page";
import { TypedPostsQuery } from "./queries";

type ViewProps = RouteComponentProps<{
  id: string;
}>;

export const FilterQuerySet = {
  encode(valueObj) {
    const str = [];
    Object.keys(valueObj).forEach(value => {
      str.push(`${value}_${valueObj[value].join("_")}`);
    });
    return str.join(".");
  },

  decode(strValue) {
    const obj = {};
    const propsWithValues = strValue.split(".").filter(n => n);
    propsWithValues.map(value => {
      const propWithValues = value.split("_").filter(n => n);
      obj[propWithValues[0]] = propWithValues.slice(1);
    });
    return obj;
  },
};

export const View: React.FC<ViewProps> = ({ match }) => {
  // const filters: IPostFilters = {
  //   pageSize: POSTS_PER_PAGE,
  // };
  const variables = {
    first: POSTS_PER_PAGE,
  };

  return (
    <NetworkStatus>
      {isOnline => (
        <TypedPostsQuery variables={variables} errorPolicy="all" loaderFull>
          {postsData => {
            if (postsData.loading) {
              return <Loader />;
            }
            if (postsData.data && postsData.data.posts === null) {
              return <NotFound />;
            }

            if (!isOnline) {
              return <OfflinePlaceholder />;
            }

            const canDisplayFilters = !!postsData.data?.posts?.edges;

            return (
              <TypedPostsQuery variables={variables}>
                {postsPosts => {
                  if (!canDisplayFilters && postsPosts.loading) {
                    return <Loader />;
                  }

                  if (canDisplayFilters) {
                    const handleLoadMore = () =>
                      postsPosts.loadMore(
                        (prev, next) => ({
                          ...prev,
                          posts: {
                            ...prev.posts,
                            edges: [...prev.posts.edges, ...next.posts.edges],
                            pageInfo: next.posts.pageInfo,
                          },
                        }),
                        {
                          after: postsPosts.data.posts.pageInfo.endCursor,
                        }
                      );

                    return (
                      <MetaWrapper
                        meta={{
                          description: "blog descripn",
                          title: "postsData.data.posts.seoTitle",
                          type: "post.posts",
                        }}
                      >
                        <Page
                          posts={postsData.data.posts}
                          displayLoader={postsData.loading}
                          hasNextPage={
                            postsPosts.data?.posts?.pageInfo.hasNextPage
                          }
                          onLoadMore={handleLoadMore}
                        />
                      </MetaWrapper>
                    );
                  }

                  return null;
                }}
              </TypedPostsQuery>
            );
          }}
        </TypedPostsQuery>
      )}
    </NetworkStatus>
  );
};

export default View;
