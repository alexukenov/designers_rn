module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'max-len': ['warn', {
      'code': 100,           // Максимальная длина строки кода (по умолчанию 80)
    }],
  },
};
