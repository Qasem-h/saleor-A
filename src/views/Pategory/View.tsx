import * as React from "react";
import { RouteComponentProps } from "react-router";
import { IPostFilters } from "@types";
import { Loader } from "@components/atoms";
import { POSTS_PER_PAGE } from "../../core/config";
import { MetaWrapper, NotFound, OfflinePlaceholder } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { getGraphqlIdFromDBId } from "../../core/utils";
import Page from "./Page";
import {
  TypedPategoryPostsQuery,
  TypedPategoryPostsDataQuery,
} from "./queries";

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
  const filters: IPostFilters = {
    pageSize: POSTS_PER_PAGE,
  };
  const variables = {
    ...filters,
    id: getGraphqlIdFromDBId(match.params.id, "Pategory"),
  };

  return (
    <NetworkStatus>
      {isOnline => (
        <TypedPategoryPostsDataQuery
          variables={variables}
          errorPolicy="all"
          loaderFull
        >
          {pategoryData => {
            if (pategoryData.loading) {
              return <Loader />;
            }
            if (pategoryData.data && pategoryData.data.pategory === null) {
              return <NotFound />;
            }

            if (!isOnline) {
              return <OfflinePlaceholder />;
            }

            const canDisplayFilters = !!pategoryData.data?.pategory?.name;

            return (
              <TypedPategoryPostsQuery variables={variables}>
                {pategoryPosts => {
                  if (!canDisplayFilters && pategoryPosts.loading) {
                    return <Loader />;
                  }

                  if (canDisplayFilters) {
                    const handleLoadMore = () =>
                      pategoryPosts.loadMore(
                        (prev, next) => ({
                          ...prev,
                          posts: {
                            ...prev.posts,
                            edges: [...prev.posts.edges, ...next.posts.edges],
                            pageInfo: next.posts.pageInfo,
                          },
                        }),
                        {
                          after: pategoryPosts.data.posts.pageInfo.endCursor,
                        }
                      );

                    return (
                      <MetaWrapper
                        meta={{
                          description:
                            pategoryData.data.pategory.seoDescription,
                          title: pategoryData.data.pategory.seoTitle,
                          type: "post.pategory",
                        }}
                      >
                        <Page
                          pategory={pategoryData.data.pategory}
                          displayLoader={pategoryData.loading}
                          hasNextPage={
                            pategoryPosts.data?.posts?.pageInfo.hasNextPage
                          }
                          posts={pategoryPosts.data.posts}
                          onLoadMore={handleLoadMore}
                        />
                      </MetaWrapper>
                    );
                  }

                  return null;
                }}
              </TypedPategoryPostsQuery>
            );
          }}
        </TypedPategoryPostsDataQuery>
      )}
    </NetworkStatus>
  );
};

export default View;
