import { n as noop, b as safe_not_equal } from "./index-70388ded.js";
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
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const slotGameStore = writable(new Slot("Degen Candy", "https://static.wikia.nocookie.net/candy-crush-saga/images/9/91/OrangecandyHTML5.png", "https://static.wikia.nocookie.net/candy-crush-saga/images/e/eb/PurplecandyHTML5.png", "https://static.wikia.nocookie.net/candy-crush-saga/images/4/45/RedcandyHTML5.png", 3, "The candy of Degens, do you dear to eat it?"));
export { Slot as S, slotGameStore as s };
