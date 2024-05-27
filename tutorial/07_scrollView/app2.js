const section = document.querySelector('section')

window.addEventListener('scroll', function() {
    // section.style.clickPath = circle(0 at center center)
    const value = window.scrollY  
    section.style.clipPath = `circle(${value}px at center center)`
})