
// buybutt
const sellbutt=document.querySelector("#sellbutt");
const sellmenu=document.querySelector(".sell_menu");


function addactive()
{
    sellmenu.classList.add("active");
    
}

sellbutt.addEventListener("mouseover",()=>{
    
   
    sellmenu.classList.add('active');
});

sellbutt.addEventListener("mouseleave",()=>{
   

   
    sellmenu.classList.remove('active');
});

sellmenu.addEventListener("mouseover",()=>{
    
   
    sellmenu.classList.add('active');
});

sellmenu.addEventListener("mouseleave",()=>{
   

   
    sellmenu.classList.remove('active');
});










// sellbutt





const buybutt=document.querySelector("#buybutt");
const buymenu=document.querySelector(".buy_menu");


function addactive()
{
    buymenu.classList.add("active");
    
}

buybutt.addEventListener("mouseover",()=>{
    
   
    buymenu.classList.add('active');
});

buybutt.addEventListener("mouseleave",()=>{
   

   
    buymenu.classList.remove('active');
});

buymenu.addEventListener("mouseover",()=>{
    
   
    buymenu.classList.add('active');
});

buymenu.addEventListener("mouseleave",()=>{
   

   
    buymenu.classList.remove('active');
});










