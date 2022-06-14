<script>
    import {Slot} from "../components/slot.js";
    export let slots;
</script>

<a href="/slot" on:click={() => {window.slotGame = slots;}}>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="{slots.rareSlot}" alt="" width="200px" height="200px"/></figure>
        <div class="card-body">
        <h2 class="card-title">
            {slots.slotName}
            <div class="badge badge-secondary">Edge {5-slots.multiplier}.5%</div>
        </h2>
        <p>{slots.description}</p>
        <div class="card-actions justify-end">
            <div class="badge badge-outline">Slot</div> 
            <div class="badge badge-outline">Profitable</div>
            <div class="badge badge-outline">Cappin'</div>
        </div>
        </div>
    </div>
</a>