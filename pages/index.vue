<template>
  <section id = "aboutHeader">
    
<!-- Navbar -->
   <div class = 'navbar'>
        <navbar/>     
      
   </div> 
      
    <div class="container">
      
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
      
      
    <!-- Projects -->
   <div class = "projects" id = "projectHeader">
       
       
       <div class = "project_item">
            <img src="~/static/cartograms.jpg" alt = "JavaScript Data Visualization Cartograms 4 All"> 
       </div>
       
       <div class = "project_desc">
              <b-button class = "button" variant="primary" href="http://cartogram4all.herokuapp.com/app/index.html#DIVISION">
          Cartograms 4 All</b-button>
          <p class = "description">An interative data visualization that presents data from the Occupational Safety and Health Administration. It allows users to intuitively interact with unfamiliar data through an informative and insightful story. It was built using JavaScript, HTML, and CSS, making use of the d3 JavaScript library.
</p> 
       </div>
           
           
    
       
       <div class = "project_item">
           <img src="~/static/osha.jpg" alt = "JavaScript Data Visualization OSHA"> 
       </div>
       
       <div class = "project_desc">
           <b-button class = "button" variant="primary" href="https://mbcrane.github.io/WorkplaceDeaths/ ">
          OSHA Visualization</b-button>
           <p class = "description">A web application built for users to upload custom data sets and visualize and share them through cartograms. It provides users with a platform to discover new insights from census data in a unique and informative way. It was created with a group of five individuals for a software development class using agile developlment methodologies.</p> 
       </div>
       
       <div class = "project_item">
           <img src="~/static/oregon.jpg" alt = "d3 Geomapping of Oregon Population Density"> 
       </div>
       
        <div class = "project_desc">
           <b-button class = "button" variant="primary" href="https://mbcrane.github.io/OregonMapping-/">
           Population Density</b-button> 
            <p class = "description">A geomap visualizing the population density of Oregon. It provides viewers with compelling insights into the layout and development of the state.  It makes use of topoJSON and the d3 library to project census data onto a map of Oregon.</p> 
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
   position: fixed;
    margin: .page-head;
   transform: translateZ(0);
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
    padding: 10px;
    padding-top: 30px;
}
    
.project_item{
    background-color: lightblue;
}
    
.project_item img {   
    flex-shrink: 0;
    max-width:100%;
    max-height:100%;
    
}
    
    
.button{
   margin: auto;
   margin-top: 5%;
   align-self: center; 
}
    
.description{
    margin-top: 10%;
    align-self: center;
    letter-spacing: -1px;
  line-height: 1.7;
  font-size: 1rem;
  font-weight: 500;
    
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

