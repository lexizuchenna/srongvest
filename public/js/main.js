const close = document.getElementById('close')
const open = document.getElementById('open')
const faqText = document.getElementById('faq-text')

open.style.display = 'none'
faqText.style.display = 'none'

close.addEventListener('click', () => {
    close.style.display = 'none'
    open.style.display = 'block'
    faqText.style.display = 'block'
    
})

open.addEventListener('click', () => {
    close.style.display = 'block'
    open.style.display = 'none'
    faqText.style.display = 'none'
})
const closeOne = document.getElementById('close1')
const openOne = document.getElementById('open1')
const faqTextOne = document.getElementById('faq-text1')

openOne.style.display = 'none'
faqTextOne.style.display = 'none'

closeOne.addEventListener('click', () => {
    closeOne.style.display = 'none'
    openOne.style.display = 'block'
    faqTextOne.style.display = 'block'
    
})

openOne.addEventListener('click', () => {
    closeOne.style.display = 'block'
    openOne.style.display = 'none'
    faqTextOne.style.display = 'none'
})

const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')
const mobile = document.getElementById('mobile')
const faqLink = document.getElementById('faq-link')
const aboutLink = document.getElementById('about-link')

// mobile.style.margin = '-300px'
openMenu.style.display = 'none'

closeMenu.addEventListener('click', ()=> {
    mobile.style.marginLeft = '0'
    closeMenu.style.display = 'none'
    openMenu.style.display = 'block'
})

openMenu.addEventListener('click', ()=> {
    mobile.style.marginLeft = '-300'
    closeMenu.style.display = 'block'
    openMenu.style.display = 'none'
})
faqLink.addEventListener('click', ()=> {
    mobile.style.marginLeft = '-300'
    closeMenu.style.display = 'block'
    openMenu.style.display = 'none'
})
aboutLink.addEventListener('click', ()=> {
    mobile.style.marginLeft = '-300'
    closeMenu.style.display = 'block'
    openMenu.style.display = 'none'
})