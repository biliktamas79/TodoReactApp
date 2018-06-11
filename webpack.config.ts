// tslint:disable-next-line:no-implicit-dependencies
import * as webpack from "webpack";

const configuration: webpack.Configuration = {
  resolve: {
    extensions: [ ".js", ".jsx", ".ts", ".tsx" ],

  },
};

export default configuration;
