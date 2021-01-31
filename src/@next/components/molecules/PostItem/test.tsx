import { shallow } from "enzyme";
import "jest-styled-components";
import React from "react";

import { PostItem } from ".";
import { POST } from "./fixtures";

describe("<PostItem />", () => {
  it("exists", () => {
    const wrapper = shallow(<PostItem post={POST} />);

    expect(wrapper.exists()).toEqual(true);
  });
  it("has post title", () => {
    const wrapper = shallow(<PostItem post={POST} />);

    expect(wrapper.text()).toContain(POST.title);
  });
});
