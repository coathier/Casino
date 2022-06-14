import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/index-2835083a.js";
class Slot {
  constructor(name, commonSlot, uncommonSlot, rareSlot, multiplier, description) {
    this.slotName = name;
    this.commonSlot = commonSlot;
    this.uncommonSlot = uncommonSlot;
    this.rareSlot = rareSlot;
    this.multiplier = multiplier;
    this.description = description;
  }
  GetRandomSlot() {
    let randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber < 5) {
      return this.commonSlot;
    } else if (randomNumber < 9) {
      return this.uncommonSlot;
    } else {
      return this.rareSlot;
    }
  }
  GetRandomRow() {
    let randomRow = [this.GetRandomSlot(), this.GetRandomSlot(), this.GetRandomSlot()];
    return randomRow;
  }
  Calculate(randomRow) {
    if (randomRow[0] == randomRow[1] && randomRow[1] == randomRow[2]) {
      if (randomRow[0] == this.commonSlot) {
        return 2 * this.multiplier;
      } else if (randomRow[0] == this.uncommonSlot) {
        return 3 * this.multiplier;
      } else {
        return 4 * this.multiplier;
      }
    } else {
      return 0;
    }
  }
}
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
    new Slot("Shoe Craze", "https://api.lorem.space/image/shoes?w=200&h=200&hash=8B7BCDC2", "https://api.lorem.space/image/shoes?w=200&h=200&hash=BDC01094", "https://api.lorem.space/image/shoes?w=200&h=200&hash=2D297A22", 2, "New Shiny shoes for your collection!"),
    new Slot("Turbo Twister", "https://api.lorem.space/image/car?w=200&h=200&hash=8B7BCDC2", "https://api.lorem.space/image/car?w=200&h=200&hash=225E6693", "https://api.lorem.space/image/car?w=200&h=150&hash=4F32C4CF", 4, "Cars that will blow your mind, not litteraly...")
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
