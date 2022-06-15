import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape } from "../../chunks/index-70388ded.js";
import { s as slotGameStore } from "../../chunks/store-ecf915a8.js";
var slotMachine_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".slotMachine.svelte-la7mzu{height:630px}.slot.svelte-la7mzu{height:200px;width:200px}.slotColumn.svelte-la7mzu{transition:transform 1s}@media only screen and (max-width: 1000px){.slot.svelte-la7mzu{width:100%}.slotMachine.svelte-la7mzu{width:fit-content}}",
  map: null
};
const SlotMachine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotGame;
  slotGameStore.subscribe((value) => {
    slotGame = value;
  });
  let fillerSlotRows = [
    slotGame.GetRandomSlot(),
    slotGame.GetRandomSlot(),
    slotGame.GetRandomSlot(),
    slotGame.GetRandomSlot(),
    slotGame.GetRandomSlot(),
    slotGame.GetRandomSlot(),
    slotGame.GetRandomSlot(),
    slotGame.GetRandomSlot(),
    slotGame.GetRandomSlot()
  ];
  let currentSlotRows1 = [slotGame.GetRandomSlot(), slotGame.GetRandomSlot(), slotGame.GetRandomSlot()];
  let currentSlotRows2 = [slotGame.GetRandomSlot(), slotGame.GetRandomSlot(), slotGame.GetRandomSlot()];
  let currentSlotRows3 = [slotGame.GetRandomSlot(), slotGame.GetRandomSlot(), slotGame.GetRandomSlot()];
  $$result.css.add(css$1);
  return `<div id="${"content"}" class="${"flex flex-col items-center p-4"}"><div class="${"flex flex-row gap-4 bg-accent p-4 w-max slotMachine svelte-la7mzu"}"><div class="${"flex flex-col overflow-hidden"}"><div id="${"slotColumn0"}" class="${"slotColumn svelte-la7mzu"}"><img class="${"slot svelte-la7mzu"}"${add_attribute("src", currentSlotRows1[0], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", currentSlotRows2[0], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", currentSlotRows3[0], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", fillerSlotRows[0], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", fillerSlotRows[1], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", fillerSlotRows[2], 0)} alt="${""}"></div></div>
        <div class="${"flex flex-col overflow-hidden"}"><div id="${"slotColumn1"}" class="${"slotColumn svelte-la7mzu"}"><img class="${"slot svelte-la7mzu"}"${add_attribute("src", currentSlotRows1[1], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", currentSlotRows2[1], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", currentSlotRows3[1], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", fillerSlotRows[3], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", fillerSlotRows[4], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", fillerSlotRows[5], 0)} alt="${""}"></div></div>
        <div class="${"flex flex-col overflow-hidden"}"><div id="${"slotColumn2"}" class="${"slotColumn svelte-la7mzu"}"><img class="${"slot svelte-la7mzu"}"${add_attribute("src", currentSlotRows1[2], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", currentSlotRows2[2], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", currentSlotRows3[2], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", fillerSlotRows[6], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", fillerSlotRows[7], 0)} alt="${""}">
                <img class="${"slot svelte-la7mzu"}"${add_attribute("src", fillerSlotRows[8], 0)} alt="${""}"></div></div></div>
    <button class="${"btn w-full"}">Spin</button>
</div>`;
});
var slot_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media only screen and (max-width: 1000px){#show.svelte-15n0xwo{display:flex;flex-direction:column}#bro.svelte-15n0xwo{display:flex;flex-direction:column;align-items:flex-start}}",
  map: null
};
const Slot_1 = create_ssr_component(($$result, $$props, $$bindings, slots$1) => {
  let slots;
  slotGameStore.subscribe((value) => {
    slots = value;
  });
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Slot</title>`, ""}`, ""}



<div id="${"bro"}" class="${"flex flex-col items-center svelte-15n0xwo"}"><div id="${"show"}" class="${"flex flex-row svelte-15n0xwo"}"><div class="${"flex flex-col items-center"}">${validate_component(SlotMachine, "SlotMachine").$$render($$result, {}, {}, {})}</div>
        <div class="${"flex flex-col gap-4 p-4"}"><h1 class="${"text-5xl"}">${escape(slots.slotName)}</h1>
            <div><h2 class="${"text-2xl"}">Description</h2>
                <p>${escape(slots.description)}<br>Get three in a row horizontally or vertically.</p>
                <p>Bet size: 10$</p></div>
            <div><h2 class="${"text-2xl"}">Info</h2>
                <div class="${"flex flex-col gap-4"}"><div><p>Common (${escape(2 * slots.multiplier)}x)</p>
                        <img class="${"w-1/3 h-1/3"}"${add_attribute("src", slots.commonSlot, 0)} alt="${""}"></div>
                    <div><p>Uncommon (${escape(3 * slots.multiplier)}x)</p>
                        <img class="${"w-1/3 h-1/3"}"${add_attribute("src", slots.uncommonSlot, 0)} alt="${""}"></div>
                    <div><p>Rare (${escape(4 * slots.multiplier)}x)</p>
                        <img class="${"w-1/3 h-1/3"}"${add_attribute("src", slots.rareSlot, 0)} alt="${""}"></div></div></div></div></div>
</div>`;
});
export { Slot_1 as default };
