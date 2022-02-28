<template>
  <transition name="fadeIn" appear>
    <div class="main">


      <div class="top-50">

        <div class="customer">
          Customer Avatar
        </div>
        
        <div class="counter">
         Counter
        </div>

      </div>


      <div class="bot-50">
        

        <div class="msgArea">
         Message Area
        </div>

        <div class="screen">
         Screen
        </div>

      </div>
    
    </div>
  </transition>
</template>

<script>


export default {
  name: "Wireframe",
};
</script>

<style scoped>

.main { 
 background-color: blue;
 display: flex;
 flex-direction: column;
 height: 100%;
}

.top-50 {
 background-color: red;
 height: 30%;
 display: flex;
 flex-direction: column;
 justify-content: center;
}

.bot-50 {
 background-color: yellow;
 height: 70%;
 display: flex;
 flex-direction: column;
}


.customer {
  flex-grow: .75;
  height: 100px;
}


.counter {
 background-color: brown;
 height: 100%;
 flex-grow: 1;
}


.msgArea {
 height: 10%;
 background-color: green;
}


.screen {
 background-color: white;
 width: 65%;
 margin-left: auto;
 margin-right: auto;
 flex-grow: 1;
}

</style>
