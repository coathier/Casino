import{S as ut,i as ft,s as pt,e as m,k as _,t as N,c as h,a as f,d as n,m as w,h as T,K as ht,b as i,g as rt,G as e,M as gt,j as st,n as lt,x as z,L as vt,y as U,z as A,r as F,p as K,C as O}from"../chunks/index-a83666ae.js";class at{constructor(t,a,r,l,p,g){this.slotName=t,this.commonSlot=a,this.uncommonSlot=r,this.rareSlot=l,this.multiplier=p,this.description=g}GetRandomSlot(){let t=Math.floor(Math.random()*11);return t<5?this.commonSlot:t<9?this.uncommonSlot:this.rareSlot}GetRandomRow(){return[this.GetRandomSlot(),this.GetRandomSlot(),this.GetRandomSlot()]}Calculate(t){return t[0]==t[1]&&t[1]==t[2]?t[0]==this.commonSlot?2*this.multiplier:t[0]==this.uncommonSlot?3*this.multiplier:4*this.multiplier:0}}function $t(o){let t,a,r,l,p,g,u,d,D=o[0].slotName+"",c,b,v,S,V=5-o[0].multiplier+"",$,G,s,j,E=o[0].description+"",y,k,I,R,W,X,q,Y,Z,H,tt,et,ot;return{c(){t=m("a"),a=m("div"),r=m("figure"),l=m("img"),g=_(),u=m("div"),d=m("h2"),c=N(D),b=_(),v=m("div"),S=N("Edge "),$=N(V),G=N(".5%"),s=_(),j=m("p"),y=N(E),k=_(),I=m("div"),R=m("div"),W=N("Slot"),X=_(),q=m("div"),Y=N("Profitable"),Z=_(),H=m("div"),tt=N("Cappin'"),this.h()},l(M){t=h(M,"A",{href:!0});var C=f(t);a=h(C,"DIV",{class:!0});var B=f(a);r=h(B,"FIGURE",{});var nt=f(r);l=h(nt,"IMG",{src:!0,alt:!0,width:!0,height:!0}),nt.forEach(n),g=w(B),u=h(B,"DIV",{class:!0});var L=f(u);d=h(L,"H2",{class:!0});var J=f(d);c=T(J,D),b=w(J),v=h(J,"DIV",{class:!0});var Q=f(v);S=T(Q,"Edge "),$=T(Q,V),G=T(Q,".5%"),Q.forEach(n),J.forEach(n),s=w(L),j=h(L,"P",{});var it=f(j);y=T(it,E),it.forEach(n),k=w(L),I=h(L,"DIV",{class:!0});var P=f(I);R=h(P,"DIV",{class:!0});var dt=f(R);W=T(dt,"Slot"),dt.forEach(n),X=w(P),q=h(P,"DIV",{class:!0});var ct=f(q);Y=T(ct,"Profitable"),ct.forEach(n),Z=w(P),H=h(P,"DIV",{class:!0});var mt=f(H);tt=T(mt,"Cappin'"),mt.forEach(n),P.forEach(n),L.forEach(n),B.forEach(n),C.forEach(n),this.h()},h(){ht(l.src,p=o[0].rareSlot)||i(l,"src",p),i(l,"alt",""),i(l,"width","200px"),i(l,"height","200px"),i(v,"class","badge badge-secondary"),i(d,"class","card-title"),i(R,"class","badge badge-outline"),i(q,"class","badge badge-outline"),i(H,"class","badge badge-outline"),i(I,"class","card-actions justify-end"),i(u,"class","card-body"),i(a,"class","card w-96 bg-base-100 shadow-xl"),i(t,"href","/slot")},m(M,C){rt(M,t,C),e(t,a),e(a,r),e(r,l),e(a,g),e(a,u),e(u,d),e(d,c),e(d,b),e(d,v),e(v,S),e(v,$),e(v,G),e(u,s),e(u,j),e(j,y),e(u,k),e(u,I),e(I,R),e(R,W),e(I,X),e(I,q),e(q,Y),e(I,Z),e(I,H),e(H,tt),et||(ot=gt(t,"click",o[1]),et=!0)},p(M,[C]){C&1&&!ht(l.src,p=M[0].rareSlot)&&i(l,"src",p),C&1&&D!==(D=M[0].slotName+"")&&st(c,D),C&1&&V!==(V=5-M[0].multiplier+"")&&st($,V),C&1&&E!==(E=M[0].description+"")&&st(y,E)},i:lt,o:lt,d(M){M&&n(t),et=!1,ot()}}}function _t(o,t,a){let{slots:r}=t;const l=()=>{window.slotGame=r};return o.$$set=p=>{"slots"in p&&a(0,r=p.slots)},[r,l]}class x extends ut{constructor(t){super(),ft(this,t,_t,$t,pt,{slots:0})}}function wt(o){let t,a,r,l,p,g,u,d,D,c,b,v,S,V,$,G;return l=new x({props:{slots:o[0][0]}}),g=new x({props:{slots:o[0][1]}}),d=new x({props:{slots:o[0][2]}}),b=new x({props:{slots:o[0][Math.floor(Math.random()*o[0].length)]}}),S=new x({props:{slots:o[0][Math.floor(Math.random()*o[0].length)]}}),$=new x({props:{slots:o[0][Math.floor(Math.random()*o[0].length)]}}),{c(){t=_(),a=m("div"),r=m("div"),z(l.$$.fragment),p=_(),z(g.$$.fragment),u=_(),z(d.$$.fragment),D=_(),c=m("div"),z(b.$$.fragment),v=_(),z(S.$$.fragment),V=_(),z($.$$.fragment),this.h()},l(s){vt('[data-svelte="svelte-1eb4wcw"]',document.head).forEach(n),t=w(s),a=h(s,"DIV",{class:!0});var E=f(a);r=h(E,"DIV",{class:!0});var y=f(r);U(l.$$.fragment,y),p=w(y),U(g.$$.fragment,y),u=w(y),U(d.$$.fragment,y),y.forEach(n),D=w(E),c=h(E,"DIV",{class:!0});var k=f(c);U(b.$$.fragment,k),v=w(k),U(S.$$.fragment,k),V=w(k),U($.$$.fragment,k),k.forEach(n),E.forEach(n),this.h()},h(){document.title="Slots",i(r,"class","flex flex-row w-full gap-4"),i(c,"class","flex flex-row w-full gap-4"),i(a,"class","flex flex-col gap-4 p-6")},m(s,j){rt(s,t,j),rt(s,a,j),e(a,r),A(l,r,null),e(r,p),A(g,r,null),e(r,u),A(d,r,null),e(a,D),e(a,c),A(b,c,null),e(c,v),A(S,c,null),e(c,V),A($,c,null),G=!0},p:lt,i(s){G||(F(l.$$.fragment,s),F(g.$$.fragment,s),F(d.$$.fragment,s),F(b.$$.fragment,s),F(S.$$.fragment,s),F($.$$.fragment,s),G=!0)},o(s){K(l.$$.fragment,s),K(g.$$.fragment,s),K(d.$$.fragment,s),K(b.$$.fragment,s),K(S.$$.fragment,s),K($.$$.fragment,s),G=!1},d(s){s&&n(t),s&&n(a),O(l),O(g),O(d),O(b),O(S),O($)}}}function bt(o){return[[new at("Degen Candy","https://static.wikia.nocookie.net/candy-crush-saga/images/9/91/OrangecandyHTML5.png","https://static.wikia.nocookie.net/candy-crush-saga/images/e/eb/PurplecandyHTML5.png","https://static.wikia.nocookie.net/candy-crush-saga/images/4/45/RedcandyHTML5.png",3,"The candy of Degens, do you dear to eat it?"),new at("Shoe Craze","https://www.brit.co/media-library/image.jpg?id=21025774&width=980","https://thumbs.dreamstime.com/b/medellin-colombia-marzo-reebok-sports-shoes-white-background-142357293.jpg","https://media.restocks.net/products/CN8607-002/air-jordan-1-retro-high-dior-1-1000.png",2,"New Shiny shoes for your collection!"),new at("Turbo Twister","https://cloud.leparking.fr/2022/01/14/10/33/honda-civic-1998-honda-civic-ek9-type-r-blanc_8401537273.jpg","https://racemarket.net/oc-content/uploads/37/25738.jpg","https://besthqwallpapers.com/Uploads/28-8-2018/63525/thumb2-nissan-silvia-s15-purple-sports-coupe-tuning-silvia-purple-silvia-s15-japanese-sports-cars.jpg",4,"Cars that will blow your mind, not litteraly...")]]}class yt extends ut{constructor(t){super(),ft(this,t,bt,wt,pt,{})}}export{yt as default};
