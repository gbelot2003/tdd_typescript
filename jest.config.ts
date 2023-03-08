/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    //testEnvironment: nodejs,
    testMatch: ["**/**/*.test.ts"],
    verbose: true,
    forceExit: true,
    //clearMocks: true
    modulePathIgnorePatterns: ["<rootDir>/db", "<rootDir>/node_modules", "<rootDir>/dockerfiles"]

}

export default config;