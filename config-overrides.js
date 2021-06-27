const path = require("path");
const fs = require("fs");
const sourceFolder = path.resolve(__dirname, "src");
const folderInsideSrc = fs
  .readdirSync(sourceFolder)
  .filter((name) => fs.statSync(path.resolve(sourceFolder, name)).isDirectory())
  .reduce((acc, val) => {
    acc[val] = path.resolve(sourceFolder, val);
    return acc;
  }, {});

module.exports = {
  webpack: function (config, env) {
    //Add resolve alias
    config.resolve.alias = {
      ...config.resolve.alias,
      ...folderInsideSrc,
    };
    return config;
  },
  devSever: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.hot = true;
    };
  },
};
