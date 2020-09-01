import analyze from "../src/array_analysis";

test("it should analyze an array of numbers", () => {
    expect(analyze([1, 2, 3, 4, 5])).toEqual({
        avg: 3,
        min: 1,
        max: 5,
        length: 5
    })
});