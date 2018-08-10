<template>
   <div class="ProfilePicture">
      <img src="~/static/profilepic.png" alt="Michael Crane" style="width:212px;height:268px;">
   </div>
</template>

<style>
.ProfilePicture {
  display: inline-block;
  animation: fade;
  animation-duration: 3s;
  position: relative;
  overflow: hidden;
  height: 275px;
  width: 250px;
}

@keyframes fade {
  100% {opacity: 1;}
  75% {opacity: 0.6;}
  50% {opacity: 0.4;}
  25% {opacity: 0.2;}
  0% {opacity: 0;}
}


</style>