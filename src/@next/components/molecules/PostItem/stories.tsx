import { storiesOf } from "@storybook/react";
import React from "react";

import { PostItem } from ".";
import { POST } from "./fixtures";

storiesOf("@components/molecules/PostItem", module)
  .addParameters({ component: PostItem })
  .add("default", () => (
    <div style={{ width: "400px" }}>
      <PostItem post={POST} />
    </div>
  ));
