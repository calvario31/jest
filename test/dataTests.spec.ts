import { Logs } from "../src/utilities/Logs.js";
import arrayAnimales from "../src/resources/jsons/animales.json" with { type: "json" };

describe("data tests", () => {
    test.only("def test", () => {
        arrayAnimales.sort((animal1, animal2) => {
            return animal1.nombre > animal2.nombre ? 1 : -1;
        });

        console.log(JSON.stringify(arrayAnimales, null, 2));
    });

    test("ghi test", () => {
        Logs.info("Segundo test XXX");
        expect(true).toBeTruthy();
    });

    afterEach(() => {
        Logs.info("Post condicion");
    });
});
