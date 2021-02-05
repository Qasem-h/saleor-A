import { storiesOf } from "@storybook/react";
import React from "react";

import { PostContent } from ".";
import { content } from "./fixtures";

storiesOf("@components/molecules/PostContent", module)
  .addParameters({ component: PostContent })
  .add("default", () => <PostContent content={content} />);
