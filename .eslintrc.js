module.exports = {
  extends: [
    "airbnb",
  ],
  parser: "babel-eslint",
  env: {
    browser: true
  },
  rules: {
    // "curly": [
    //   "error"
    // ],
    "arrow-body-style": [
      "off"
    ],
    "react/jsx-filename-extension": [
      "off"
    ],
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ]
  },
  overrides: [
    {
      files: [
        "**/*.test.js"
      ],
      env: {
        jest: true
      },
    },
  ],
};
