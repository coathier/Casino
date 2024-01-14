<svelte:head><title>Slots</title></svelte:head>

<script>
    import SlotItem from "../../components/slotItem.svelte";
    import {Slot} from "../../components/slot.js";

    let slots = [new Slot("Degen Candy", "https://static.wikia.nocookie.net/candy-crush-saga/images/9/91/OrangecandyHTML5.png",
    "https://static.wikia.nocookie.net/candy-crush-saga/images/e/eb/PurplecandyHTML5.png",
    "https://static.wikia.nocookie.net/candy-crush-saga/images/4/45/RedcandyHTML5.png", 3,
    "The candy of Degens, do you dear to eat it?"),
    
    new Slot("Shoe Craze", "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/74a8961c-db38-4571-b10c-30770c098840/air-jordan-1-zoom-cmft-2-mens-shoes-Tw02qw.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/acf9cf41-a9bc-4e6a-b98a-7a38bb163f31/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/83e2954a-26e4-49ff-9c8d-271d6ba871ce/air-jordan-4-craft-olive-mens-shoes-GmXFz0.png", 2,
    "New Shiny shoes for your collection!"),

    new Slot("Turbo Twister", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1cars.org%2Fuploads%2Fposts%2F2015-07%2F1437040291_nissan-silvia-s14-7.jpg&f=1&nofb=1&ipt=73cfe43353d4b2b52f0ac990592ae50d0107037df658bb3cf8592614c10c2470&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fccwheel.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fquicksilver-toyota-supra-mkiv-matte-black-ccw-classic-wheels-trd-tuned-modified-l.jpg&f=1&nofb=1&ipt=5b9bd125fdf97f6252fa05b4cb3842c91032f769fc7f185b5fd17605858a9722&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VkSa47-uqxGYjlE_-zCWYQHaEs%26pid%3DApi&f=1&ipt=d9246795a2188c31c5272672862788666a15b27810f8ee9dbd99be51404708fc&ipo=images", 4,
    "Cars that will blow your mind, not litteraly...")];
</script>

<div class="flex flex-col gap-4 p-6">
    <div class="flex flex-row w-full gap-4 show">
        <SlotItem slots = {slots[0]}/>
        <SlotItem slots = {slots[1]}/>
        <SlotItem slots = {slots[2]}/>
    </div>
    <div class="flex flex-row w-full gap-4 show">
        <SlotItem slots = {slots[Math.floor(Math.random() * slots.length)]}/>
        <SlotItem slots = {slots[Math.floor(Math.random() * slots.length)]}/>
        <SlotItem slots = {slots[Math.floor(Math.random() * slots.length)]}/>
    </div>
</div>

<style>
    @media only screen and (max-width: 1000px) {
        .show {
            display: flex;
            flex-direction: column;
        }
    }
</style>
