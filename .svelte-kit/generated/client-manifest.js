export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\slot.svelte"),
	() => import("..\\..\\src\\routes\\slots.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"slot": [[0, 3], [1]],
	"slots": [[0, 4], [1]]
};