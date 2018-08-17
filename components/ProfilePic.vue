<template>
   <div class="ProfilePicture">
      <img src="~/static/profilepic.png" alt="Michael Crane" style="width:212px;height:268px;">
   </div>
</template>

<style>
.ProfilePicture {
  display: inline-block;
  animation: fade;
  animation-duration: 2s;
  position: relative;
  overflow: hidden;
  height: 275px;
  width: 250px;
}

@keyframes fade {
  100% {opacity: 1;}
  90% {opacity: 0.9;}
  80% {opacity: 0.8;}
  70% {opacity: 0.7;}
  60% {opacity: 0.6;}
  50% {opacity: 0.5;}
  40% {opacity: 0.4;}
  30% {opacity: 0.3;}
  20% {opacity: 0.2;}
  10% {opacity: 0.11;}
  0% {opacity: 0;}
}


</style>