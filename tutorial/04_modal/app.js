const showBtn = document.querySelector('.btn_show')
const closeBtn = document.querySelector('.btn_close')
const dim = document.querySelector('.dim')
const modal = document.querySelector('.modal')

showBtn.addEventListener('click', () => {
    dim.classList.add('show')
    modal.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    dim.classList.remove('show')
    modal.classList.remove('show')
})
dim.addEventListener('click', () => {
    dim.classList.remove('show')
    modal.classList.remove('show')
})