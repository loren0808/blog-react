module.exports = {
  root: true,
  // 指定扩展标准
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false
  },
  // 指定校验环境
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['simple-import-sort'],
  // 0代表关闭规则 1代表警告 2代表错误并退出
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'default-case': 2,
    'guard-for-in': 2,
    'no-eval': 2,
    'no-implied-eval': 2,
    'no-lone-blocks': 2,
    'require-await': 2,
    'comma-dangle': 2,
    // 变量定义但未使用
    'no-unused-vars': 2,
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/member-ordering': 0,
    'react/jsx-no-useless-fragment': 0,
    'no-param-reassign': 0
  }
};
