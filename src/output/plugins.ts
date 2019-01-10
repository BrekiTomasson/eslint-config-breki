import { installMissing } from './installMissing'
import config from '../config'

export const plugins = config.plugins.filter((plugin) => installMissing(plugin))
