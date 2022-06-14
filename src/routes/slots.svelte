<svelte:head><title>Slots</title></svelte:head>

<script>
    import SlotItem from "../components/slotItem.svelte";
    import {Slot} from "../components/slot.js";
    let slots = [new Slot("Degen Candy", "https://static.wikia.nocookie.net/candy-crush-saga/images/9/91/OrangecandyHTML5.png",
    "https://static.wikia.nocookie.net/candy-crush-saga/images/e/eb/PurplecandyHTML5.png",
    "https://static.wikia.nocookie.net/candy-crush-saga/images/4/45/RedcandyHTML5.png", 3,
    "The candy of Degens, do you dear to eat it?"),
    
    new Slot("Shoe Craze", "https://www.brit.co/media-library/image.jpg?id=21025774&width=980",
    "https://thumbs.dreamstime.com/b/medellin-colombia-marzo-reebok-sports-shoes-white-background-142357293.jpg",
    "https://media.restocks.net/products/CN8607-002/air-jordan-1-retro-high-dior-1-1000.png", 2,
    "New Shiny shoes for your collection!"),

    new Slot("Turbo Twister", "https://cloud.leparking.fr/2022/01/14/10/33/honda-civic-1998-honda-civic-ek9-type-r-blanc_8401537273.jpg",
    "https://racemarket.net/oc-content/uploads/37/25738.jpg",
    "https://besthqwallpapers.com/Uploads/28-8-2018/63525/thumb2-nissan-silvia-s15-purple-sports-coupe-tuning-silvia-purple-silvia-s15-japanese-sports-cars.jpg", 4,
    "Cars that will blow your mind, not litteraly...")];
</script>

<div class="flex flex-col gap-4 p-6">
    <div class="flex flex-row w-full gap-4">
        <SlotItem slots = {slots[0]}/>
        <SlotItem slots = {slots[1]}/>
        <SlotItem slots = {slots[2]}/>
    </div>
    <div class="flex flex-row w-full gap-4">
        <SlotItem slots = {slots[Math.floor(Math.random() * slots.length)]}/>
        <SlotItem slots = {slots[Math.floor(Math.random() * slots.length)]}/>
        <SlotItem slots = {slots[Math.floor(Math.random() * slots.length)]}/>
    </div>
</div>