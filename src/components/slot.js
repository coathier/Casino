export class Slot {
    constructor(name , commonSlot, uncommonSlot, rareSlot, multiplier, description) {
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
            } else if(randomRow[0] == this.uncommonSlot) {
                return 3 * this.multiplier;
            } else {
                return 4 * this.multiplier;
            }
        } else {
            return 0;
        }
    }
}