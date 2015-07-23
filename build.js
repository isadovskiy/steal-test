var stealTools = require("steal-tools");

stealTools.build({
  main: 'src/scripts/main',
  config: __dirname + "/bower.json!bower"
}, {
  bundleSteal: true
});
