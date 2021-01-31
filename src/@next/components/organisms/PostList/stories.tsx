import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { PostList } from ".";
import { POSTS } from "./fixtures";

storiesOf("@components/organisms/PostList", module)
  .addParameters({ component: PostList })
  .add("default", () => (
    <BrowserRouter>
      <PostList
        posts={POSTS}
        canLoadMore
        loading={false}
        onLoadMore={() => null}
        testingContextId="testPategory"
      />
    </BrowserRouter>
  ));
