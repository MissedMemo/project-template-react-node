const isTest = String( process.env.NODE_ENV === 'test' )

module.exports = {
  presets: [
    "@babel/preset-react",
    [ "@babel/preset-env", {
      modules: isTest ? 'commonjs' : false
    }]
  ],
  plugins: isTest ? ["@babel/plugin-transform-runtime"] : []
}

/* add to .browserslistrc
"targets": {
  "browsers": [
    ">0.25%",
    "not ie 11",
    "not op_mini all"
  ]
}
*/