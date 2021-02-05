import React from "react";
import { RichTextContent } from "@components/atoms";
import * as S from "./styles";
import { IProps } from "./types";

export const PostContnet: React.FC<IProps> = ({
  content = "",
  contentJson = "",
}: IProps) => {
  return (
    <S.Wrapper>
      {contentJson ? (
        <RichTextContent descriptionJson={contentJson} />
      ) : (
        <p>{content}</p>
      )}
    </S.Wrapper>
  );
};
