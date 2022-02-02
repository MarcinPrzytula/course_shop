// module.exports = {
//   presets: [
//     '@babel/preset-env',
//     '@babel/preset-react',
//   ],

//   plugins: ['@babel/plugin-syntax-jsx'],
// };
module.exports = () => ({
  presets: [
    require('@babel/preset-env'),
    require('@babel/preset-react'),
  ],
  plugins: [
    [
      require('@babel/plugin-proposal-class-properties'),
      { loose: true },
    ],
    require('@babel/plugin-proposal-object-rest-spread'),
  ],
});
