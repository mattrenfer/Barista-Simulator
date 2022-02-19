<template>
    <div class="main">


      <div class="top-50">

        <div class="customer">
          Top 50
        </div>
        
        <div class="counter">
         Counter
        </div>

      </div>


      <div class="bot-50">
        Bot 50%
        <div class="screen">
        Screen
        </div>

      </div>
    
    </div>

</template>

<script>

import { version } from '../../package.json';

export default {
  name: "Settings",
  methods: {
    resetProgress() {
      localStorage.clear();
      location.reload();
    }
  },
  data() {
      return {
          versionNumber: version,
      }
  },
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
 justify-content: flex-end;
 
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




.screen {
 background-color: white;
  width: 65%;
 height: 450px;
 margin-left: auto;
 margin-right: auto;
}

</style>
