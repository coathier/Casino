

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.53ee1845.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.38896ce3.js","_app/immutable/chunks/paths.dae70c24.js"];
export const stylesheets = ["_app/immutable/assets/2.09bdccd4.css"];
export const fonts = [];
