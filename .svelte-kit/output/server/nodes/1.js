

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2c1a9e95.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.38896ce3.js","_app/immutable/chunks/singletons.c64e318d.js","_app/immutable/chunks/index.35a173b3.js","_app/immutable/chunks/paths.4c066691.js"];
export const stylesheets = [];
export const fonts = [];
