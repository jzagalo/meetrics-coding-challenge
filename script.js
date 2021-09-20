/************************************************************************************************
 *                                                                                              *
 *                              VARIABLES DECLARATION                                           *
 *                                                                                              *
 ************************************************************************************************/
var adIsViewable = true,
  viewabilityTime = 0,
  adElement = document.getElementById("ad");

/**
 * Logs the viewability values in the console
 *
 * @override
 */



/************************************************************************************************
 *                                                                                              *
 *                              YOUR IMPLEMENTATION                                             *
 *                                                                                              *
 ************************************************************************************************/

window.onload = function(event){
  var startTime = new Date().getTime(),
      that = this 
  this.document.addEventListener( 'visibilitychange' , function() {
    if (that.document.hidden) {      
      adIsViewable = false      
      viewabilityTime = (new Date().getTime() - startTime)/1000
      startTime = new Date().getTime()      
    } else {
      adIsViewable = true
      isTabVisible = true
      startTime = new Date().getTime()     
    }
  }, false );

  this.addEventListener('scroll', function(event) {    
    if((that.innerHeight + that.scrollY) >= that.document.body.offsetHeight){     
      adIsViewable = false
      viewabilityTime = (new Date().getTime()- startTime)/1000
      startTime = new Date().getTime()
    }else{
      adIsViewable = true
      viewabilityTime = (new Date().getTime()- startTime)/1000
      startTime = new Date().getTime()
    }
  }); 

 }
  


window.log = function () {
  console.log("Ad is viewable: ", adIsViewable, "\nViewability time of the ad in sec:", viewabilityTime);
};
