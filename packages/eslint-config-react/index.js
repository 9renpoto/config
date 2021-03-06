module.exports = {
  extends: ["prettier"],
  plugins: ["react", "react-hooks"],
  rules: {
    "react/jsx-uses-react": [1],
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
  },
};
