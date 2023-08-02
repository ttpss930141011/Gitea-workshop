import { addNumbers, subtractNumbers } from "../example";

describe("addNumbers function", () => {
    it("should add two numbers correctly", () => {
        expect(addNumbers(3, 5)).toBe(8);
        expect(addNumbers(-1, 1)).toBe(0);
        expect(addNumbers(0, 0)).toBe(0);
    });
});

describe("subtractNumbers function", () => {
    it("should subtract two numbers correctly", () => {
        expect(subtractNumbers(5, 3)).toBe(2);
        expect(subtractNumbers(1, -1)).toBe(2);
        expect(subtractNumbers(0, 0)).toBe(0);
    });
});
