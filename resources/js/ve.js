/***********************************************************************
*
* Site Visual Vannila JS effects
*
************************************************************************/


window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    //nav bar change color on scroll function
    var elem = document.querySelector(".header");
   
    if(elem !== null){
    if (
      document.body.scrollTop >= 30 ||
      document.documentElement.scrollTop >= 30
    ) {
      elem.style.backgroundColor = "black";
      elem.style.top = "0px";
    } else {
      elem.style.top = "32px";
      elem.style.backgroundColor = "transparent";
    }
  // Animate second section cards
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 10) {
        document.getElementById("first_card").className = "second__card animate";
        document.getElementById("second_card").className = "second__card animate2";
        document.getElementById("third_card").className = "second__card animate3";
    } 
     

       // Animate third section elements
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 800) {
        document.getElementById("third_one").className = "third__info-text animate";
        document.getElementById("third_two").className = "third__info-picture animate-right";
    } 

    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("third_third").className = "third__info-picture2 animate";
        document.getElementById("third_fourth").className = "third__info-text2 animate-right";
    } 
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.getElementById("third_fivth").className = "third__info-text animate";
        document.getElementById("third_sixth").className = "third__info-picture3 animate-right";
    } 

  }

}