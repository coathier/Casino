

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fdb6a743.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.38896ce3.js","_app/immutable/chunks/singletons.34398264.js","_app/immutable/chunks/index.35a173b3.js","_app/immutable/chunks/paths.e6099914.js"];
export const stylesheets = [];
export const fonts = [];
