var header = document.querySelector("header");
var men = document.querySelector(".men");
var women = document.querySelector(".women");
var sales = document.querySelector(".sales");
var collections = document.querySelector(".collections");
var navContent = document.querySelectorAll(".navContent")
var navMen = document.querySelector(".navMen");
var navWomen = document.querySelector(".navWomen");
var navSales = document.querySelector(".navSales");
var navCollections = document.querySelector(".navCollections");
var header = document.querySelector("header");
var alll = document.querySelectorAll(".alll");
var outerArea = document.querySelector(".outerArea");
var imgfirstCon = document.querySelectorAll(".imgfirstCon");
var hamburger = document.querySelector(".hamburger");
var nav =  document.querySelector(".navUl");
var naved = false;
var check = 0;
var navAppearStatus= false;


var acc = document.getElementsByClassName("accordion");

var i;

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("fa-times");
    hamburger.classList.toggle("fa-bars");
    nav.classList.toggle("dBlock");
       header.classList.toggle("headerbgw");

       alll.forEach(function(elem){
        elem.style.transition = "all 0.5s"
        elem.classList.toggle("bav");            
    });

       window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 750px)").matches) {
            
            alll.forEach(function(elem){
                elem.style.transition = "all 0.5s"
                elem.classList.add("bav");            
            });
            this.console.log("yeeaa");
        }
    
    });
    
    
});
if(window.screen.width<=750){
       
       
} else {
     
     nav.classList.toggle("dBlock")
}


// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
    
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }




// imgfirstCon.forEach(function(element){
//     element.style.backgroundColor = "red";
//     element.style.width = "20vw";
//     element.style.height = element.style.width ;

// })



outerArea.addEventListener("click", function(){
    navContent.forEach(function(elem){
        elem.style.transition = "linear 0.5s";
        elem.classList.remove("navAppear");
       
        alll.forEach(function(elemt){
            
                elemt.style.transition = "all 0.5s"
                elemt.classList.remove("navClicked");
                elemt.classList.remove("nav");
        
        });
    });
    outerArea.style.display = "none";
    });


        
    



men.addEventListener("click", function(){

    navContent.forEach(function(elem){
    
        
        if(elem!==navMen){
            elem.style.transition = "none";
            elem.classList.remove("navAppear");
            alll.forEach(function(elemt){
                if(elemt!==men){
                    elemt.style.transition = "all 0.5s"
                    elemt.classList.remove("navClicked");
            }
            // if(elem.classList.contains("navAppear")){
            //     elemt.style.transition = "all 0.5s"
            //     elemt.classList.remove("nav");
            //     }
            
            
            });
            
        }
    
}); 
            
if(navMen.classList.contains("navAppear")){
        navMen.classList.remove("navAppear");
        men.classList.remove("navClicked");
        navContent.forEach(function(elem){
            elem.style.transition = "linear 0.5s";
            
        });
        alll.forEach(function(elem){
            elem.style.transition = "all 0.5s"
            elem.classList.remove("nav");            
        });
        
        

    } else {
        
        outerArea.style.display = "block";
        navMen.classList.add("navAppear");
        men.classList.add("navClicked");
        alll.forEach(function(elem){
            if(elem!==men){
                elem.style.transition = "all 0.5s"
                elem.classList.add("nav");
            }
            });



    }
        
    });
            

women.addEventListener("click", function(){
    navContent.forEach(function(elem){
        
        if(elem!==navWomen){
            elem.style.transition = "none";
            elem.classList.remove("navAppear");
            alll.forEach(function(elemt){
                if(elemt!==women){
                    elemt.style.transition = "all 0.5s"
                    elemt.classList.remove("navClicked");
                }
               
    });  
}
    });
    
    if(navWomen.classList.contains("navAppear")){
        navWomen.classList.remove("navAppear");
        women.classList.remove("navClicked");
        alll.forEach(function(elem){
            elem.style.transition = "all 0.5s"
            elem.classList.remove("nav");
    });
    navContent.forEach(function(elem){
        elem.style.transition = "linear 0.5s";
        
    });

    } else {
        outerArea.style.display = "block";
        navWomen.classList.add("navAppear");
        women.classList.add("navClicked");
        alll.forEach(function(elem){
                // if(elem!==women){
                    elem.style.transition = "all 0.5s"
                    elem.classList.add("nav");
                });
        
    }
            
    
   });


sales.addEventListener("click", function(){
    
    navContent.forEach(function(elem){
        
        if(elem!==navSales){
            elem.style.transition = "none";
            elem.classList.remove("navAppear");
            alll.forEach(function(elemt){
                if(elemt!==sales){
                    elemt.style.transition = "all 0.5s"
                    elemt.classList.remove("navClicked");
                }
                if(elem.classList.contains("navAppear")){
                elemt.style.transition = "all 0.5s"
                elemt.classList.remove("nav");
                }
            });

        }
    });
    if(navSales.classList.contains("navAppear")){
        navSales.classList.remove("navAppear");
            sales.classList.remove("navClicked");
            navContent.forEach(function(elem){
                elem.style.transition = "linear 0.5s";
                
            });
            alll.forEach(function(elem){
                
                    elem.style.transition = "all 0.5s"
                    elem.classList.remove("nav");
            
        });
    } else {
        outerArea.style.display = "block";
        navSales.classList.add("navAppear");
            sales.classList.add("navClicked");
            alll.forEach(function(elem){
                if(elem!==sales){
                    elem.style.transition = "all 0.5s"
                    elem.classList.add("nav");
                }  
        });
    }
    
   });

collections.addEventListener("click", function(){
    
    
    navContent.forEach(function(elem){
        
        if (elem!==navCollections) {
            elem.style.transition = "none";
            elem.classList.remove("navAppear");
            alll.forEach(function(elemt){
                if(elemt!==collections){
                    elemt.style.transition = "all 0.5s"
                    elemt.classList.remove("navClicked");
                }
                if(elem.classList.contains("navAppear")){
                elemt.style.transition = "all 0.5s"
                elemt.classList.remove("nav");
                }
            });
            
        }
        
    });
    if(navCollections.classList.contains("navAppear")){
        navCollections.classList.remove("navAppear");
        collections.classList.remove("navClicked");
        navContent.forEach(function(elem){
            elem.style.transition = "linear 0.5s";
            
        });
            alll.forEach(function(elem){
                    elem.style.transition = "all 0.5s"
                    elem.classList.remove("nav");
                
                
            });
        } else {
        outerArea.style.display = "block";
            navCollections.classList.add("navAppear");
            collections.classList.add("navClicked");
            alll.forEach(function(elem){
                if(elem!==collections){
                    elem.style.transition = "all 0.5s"
                    elem.classList.add("nav");
                }
            });
        }
   
    });



