import "./scss/index.scss";

import { isEmpty } from "lodash";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { useHistory } from "react-router-dom";

import { Loader } from "@components/atoms";
import { MetaWrapper, NotFound, OfflinePlaceholder } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { getGraphqlIdFromDBId, maybe } from "../../core/utils";
import { PostDetails_post } from "./gqlTypes/PostDetails";
import Page from "./Page";
import { TypedPostDetailsQuery } from "./queries";
import { IProps } from "./types";

const canDisplay = (post: PostDetails_post) =>
  maybe(() => !!post.contentJson && !!post.title);
const extractMeta = (post: PostDetails_post) => ({
  custom: [
    {
      content: post.pategory?.name,
      property: "post:pategory",
    },
  ],
  content: post.seoDescription || post.contentJson,
  image: post?.thumbnail?.url || null,
  title: post.seoTitle || post.title,
  type: "post.item",
  url: window.location.href,
});

const View: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  return (
    <TypedPostDetailsQuery
      loaderFull
      variables={{
        id: getGraphqlIdFromDBId(match.params.id, "Post"),
      }}
      errorPolicy="all"
      key={match.params.id}
    >
      {({ data, loading }) => (
        <NetworkStatus>
          {isOnline => {
            const { post } = data;
            if (canDisplay(post)) {
              return (
                <MetaWrapper meta={extractMeta(post)}>
                  <div> {post.seoTitle} </div>
                </MetaWrapper>
              );
            }

            if (loading) {
              return <Loader />;
            }

            if (post === null) {
              return <NotFound />;
            }

            if (!isOnline) {
              return <OfflinePlaceholder />;
            }
          }}
        </NetworkStatus>
      )}
    </TypedPostDetailsQuery>
  );
};

export default View;
