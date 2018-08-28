<template>
  <section id = "aboutHeader" class="container">
    
<!-- Navbar -->
   <div class = 'navbar'>
        <navbar/>     
      
   </div> 
      
   <!-- Headline/Pic -->
      
    <div class = "headline">
     <div class = "pic">
    <ProfilePic/>
       
    </div>
   <h1 class="title">
      I’m Michael Crane, a recent computer science graduate currently looking for experience as a
      <a class="github_link" target="_blank" href="https://github.com/mbcrane"> software developer</a>.
    </h1>
    </div>
      
      
      <!-- 
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
      --> 
      
      
      
    <!-- Projects -->
   <div class = "projects">
    
       <h1 id = "projectHeader"> Projects</h1>
    
   </div>
      
    <!-- Contact -->
   <div class = "contact">
    
       <h1 id = "contactHeader"> Contact</h1>
    
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 200px;
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
  

    
.pic{
   display: flex;
   align-self: flex-start;
   height:auto;
   width: auto;

}
    
.headline{
   display: flex;
   align-self: flex-start;
   height:auto;
   width: auto;
   margin: 20px;
}

/* headline style */
/*headline title*/
.title { 
 position: relative;
  max-width: 840px;
  margin-top: 0.5em;
  margin-bottom: 1.5em;
  letter-spacing: -1px;
  line-height: 1.7;
  font-size: 3rem;
  font-weight: 400;
}

.github_link {
  color: lightblue;
  transition: color 250ms ease;

  &:hover,
  &:focus,
  &:active {
    color: darkblue;
  }
}


/* Project Styling */
    
.projects{
    display: flex;
    background-color: lightblue;    
    height: 1000px;
    width: 150%;
    margin: 20px;
}
    
/* Contact Styling */

.contact{
    display: flex;
    background-color: lightblue;
    height: 200px;
    width: 150%;
    margin: 20px;
}
    
</style>

