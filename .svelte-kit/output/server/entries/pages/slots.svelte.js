import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/index-70388ded.js";
import { S as Slot } from "../../chunks/store-ecf915a8.js";
const SlotItem = create_ssr_component(($$result, $$props, $$bindings, slots$1) => {
  let { slots } = $$props;
  if ($$props.slots === void 0 && $$bindings.slots && slots !== void 0)
    $$bindings.slots(slots);
  return `<a href="${"/slot"}"><div class="${"card w-96 bg-base-100 shadow-xl"}"><figure><img${add_attribute("src", slots.rareSlot, 0)} alt="${""}" width="${"200px"}" height="${"200px"}"></figure>
        <div class="${"card-body"}"><h2 class="${"card-title"}">${escape(slots.slotName)}
            <div class="${"badge badge-secondary"}">Edge ${escape(5 - slots.multiplier)}.5%</div></h2>
        <p>${escape(slots.description)}</p>
        <div class="${"card-actions justify-end"}"><div class="${"badge badge-outline"}">Slot</div> 
            <div class="${"badge badge-outline"}">Profitable</div>
            <div class="${"badge badge-outline"}">Cappin&#39;</div></div></div></div></a>`;
});
const Slots = create_ssr_component(($$result, $$props, $$bindings, slots$1) => {
  let slots = [
    new Slot("Degen Candy", "https://static.wikia.nocookie.net/candy-crush-saga/images/9/91/OrangecandyHTML5.png", "https://static.wikia.nocookie.net/candy-crush-saga/images/e/eb/PurplecandyHTML5.png", "https://static.wikia.nocookie.net/candy-crush-saga/images/4/45/RedcandyHTML5.png", 3, "The candy of Degens, do you dear to eat it?"),
    new Slot("Shoe Craze", "https://www.brit.co/media-library/image.jpg?id=21025774&width=980", "https://thumbs.dreamstime.com/b/medellin-colombia-marzo-reebok-sports-shoes-white-background-142357293.jpg", "https://media.restocks.net/products/CN8607-002/air-jordan-1-retro-high-dior-1-1000.png", 2, "New Shiny shoes for your collection!"),
    new Slot("Turbo Twister", "https://cloud.leparking.fr/2022/01/14/10/33/honda-civic-1998-honda-civic-ek9-type-r-blanc_8401537273.jpg", "https://racemarket.net/oc-content/uploads/37/25738.jpg", "https://besthqwallpapers.com/Uploads/28-8-2018/63525/thumb2-nissan-silvia-s15-purple-sports-coupe-tuning-silvia-purple-silvia-s15-japanese-sports-cars.jpg", 4, "Cars that will blow your mind, not litteraly...")
  ];
  return `${$$result.head += `${$$result.title = `<title>Slots</title>`, ""}`, ""}



<div class="${"flex flex-col gap-4 p-6"}"><div class="${"flex flex-row w-full gap-4"}">${validate_component(SlotItem, "SlotItem").$$render($$result, { slots: slots[0] }, {}, {})}
        ${validate_component(SlotItem, "SlotItem").$$render($$result, { slots: slots[1] }, {}, {})}
        ${validate_component(SlotItem, "SlotItem").$$render($$result, { slots: slots[2] }, {}, {})}</div>
    <div class="${"flex flex-row w-full gap-4"}">${validate_component(SlotItem, "SlotItem").$$render($$result, {
    slots: slots[Math.floor(Math.random() * slots.length)]
  }, {}, {})}
        ${validate_component(SlotItem, "SlotItem").$$render($$result, {
    slots: slots[Math.floor(Math.random() * slots.length)]
  }, {}, {})}
        ${validate_component(SlotItem, "SlotItem").$$render($$result, {
    slots: slots[Math.floor(Math.random() * slots.length)]
  }, {}, {})}</div></div>`;
});
export { Slots as default };
