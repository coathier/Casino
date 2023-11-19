

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/slot/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.f8f5900b.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.38896ce3.js","_app/immutable/chunks/store.c5b4a7f9.js","_app/immutable/chunks/index.35a173b3.js"];
export const stylesheets = ["_app/immutable/assets/3.1b34ff59.css"];
export const fonts = [];
