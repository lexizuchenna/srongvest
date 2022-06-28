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