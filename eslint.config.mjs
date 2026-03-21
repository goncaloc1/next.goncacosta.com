import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([{
    extends: [...next, ...nextCoreWebVitals],

    rules: {
        "react/no-unescaped-entities": "off",
        "@next/next/no-img-element": "off",
        "@next/next/no-sync-scripts": "off",
    },
}]);