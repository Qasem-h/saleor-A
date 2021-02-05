import { storiesOf } from "@storybook/react";
import React from "react";

import { styled } from "@styles";

import { PostImage } from ".";
import { eightImages, oneImage, threeImages } from "./fixtures";

const Container = styled.div``;
storiesOf("@components/organisms/PostImage", module)
  .addParameters({ component: PostImage })
  .add("default", () => <PostImage images={oneImage} />)
  .add("three Images", () => (
    <Container>
      <PostImage images={threeImages} />
    </Container>
  ))
  .add("eight Images", () => <PostImage images={eightImages} />);
