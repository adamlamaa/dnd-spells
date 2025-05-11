/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false, // No trailing semicolons
  trailingComma: "all", // Always use trailing commas
  singleQuote: false, // Use double quotes
}
