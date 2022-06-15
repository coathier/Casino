<svelte:head><title>Slot</title></svelte:head>

<script>
    import {Slot} from "../components/slot.js";
    import SlotMachine from "../components/slotMachine.svelte";
    import {slotGameStore} from "../components/store.js";

    let slots;
    slotGameStore.subscribe(value => {
		slots = value;
	});
</script>

<div id="bro" class="flex flex-col items-center">
    <div id="show" class="flex flex-row">
        <div class="flex flex-col items-center">
            <SlotMachine/>
        </div>
        <div class="flex flex-col gap-4 p-4">
            <h1 class="text-5xl">{slots.slotName}</h1>
            <div>
                <h2 class="text-2xl">Description</h2>
                <p>{slots.description}<br>Get three in a row horizontally or vertically.</p>
                <p>Bet size: 10$</p>
            </div>
            <div>
                <h2 class="text-2xl">Info</h2>
                <div class="flex flex-col gap-4">
                    <div>
                        <p>Common ({2*slots.multiplier}x)</p>
                        <img class="w-1/3 h-1/3" src={slots.commonSlot} alt="">
                    </div>
                    <div>
                        <p>Uncommon ({3*slots.multiplier}x)</p>
                        <img class="w-1/3 h-1/3" src={slots.uncommonSlot} alt="">
                    </div>
                    <div>
                        <p>Rare ({4*slots.multiplier}x)</p>
                        <img class="w-1/3 h-1/3" src={slots.rareSlot} alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @media only screen and (max-width: 1000px) {
        #show {
            display: flex;
            flex-direction: column;
        }

        #bro {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>