var nav=document.getElementById(navv);
window.onscroll=function()
{
    if(window.pageYOffset >100){
        nav.style.background='#45B1E8';
    }
    else{
        nav.style.background= "transparent"; 
    }
};

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })});