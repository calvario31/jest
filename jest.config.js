/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
    testEnvironment: "node",
    preset: "ts-jest/presets/default-esm",
    transform: {
        "^.+\\.spec.(ts|tsx)$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.json",
                rootDir: ".",
            },
        ],
    },
    moduleFileExtensions: ["ts", "js", "json"],
    testMatch: ["**/**/*.ts"],
    extensionsToTreatAsEsm: [".spec.ts"],
};
