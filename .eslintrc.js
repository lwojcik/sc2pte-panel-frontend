// for IDEs

module.exports = {
  "extends": "react-app",
  "rules": {
    "quotes": ["error", "single", { "avoidEscape": true }],
    "indent": ["error", 2],
    "no-console": ["error"],
    "no-multiple-empty-lines": ["error"],
    "eol-last": ["error", "always"],
    "no-trailing-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "semi": ["error", "always"],
    "react/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "always" }]
  },
}
