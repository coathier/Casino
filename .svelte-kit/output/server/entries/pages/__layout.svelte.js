import { c as create_ssr_component, e as escape } from "../../chunks/index-70388ded.js";
import { b as base } from "../../chunks/paths-396f020f.js";
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-100 border-b border-accent sticky top-0 z-10"}"><div class="${"navbar-start"}"><a href="${escape(base) + "/"}" class="${"btn btn-ghost"}">Home</a>
    <a href="${escape(base) + "/slots"}" class="${"btn btn-ghost"}">Slots</a></div></div>

${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
