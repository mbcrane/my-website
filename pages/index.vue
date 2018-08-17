<template>
  <section class="container">
    
   <div class = 'navbar'>
        <navbar/>
   </div> 
      
   <div class = "pic">
    
    </div>
      <ProfilePic/>
    <div>
      
      <h1 class="title">
        Michael Crane
      </h1>
      <h2 class="subtitle">
        Computer Science 
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/mbcrane"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>



<script>
import ProfilePic from '~/components/ProfilePic.vue'
import navbar from '~/components/navbar.vue'

export default {
  components: {
   ProfilePic,
   navbar
  }
}
</script>

<style>
    

    
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
    
.pic{
   height:auto;
   width: auto;
}

.navbar{
   display: flex;
   justify-content: center;
   align-items: baseline;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
}
    
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

