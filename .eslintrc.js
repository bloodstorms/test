module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['simple-import-sort', 'import'],
  rules: {
    'vue/attribute-hyphenation': 'off',
    'simple-import-sort/sort': 'error',
    'import/no-duplicates': 'error',
  },
};
