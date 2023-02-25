/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.export = {
    preset: 'ts-jest',
    testEnvironment: node,
    testMatch: ["**/**/*.test.ts"],
    verbose: true,
    forceExit: true,
    //clearMocks: true
}