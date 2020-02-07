import { addUniqueArrayValue, removeUniqueArrayValue } from "./arrayUtils";

describe("Array Utils Suite", () => {
  const arr = [1, 2, 3];
  it("Adding unique value to array should add value", () => {
    const result = addUniqueArrayValue(arr, 4);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("Adding not unique value to array shouldn't change array", () => {
    const result = addUniqueArrayValue(arr, 3);
    expect(result).toEqual(arr);
  });

  it("Removing existing value from array should remove value", () => {
    const result = removeUniqueArrayValue(arr, 3);
    expect(result).toEqual([1, 2]);
  });

  it("Removing not existing value from array should not change the array", () => {
    const result = removeUniqueArrayValue(arr, 4);
    expect(result).toEqual(arr);
  });
 
  const notUniqueArr = [2,3,4,4,5]
  it("Removing value from array with duplicates should remove one value", () => {
    const result = removeUniqueArrayValue(notUniqueArr, 4);
    expect(result).toEqual([2,3,4,5]);
  });
});
