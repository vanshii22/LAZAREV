
function handleScroll() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) { 
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
}


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
window.addEventListener('scroll', handleScroll);
// navAnimation()

 function section2Animation(){
    let rightelems=document.querySelectorAll('.right-elem');
rightelems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
             x:dets.x-elem.getBoundingClientRect().x-50,
             y:dets.y-elem.getBoundingClientRect().y-150

        })
    })
})

 }
 section2Animation();

function VideoAnimation() {
    var videoCenter = document.querySelector(".video-center ")
    var video = document.querySelector("#video-sec video")

    videoCenter.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })

}
VideoAnimation()

var sections = document.querySelectorAll(".afro-right")

sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})

function designAnimations() {
    gsap.from("#design-bottom-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#design-bottom-part2",
            scroller: "#main",
            markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from("#design-bottom-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#design-bottom-part3",
            scroller: "#main",
            markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from("#design-bottom-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#design-bottom-part4",
            scroller: "#main",
            markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}



designAnimations()

// loadingAnimation()