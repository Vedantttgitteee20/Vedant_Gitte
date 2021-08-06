document.addEventListener('DOMContentLoaded', ()=>{
    const bar=document.querySelector('.navbar');
    
    window.onscroll = ()=>{
        if(this.scrollY > 600)
         bar.classList.add("sticky")
         else{
             bar.classList.remove("sticky");
         }
      }
      console.log("hi")
})
