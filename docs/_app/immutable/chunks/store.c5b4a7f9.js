import{w as a}from"./index.35a173b3.js";class r{constructor(t,e,o,i,s,n){this.slotName=t,this.commonSlot=e,this.uncommonSlot=o,this.rareSlot=i,this.multiplier=s,this.description=n}GetRandomSlot(){let t=Math.floor(Math.random()*11);return t<5?this.commonSlot:t<9?this.uncommonSlot:this.rareSlot}GetRandomRow(){return[this.GetRandomSlot(),this.GetRandomSlot(),this.GetRandomSlot()]}Calculate(t){return t[0]==t[1]&&t[1]==t[2]?t[0]==this.commonSlot?2*this.multiplier:t[0]==this.uncommonSlot?3*this.multiplier:4*this.multiplier:0}}const m=a(new r("Degen Candy","https://static.wikia.nocookie.net/candy-crush-saga/images/9/91/OrangecandyHTML5.png","https://static.wikia.nocookie.net/candy-crush-saga/images/e/eb/PurplecandyHTML5.png","https://static.wikia.nocookie.net/candy-crush-saga/images/4/45/RedcandyHTML5.png",3,"The candy of Degens, do you dear to eat it?"));export{r as S,m as s};