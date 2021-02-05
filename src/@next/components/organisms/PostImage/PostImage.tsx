import React from "react";
// import { useInView } from "react-intersection-observer";

// import { Icon } from "@components/atoms";
import { CachedImage } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";

// const MINIMAL_NUMBER_OF_IMAGES_FOR_BUTTONS = 4;

export const PostImage: React.FC<IProps> = ({ images }: IProps) => {
  const [imageIndex, setImageIndex] = React.useState<number>(0);

  // const displayButtons = images.length > MINIMAL_NUMBER_OF_IMAGES_FOR_BUTTONS;

  React.useEffect(() => {
    if (imageIndex >= images.length) {
      setImageIndex(0);
    }
  }, [images]);

  return (
    <S.Wrapper data-test="postImage">
      <S.Preview data-test="imagePreview">
        {images && images.length > 0 && imageIndex < images.length && (
          <CachedImage
            alt={images[imageIndex].alt}
            url={images[imageIndex].url}
          />
        )}
        {images.length === 0 && <CachedImage />}
      </S.Preview>
    </S.Wrapper>
  );
};
