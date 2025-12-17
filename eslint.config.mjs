import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Disable incorrect Tailwind gradient class suggestions
      // bg-gradient-to-* is the correct Tailwind syntax, not bg-linear-to-*
      "@next/next/no-css-tags": "off",
      "react/no-unknown-property": ["error", { 
        ignore: ["style"] 
      }],
    }
  }
]);

export default eslintConfig;
