<svelte:head><title>Slots</title></svelte:head>

<script>
    import SlotItem from "../components/slotItem.svelte";
    import {Slot} from "../components/slot.js";
    let slots = [new Slot("Degen Candy", "https://static.wikia.nocookie.net/candy-crush-saga/images/9/91/OrangecandyHTML5.png",
    "https://static.wikia.nocookie.net/candy-crush-saga/images/e/eb/PurplecandyHTML5.png",
    "https://static.wikia.nocookie.net/candy-crush-saga/images/4/45/RedcandyHTML5.png", 3,
    "The candy of Degens, do you dear to eat it?"),
    
    new Slot("Shoe Craze", "https://api.lorem.space/image/shoes?w=200&h=200&hash=8B7BCDC2",
    "https://api.lorem.space/image/shoes?w=200&h=200&hash=BDC01094",
    "https://api.lorem.space/image/shoes?w=200&h=200&hash=2D297A22", 2,
    "New Shiny shoes for your collection!"),

    new Slot("Turbo Twister", "https://api.lorem.space/image/car?w=200&h=200&hash=8B7BCDC2",
    "https://api.lorem.space/image/car?w=200&h=200&hash=225E6693",
    "https://api.lorem.space/image/car?w=200&h=150&hash=4F32C4CF", 4,
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