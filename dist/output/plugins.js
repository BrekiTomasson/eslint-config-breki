"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const installMissing_1 = require("./installMissing");
const config_1 = tslib_1.__importDefault(require("../config"));
exports.plugins = config_1.default.plugins.filter((plugin) => installMissing_1.installMissing(plugin));
