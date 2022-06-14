import { c as create_ssr_component, v as validate_component } from "../../chunks/index-2835083a.js";
const ProjectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"card lg:card-side bg-base-100 shadow-xl w-full"}"><figure><img src="${"https://api.lorem.space/image/movie?w=400&h=400"}" alt="${""}"></figure>
    <div class="${"card-body"}"><h2 class="${"card-title"}">Streaming Project</h2>
      <p>Click the button to check out the site.</p>
      <div class="${"card-actions justify-end"}"><button class="${"btn btn-primary"}">Check Out</button></div></div></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}



<div class="${"flex flex-row"}"><div class="${"w-1/4 p-3 flex flex-col gap-8"}"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="${"/slots"}" class="${"w-full btn btn-primary"}">Slots</a></div>
    <div class="${"w-3/4 flex flex-col gap-8 flex items-center border-l border-accent p-3"}"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="${"flex flex-col gap-4"}"><h1>My Other Projects</h1>
            
            <div class="${"flex flex-row gap-4"}">${validate_component(ProjectItem, "ProjectItem").$$render($$result, {}, {}, {})}${validate_component(ProjectItem, "ProjectItem").$$render($$result, {}, {}, {})}</div>
            <div class="${"flex flex-row gap-4"}">${validate_component(ProjectItem, "ProjectItem").$$render($$result, {}, {}, {})}${validate_component(ProjectItem, "ProjectItem").$$render($$result, {}, {}, {})}</div></div></div></div>`;
});
export { Routes as default };
