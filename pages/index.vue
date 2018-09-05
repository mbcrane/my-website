<template>
  <section id = "aboutHeader" class="container">
    
<!-- Navbar -->
   <div class = 'navbar'>
        <navbar/>     
      
   </div> 
      
   <!-- Headline/Pic -->
      
    <div class = "headline">
     <div class = "pic" v-b-tooltip.hover title="Hi!">
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
   <div class = "projects" id = "projectHeader">
       
       
       <div class = "project_item">
            <img src="~/static/cartograms.jpg" alt = "Cartograms 4 All"> 
       </div>
       
       <div class = "project_desc">
              <b-button class = "button" variant="primary" href="http://cartogram4all.herokuapp.com/app/index.html#DIVISION">
          Cartograms 4 All</b-button>
          <p class = "description">Test ttest test</p> 
       </div>
           
           
    
       
       <div class = "project_item">
           <img src="~/static/osha.jpg" alt = "OSHA Visualization"> 
       </div>
       
       <div class = "project_desc">
           <b-button class = "button" variant="primary" href="https://mbcrane.github.io/WorkplaceDeaths/ ">
          OSHA Visualization</b-button>
           <p class = "description">Test ttest test</p> 
       </div>
       
       <div class = "project_item">
           <img src="~/static/oregon.jpg" alt = "Oregon Population Density"> 
       </div>
       
        <div class = "project_desc">
           <b-button class = "button" variant="primary" href="https://mbcrane.github.io/OregonMapping-/">
           Population Density</b-button> 
            <p class = "description">Test ttest test</p> 
       </div>
       
       
    
   </div>
      
    <!-- Contact -->
   <div class = "contact">
       <h1 id = "contact_header"> Let's Connect!</h1>
       <div class = "contact_item">
          
          <b-button class = "contact_button" variant="primary" href="https://www.linkedin.com/in/mbcrane/"
                    style="margin-right:25px; margin-left:40px; float: left" >LinkedIn</b-button>
            <b-button class = "contact_button" variant="primary" href="mailto:michael.crane96@gmail.com" style="float: left;">e-Mail</b-button>
          
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
 /*   display: relative; */
  /*  background-color: lightblue; */    
   height: 1000px;
   width: 100%;
   margin: 20px;     
   display: flex; 
   align-items: center;
   justify-content: center;
   flex-flow: row wrap;
   align-content: center;
   padding-top: 100px;
   
}
    

.project_item, .project_desc{
    height: 100px;
    width: 50%;
    height: 33%;
    flex-basis: 45%;
    margin: 10px;
    background-color: lightblue;
    padding: 10px;
    padding-top: 30px;
}
    

    
.project_item img {
    
    flex-shrink: 0;
    max-width:100%;
    max-height:100%;
    
}
    
    
.button{
   margin: auto;
   margin-top: 15%;
   align-self: center; 
}
    
.description{
    margin-top: 10%;
    align-self: center;
}
    
/* Contact Styling */

.contact{
   padding-top: 75px;
   padding-bottom: 75px;
   display: flex; 
   align-items: left;
   justify-content: left;
   flex-flow: column;
   align-content: left;
   width: 100%;
   height: 400px;
}
    
#contact_header{
    color: black;
    margin: 10px;
    padding-left: 30px;
   /* text-shadow: 3px 2px white; */
    height: 50px;
    text-align: left;
        
}

.contact_item{
    width: 100%;
    height: 30%;
    padding-top: 25px;
    
   
}

.contact_button{
    align-self: center;
}
    
</style>

