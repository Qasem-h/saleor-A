import React from "react";

import { Thumbnail } from "@components/molecules";

import { Link } from "react-router-dom";
import * as S from "./styles";
import { IProps } from "./types";
import { generatePostUrl } from "../../../../core/utils";

export const PostItem: React.FC<IProps> = ({ post }: IProps) => {
  return (
    <S.Wrapper>
      <S.Image data-test="postThumbnail">
        <S.Date>{post.publicationDate}</S.Date>
        <Thumbnail source={post} />
      </S.Image>
      <S.Body>
        <S.Title data-test="postTile">{post.title}</S.Title>
        <S.Bar data-test="postTile">
          <Link to={generatePostUrl(post.id, post.title)} key={post.id}>
            Read More
          </Link>
        </S.Bar>
      </S.Body>
    </S.Wrapper>
  );
};
