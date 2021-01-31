import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import { Button, Loader } from "@components/atoms";
import { PostItem } from "@components/molecules";

// import { generatePostUrl } from "../../../../core/utils";
// <Link to={generatePostUrl(id, title)} key={id}>
//           </Link>
import * as S from "./styles";
import { IProps } from "./types";

export const PostList: React.FC<IProps> = ({
  posts,
  canLoadMore = false,
  loading = false,
  testingContextId,
  onLoadMore = () => null,
}: IProps) => {
  return (
    <>
      <S.List data-test="postList" data-test-id={testingContextId}>
        {posts.map(post => {
          const { id, title } = post;
          return id && title && <PostItem post={post} />;
        })}
      </S.List>
      <S.Loader>
        {loading ? (
          <Loader />
        ) : (
          canLoadMore && (
            <Button
              testingContext="loadMorePostsButton"
              color="secondary"
              onClick={onLoadMore}
            >
              <FormattedMessage defaultMessage="More +" />
            </Button>
          )
        )}
      </S.Loader>
    </>
  );
};
