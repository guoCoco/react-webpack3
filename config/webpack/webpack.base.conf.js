const entry = require("./webpack.entry.conf");
const json = require('../../package.json'); // 引入package.json

const newEntry = {};
for (let name in entry) {
    newEntry[name] = entry[name][0]
}

newEntry.vendor = Object.keys(json.dependencies); // vendor: ['react', 'react-dom']

let config = {
    entry: newEntry,
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css",".pcss"],
    }
};
module.exports = config;