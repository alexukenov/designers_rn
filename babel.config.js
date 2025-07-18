module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        'root': [
          './src',
        ],
      'alias': {
        'core': './src/core',
        'common': './src/common',
        'components': './src/components',
        'features': './src/features',
        'root': './src/root',
        'icons': './resources/icons',
        'i18n': './i18n',
       },
      },
    ],
  ],
};
