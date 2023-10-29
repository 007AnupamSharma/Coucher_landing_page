var tl = gsap.timeline()


tl.from("#nav",{
    opacity:0,
    delay:0.5,
})
tl.from("#nav h1, #nav-part2 h2, #nav h4",{
    y:-80,
    duration:0.8,
    opacity:0,
    stagger:0.5
})
tl.from("#left h1",{
    x:-50,
    duration:0.3,
    opacity:0,
    stagger:0.3
})

tl.from("#right img",{
    scale:0.5,
    opacity:0,
    duration:0.3
})

tl.from("#page1 h5",{
    y:50,
    duration:1,
    delay:0.5,
    opacity:0
})
tl.to("#page1 h5",{
    y:30,
    duration:1,
    repeat:-1,
    yoyo:true
})

gsap.from("#page2 #box",{
    scale:0,
    opacity:0,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        scrub:2,
        start:"top 90%",
        end:"top 70%"
    }
})

