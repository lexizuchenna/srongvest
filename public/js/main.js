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