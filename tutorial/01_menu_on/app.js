const gnb = document.querySelectorAll(`.gnb li`)
const url = location.href


// console.log(url.indexOf(`main`)); 


function menuOn(i) {
    gnb.forEach(item => item.classList.remove('on'))
    gnb[i].classList.add('on')
}

if(url.indexOf(`main`) > 0) {
    menuOn(0)
} else if(url.indexOf(`intro`) > 0) {
    menuOn(1)
} else if(url.indexOf(`service`) > 0) {
    menuOn(2)
} else if(url.indexOf(`blog`) > 0) {
    menuOn(3)
}