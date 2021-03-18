module.exports = {
  extends: [
    'get-off-my-lawn',
    'plugin:@typescript-eslint/recommended', // Use recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. MUST ALWAYS BE LAST.
  ],
  parser: '@typescript-eslint/parser', // Use TS Parser
  parserOptions: {
    ecmaVersion: 2020, // Allow modern ECMAScript
    sourceType: 'module', // Allow imports
  },
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }], // Allow JSX is TSX Files
    'unicorn/no-abusive-eslint-disable': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.types.ts', '.ts', 'js', '.jsx'],
      },
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};
