import React from "react";
import renderer from "react-test-renderer";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <Checkbox label={"test"} value={"test"} checked={true} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
