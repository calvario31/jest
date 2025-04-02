import { Logs } from "../src/utilities/Logs.js";

describe("primeros tests", () => {
    beforeEach(() => {
        Logs.info("Precondicion");
    });

    test("first test", () => {
        Logs.info("Primer test");
        expect(3).toBe(3);
    });

    test("second test", () => {
        Logs.info("Segundo test");
        expect(true).toBeTruthy();
    });

    afterEach(() => {
        Logs.info("Post condicion");
    });
});
