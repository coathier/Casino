

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2f0b156d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.38896ce3.js","_app/immutable/chunks/paths.dae70c24.js"];
export const stylesheets = ["_app/immutable/assets/0.6d0a9d76.css"];
export const fonts = [];
