import { writable } from 'svelte/store';
import {Slot} from "../components/slot.js";

export const slotGameStore = writable(new Slot("Degen Candy", "https://static.wikia.nocookie.net/candy-crush-saga/images/9/91/OrangecandyHTML5.png",
"https://static.wikia.nocookie.net/candy-crush-saga/images/e/eb/PurplecandyHTML5.png",
"https://static.wikia.nocookie.net/candy-crush-saga/images/4/45/RedcandyHTML5.png", 3,
"The candy of Degens, do you dear to eat it?"));