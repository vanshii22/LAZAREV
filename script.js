function navAnimation(){
    var nav=document.querySelector("nav");
nav.addEventListener("mouseenter",function(){
    let tl=gsap.timeline();
    tl.to("#nav-bottom",{
        height:"21vh"
    })
    tl.to(".nav-items h5",{
        display:"block"
    })
    tl.from(".nav-items h5 span",{
        y:20,
        stagger:{
            amount:0.6
        }
    })
})
nav.addEventListener("mouseleave",function(){
    let tl=gsap.timeline();
    tl.to(".nav-items h5 span",{
        y:0,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-items h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#nav-bottom",{
        height:"0vh",
        duration:0.2
    })
})
}
navAnimation()