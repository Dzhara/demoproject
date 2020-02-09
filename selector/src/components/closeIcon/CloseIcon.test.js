import React from "react";
import renderer from "react-test-renderer";
import CloseIcon from "./CloseIcon";

describe("CloseIcon", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <CloseIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
