(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"38b9":function(e,t,s){"use strict";s("cf0d")},"4ce0":function(e,t,s){e.exports=s.p+"img/coffee-pot.e4e9e985.png"},"66d6":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"clock-in"},[s("h1",{staticClass:"viewTitle"},[e._v("Clock In")]),s("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.clockedIn,expression:"!this.$store.state.clockedIn"}],staticClass:"descriptiveText"},[s("button",{on:{click:function(t){e.clockedIn(),e.customerRandom()}}},[e._v("Clock In")])]),this.$store.state.clockedIn?s("div",{staticClass:"descriptiveText"},[s("p",[e._v("CLOCKED IN ON "+e._s(e.clockedInDate)),s("br"),e._v(" AT "+e._s(e.clockedInTime))]),s("v-divider",[e._v("inset")]),s("br"),s("br"),s("p",[e._v("A customer approaches...")]),s("br"),s("transition-group",{attrs:{name:"fadeIn",appear:""}},[s("v-icon",{key:1},[e._v("mdi-account")]),s("p",{key:2},[e._v(e._s(e.currentCustomer.name))]),s("p",{key:3},[e._v('"'+e._s(e.currentCustomer.order)+'"')])],1),s("br"),e.serveEmpty?s("div",{staticClass:"descriptiveText"},[e._v(" \"You haven't made me a drink yet. Get brewin'!\" ")]):e._e(),e.serveFail?s("div",{staticClass:"descriptiveText"},[e._v(' "That\'s not even a little bit close to what I ordered. Try again?" ')]):e._e(),e.servePass?s("div",{staticClass:"descriptiveText"},[e._v(' "YUM. Thanks for the drink!" ')]):e._e(),s("br"),s("br"),s("div",{staticClass:"selection"},[s("button",{on:{click:function(t){return e.serveDrink()}}},[e._v(" Serve Drink "),s("v-icon",{staticClass:"icon-small"},[e._v("mdi-coffee")])],1),e.showNextButton?s("button",{on:{click:function(t){return e.customerNext()}}},[e._v(" NEXT!  ")]):e._e(),s("button",{on:{click:function(t){return e.customerRandom()}}},[e._v(" Refuse "),s("v-icon",{staticClass:"icon-small"},[e._v("mdi-hand-front-left ")])],1)])],1):e._e()])},o=[],r=function(e,t){return Math.floor(Math.random()*(t-e)+e)},i=[{id:1,name:"Jo Mugsy",order:"Hello, I'd like a coffee, please.",drink:"Regular"},{id:2,name:"Jill Grind",order:"I'll take a regular, thanks.",drink:"Regular"},{id:3,name:"Jack Venti",order:"Large cup of joe for me.",drink:"Regular"},{id:4,name:"Antonio Espresso",order:"Surprise me.",drink:"Regular"},{id:5,name:"Billy Bean",order:"What's good here?",drink:"Regular"},{id:6,name:"Negative Nancy",order:"I'd like a Mocha, please",drink:"Mocha"}],c={name:"ClockIn",data:function(){return{customers:i,serveFail:!1,servePass:!1,serveEmpty:!1,showNextButton:!1}},computed:{currentCustomer:function(){return this.$store.state.currentCustomer},clockedInDate:function(){return this.$store.state.clockedInDate},clockedInTime:function(){return this.$store.state.clockedInTime}},methods:{clockedIn:function(){this.$store.commit("clockedInDate",this.printDate()),this.$store.commit("clockedInTime",this.printTime()),this.$store.commit("clockedIn")},customerRandom:function(){this.serveFail="",this.servePass="",this.serveEmpty="";var e=r(0,i.length);this.$store.commit("currentCustomer",i[e])},serveDrink:function(){console.log(this.$store.state.currentDrink),this.$store.state.currentDrink===this.$store.state.currentCustomer.drink?(this.$store.commit("levelUp"),this.$store.commit("currentDrink",""),this.servePass=!0,this.serveEmpty="",this.showNextButton="true"):""===this.$store.state.currentDrink?this.serveEmpty=!0:(console.log("nah"),this.serveFail=!0)},customerNext:function(){this.customerRandom(),this.showNextButton=!1},printDate:function(){return(new Date).toLocaleDateString()},printTime:function(){return(new Date).toLocaleTimeString()}}},a=c,l=(s("38b9"),s("2877")),u=s("6544"),f=s.n(u),d=s("ce7e"),v=s("132d"),m=Object(l["a"])(a,n,o,!1,null,"115a667c",null);t["default"]=m.exports;f()(m,{VDivider:d["a"],VIcon:v["a"]})},7019:function(e,t,s){e.exports=s.p+"img/coffee-cup.6f5ebac7.png"},"74b0":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"brew"},[s("h1",{staticClass:"viewTitle"},[e._v("Brew")]),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.showBrewTypes,expression:"!showBrewTypes"}]},[s("div",{staticClass:"descriptiveText"},[e.makeCoffee?s("p",[e._v("Wanna make some coffee?")]):s("p",[e._v("Nah? That's cool, I guess...")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.showBrewTypes,expression:"!showBrewTypes"}],staticClass:"selection"},[s("button",{staticClass:"uiButtons",on:{click:function(t){e.showBrewTypes=!0}}},[e._v("Yes")]),s("button",{staticClass:"uiButtons",on:{click:function(t){e.makeCoffee=!e.makeCoffee}}},[e._v("No")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showBrewTypes&&!e.brewCoffee,expression:"showBrewTypes && !brewCoffee"}]},[s("div",{staticClass:"descriptiveText"},[e.skillLock?s("p",[e._v(" You haven't the skillz to make a "+e._s(e.selectedCoffee)+" yet!"),s("br"),e._v(" Learn how to brew better, bro. ")]):s("p",[e._v("What kind of coffee shall we make?")])]),e._l(e.coffees,(function(t){return s("div",{key:t.id,staticClass:"verticalButtons"},[s("button",{class:{locked:t.reqLevel>e.level},on:{click:function(s){return e.setSelectedCoffee(t.name,t.reqLevel)}}},[e._v(" "+e._s(t.name)+" ")])])}))],2),e.brewCoffee?s("div",[s("BrewTimers",{attrs:{selectedCoffee:e.selectedCoffee},on:{resetIt:function(t){e.brewCoffee=t}}})],1):e._e()])},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"brew"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.showDrinkCoffee,expression:"!showDrinkCoffee"}]},[n("div",{staticClass:"descriptiveText"},[e.brewDone?n("p",[e._v("DONE BREWING")]):n("p",[e._v(" Brewing . . ."),n("Countdown",{attrs:{countAmount:5},on:{isTimerDone:e.isBrewDone}})],1),n("img",{attrs:{src:s("4ce0"),width:"30%",height:"30%"}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.brewDone,expression:"brewDone"}],staticClass:"selection"},[n("button",{staticClass:"uiButtons",on:{click:function(t){e.showDrinkCoffee=!0}}},[e._v(" Pour coffee! ")])])]),e.showDrinkCoffee?n("div",[n("div",{staticClass:"descriptiveText"},[e.showDrankCoffee?n("p",[e._v(" Congratulations! You are a level "+e._s(e.level)+" Barista! ")]):e._e(),e.drinkDone?n("p",[e._v("DONE POURING")]):n("p",[e._v(" Pouring . . ."),n("Countdown",{attrs:{countAmount:3},on:{isTimerDone:e.isDrinkDone}})],1),n("img",{attrs:{src:s("7019"),width:"15%",height:"15%"}})])]):e._e()])},i=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[e._v(" "+e._s(e.count)+" ")])},a=[],l=(s("a9e3"),{name:"Countdown",props:{countAmount:{type:Number,default:0}},data:function(){return{count:this.countAmount,timer:null}},mounted:function(){this.startTimer()},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){return e.count>1?e.count-=1:e.clearTimer()}),1e3)},clearTimer:function(){clearInterval(this.timer),this.$emit("isTimerDone",!0)}}}),u=l,f=s("2877"),d=Object(f["a"])(u,c,a,!1,null,"0843f746",null),v=d.exports,m={name:"BrewTimers",components:{Countdown:v},props:{selectedCoffee:{type:String,default:""}},data:function(){return{showDrinkCoffee:!1,showDrankCoffee:!1,brewDone:!1,drinkDone:!1}},computed:{level:function(){return this.$store.state.currentLevel}},methods:{isBrewDone:function(e){this.brewDone=e},isDrinkDone:function(e){this.drinkDone=e,this.$store.commit("currentDrink",this.selectedCoffee),console.log(this.$store.state.currentDrink)},levelUp:function(){this.showDrankCoffee=!0,this.$store.commit("levelUp"),console.log(this.$store.state.currentLevel)},resetIt:function(){this.$emit("resetIt",!1)}}},h=m,w=Object(f["a"])(h,r,i,!1,null,"2aa36666",null),p=w.exports,k=[{id:1,name:"Regular",reqLevel:1},{id:2,name:"Mocha",reqLevel:2},{id:3,name:"Espresso",reqLevel:5},{id:4,name:"Latte",reqLevel:10}],C={name:"Brew",components:{BrewTimers:p},data:function(){return{coffees:k,selectedCoffee:"",skillLock:!1,makeCoffee:!0,showBrewTypes:!1,brewCoffee:!1}},methods:{setSelectedCoffee:function(e,t){this.selectedCoffee=e,t>this.currentLevel?(this.skillLock=!0,this.brewCoffee=!1):(this.skillLock=!1,this.brewCoffee=!0)}},computed:{level:function(){return this.$store.state.currentLevel}},watch:{currentLevel:function(e){this.$emit("levelUp",e)}}},_=C,b=Object(f["a"])(_,n,o,!1,null,"5bcdb145",null);t["default"]=b.exports},cf0d:function(e,t,s){}}]);
//# sourceMappingURL=about.378c4b4e.js.map