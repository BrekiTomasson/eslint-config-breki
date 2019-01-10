"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const npm_install_package_1 = tslib_1.__importDefault(require("npm-install-package"));
const resolve_1 = tslib_1.__importDefault(require("resolve"));
function installMissing(plugin) {
    const pluginFullName = `eslint-plugin-${plugin}`;
    console.log(`Checking for presence of ${pluginFullName}.`);
    resolve_1.default(pluginFullName, (err) => {
        if (err) {
            notFound(pluginFullName);
        }
        else
            resolve_1.default;
    });
}
exports.installMissing = installMissing;
const notFound = (pluginFullName) => new Promise((good, bad) => {
    console.log(`Attempting installation of ${pluginFullName}. Please wait.`);
    npm_install_package_1.default(pluginFullName, (err) => {
        if (err) {
            console.log(`Could not install plugin: ${pluginFullName}.`);
            bad(err);
        }
        else
            good(true);
    });
});
