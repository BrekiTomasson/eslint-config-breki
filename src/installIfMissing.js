"use strict";

const exec = require('child_process')

const installIfMissing = function(plugin) {
  try {
    require(`eslint-plugin-${plugin}`);
    return true;
  } catch (ex) {
    console.log('Plugin missing. Installing eslint-plugin-' + plugin)

    exec(`npm install eslint-plugin-${plugin}`, (err, stdout, stderr) => {
      if (err) {
        console.log`Could not install plugin: eslint-plugin-${plugin}.`;
      } else {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      }
    })

  }
}

module.exports = installIfMissing;
