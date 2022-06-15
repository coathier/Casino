<script>
    import {Slot} from "../components/slot.js";
    import {slotGameStore} from "../components/store.js";

    let slotGame;
    slotGameStore.subscribe(value => {
		slotGame = value;
	});

    let fillerSlotRows = [slotGame.GetRandomSlot(), slotGame.GetRandomSlot(), slotGame.GetRandomSlot(),
    slotGame.GetRandomSlot(), slotGame.GetRandomSlot(), slotGame.GetRandomSlot(), slotGame.GetRandomSlot(),
    slotGame.GetRandomSlot(), slotGame.GetRandomSlot()];

    let currentSlotRows1 = [slotGame.GetRandomSlot(), slotGame.GetRandomSlot(), slotGame.GetRandomSlot()];
    let currentSlotRows2 = [slotGame.GetRandomSlot(), slotGame.GetRandomSlot(), slotGame.GetRandomSlot()];
    let currentSlotRows3 = [slotGame.GetRandomSlot(), slotGame.GetRandomSlot(), slotGame.GetRandomSlot()];

    let spinning = false;

    function sleep(sec) {
        return new Promise(resolve => setTimeout(resolve, sec * 1000));
    }

    function updateFillerSlots() {
        for (let i = 0; i < fillerSlotRows.length; i++) {
            fillerSlotRows[i] = slotGame.GetRandomSlot();
        }
    }

    async function Spin(bet) {
        if (!spinning) {
            spinning = true;
            updateFillerSlots();
            await SpinSlot(-600, true);
            currentSlotRows1 = slotGame.GetRandomRow();
            currentSlotRows2 = slotGame.GetRandomRow();
            currentSlotRows3 = slotGame.GetRandomRow();
            await SpinSlot(0, false);
            let win = bet * slotGame.Calculate(currentSlotRows1) + bet * slotGame.Calculate(currentSlotRows2) + bet * slotGame.Calculate(currentSlotRows3);
            win += bet * slotGame.Calculate([currentSlotRows1[0], currentSlotRows2[0], currentSlotRows3[0]]) + bet * slotGame.Calculate([currentSlotRows1[1], currentSlotRows2[1], currentSlotRows3[1]]) + bet * slotGame.Calculate([currentSlotRows1[2], currentSlotRows2[2], currentSlotRows3[2]]);
            if (win !== 0) {
                await addDisplay(win); 
            }
            spinning = false;
        }
    }

    async function SpinSlot(num, spinAll) {
        document.getElementById("slotColumn0").style.transform = "translateY(" + num + "px)";
        if (!spinAll) {
            await sleep(1);
        }
        document.getElementById("slotColumn1").style.transform = "translateY(" + num + "px)";
        if (!spinAll) {
            await sleep(1);
        }
        document.getElementById("slotColumn2").style.transform = "translateY(" + num + "px)";
        await sleep(1);
    }

    async function addDisplay(num) {
        const div = document.createElement('div');

        div.setAttribute("style", "position: relative; top: -400px; font-size: 5em;");

        div.className = "winnings";

        div.innerHTML = "<h1>"+ num +"</h1>";

        document.getElementById('content').appendChild(div);
        await sleep(1);
        document.getElementsByClassName("winnings")[0].remove();
    }
</script>

<div id="content" class="flex flex-col items-center p-4">
    <div class="flex flex-row gap-4 bg-accent p-4 w-max slotMachine">
        <div class="flex flex-col overflow-hidden">
            <div id="slotColumn0" class="slotColumn">
                <img class="slot" src={currentSlotRows1[0]} alt="">
                <img class="slot" src={currentSlotRows2[0]} alt="">
                <img class="slot" src={currentSlotRows3[0]} alt="">
                <img class="slot" src={fillerSlotRows[0]} alt="">
                <img class="slot" src={fillerSlotRows[1]} alt="">
                <img class="slot" src={fillerSlotRows[2]} alt="">
            </div>
        </div>
        <div class="flex flex-col overflow-hidden">
            <div id="slotColumn1" class="slotColumn">
                <img class="slot" src={currentSlotRows1[1]} alt="">
                <img class="slot" src={currentSlotRows2[1]} alt="">
                <img class="slot" src={currentSlotRows3[1]} alt="">
                <img class="slot" src={fillerSlotRows[3]} alt="">
                <img class="slot" src={fillerSlotRows[4]} alt="">
                <img class="slot" src={fillerSlotRows[5]} alt="">
            </div>
        </div>
        <div class="flex flex-col overflow-hidden">
            <div id="slotColumn2" class="slotColumn">
                <img class="slot" src={currentSlotRows1[2]} alt="">
                <img class="slot" src={currentSlotRows2[2]} alt="">
                <img class="slot" src={currentSlotRows3[2]} alt="">
                <img class="slot" src={fillerSlotRows[6]} alt="">
                <img class="slot" src={fillerSlotRows[7]} alt="">
                <img class="slot" src={fillerSlotRows[8]} alt="">
            </div>
        </div>
    </div>
    <button class="btn w-full" on:click={()=>{Spin(10);}}>Spin</button>
</div>

<style>
    .slotMachine {
        height: 630px;
    }

    .slot {
        height: 200px;
        width: 200px;
    }

    .slotColumn {
        transition: transform 1s;
    }
    @media only screen and (max-width: 1000px) {
        #content {
            width: 60%;
        }
    }
</style>