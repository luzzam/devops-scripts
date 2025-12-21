// parser.js
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const parser = {
  parseConfig: (filePath) => {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const config = yaml.safeLoad(fileContent);
      return config;
    } catch (error) {
      console.error(`Error parsing file: ${error}`);
      process.exit(1);
    }
  },
  parsePath: (filePath) => {
    try {
      const stats = fs.statSync(filePath);
      if (stats.isFile()) {
        return this.parseConfig(filePath);
      } else if (stats.isDirectory()) {
        const files = fs.readdirSync(filePath);
        const config = files.reduce((acc, file) => {
          const filePath = path.join(filePath, file);
          if (file.endsWith('.yml') || file.endsWith('.yaml')) {
            acc[file] = this.parseConfig(filePath);
          }
          return acc;
        }, {});
        return config;
      }
      return {};
    } catch (error) {
      console.error(`Error parsing path: ${error}`);
      process.exit(1);
    }
  },
};

module.exports = parser;