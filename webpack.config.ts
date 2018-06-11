// tslint:disable-next-line:no-implicit-dependencies
import * as webpack from "webpack";

const configuration: webpack.Configuration = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
  },
  resolve: {
    extensions: [ ".js", ".jsx", ".ts", ".tsx" ],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ],
  },
};

export default configuration;
