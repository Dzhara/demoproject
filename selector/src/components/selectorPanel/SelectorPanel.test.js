import React from "react";
import renderer from "react-test-renderer";
import SelectorPanel from "./SelectorPanel";

describe("SelectorPanel", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <SelectorPanel source={[{ label: "test", value: "test" }]} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
