
document.addEventListener('DOMContentLoaded', ()=>{
    
    if(this.scrollY > 10){
        $('.navbar').addClass("sticky");
    }else{
        
        $('.navbar').removeClass("sticky");
    }

})

    
    //     // sticky navbar on scroll script
    //     if(this.scrollY > 10){
    //         $('.navbar').addClass("sticky");
    //     }else{
    //         $('.navbar').removeClass("sticky");
    //     }
        
    //     // scroll-up button show/hide script
    //     if(this.scrollY > 500){
    //         $('.scroll-up-btn').addClass("show");
    //     }else{
    //         $('.scroll-up-btn').removeClass("show");
    //     }
   
    // //Redundant js doesnt work
