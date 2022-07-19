import { shallow } from "enzyme";
import { Dropdown } from "../Dropdown";
import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

describe("Dropdownm", () => {
  test("render", () => {
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper.find("#button")).toBeDefined();
  });
});
