import React from "react";
import renderer from "react-test-renderer";
import CheckboxGroup from "./CheckboxGroup";

describe("CheckboxGroup", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <CheckboxGroup
        source={[{ label: "test", value: "test" }]}
        selectedItems={[]}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
