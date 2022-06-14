import { c as create_ssr_component } from "../../chunks/index-2835083a.js";
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-100 border-b border-accent sticky top-0 z-10"}"><div class="${"navbar-start"}"><a href="${"/"}" class="${"btn btn-ghost"}">Home</a>
    <a href="${"/slots"}" class="${"btn btn-ghost"}">Slots</a></div></div>

${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
