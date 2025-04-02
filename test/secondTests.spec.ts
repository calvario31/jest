import { Logs } from "../src/utilities/Logs.js";

describe("abc tests", () => {
    beforeEach(() => {
        Logs.info("Precondicion XXX");
    });

    test("def test", () => {
        Logs.info("Primer test XXX");
        expect(3).toBe(3);
    });

    test("ghi test", () => {
        Logs.info("Segundo test XXX");
        expect(true).toBeTruthy();
    });

    afterEach(() => {
        Logs.info("Post condicion");
    });
});
