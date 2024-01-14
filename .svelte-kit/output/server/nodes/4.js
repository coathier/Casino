

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/slots/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.7cff236d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.38896ce3.js","_app/immutable/chunks/store.c5b4a7f9.js","_app/immutable/chunks/index.35a173b3.js","_app/immutable/chunks/paths.e6099914.js"];
export const stylesheets = ["_app/immutable/assets/2.09bdccd4.css"];
export const fonts = [];
