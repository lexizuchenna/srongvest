const address = document.getElementById('address')
const copy = document.getElementById('copy')


copy.addEventListener('click', () => {
    navigator.clipboard.writeText(address.value)
    copy.innerText = 'Copied'
})