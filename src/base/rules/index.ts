namespace BaseConfiguration {

export const rules = Object.assign(
  BaseConfiguration.coreRules,
  BaseConfiguration.arrayFunc,
  BaseConfiguration.babel,
  BaseConfiguration.es,
  BaseConfiguration.filenames,
  BaseConfiguration.flowtype,
  BaseConfiguration.html,
  BaseConfiguration.imports,
  BaseConfiguration.jest,
  BaseConfiguration.json,
  BaseConfiguration.node,
  BaseConfiguration.ocd,
  BaseConfiguration.promise,
  BaseConfiguration.security,
  BaseConfiguration.standard,
  BaseConfiguration.unicorn,
  BaseConfiguration.vue,
  BaseConfiguration.youDontNeedLodashUnderscore,
  BaseConfiguration.youDontNeedMomentjs
  )
}
