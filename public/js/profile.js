const amount = document.getElementById('amount')
const activePlan = document.getElementById('activePlan')


activePlan.addEventListener('change', () => {
    if(activePlan.value == 'Select Plan') {
        amount.setAttribute('value', 'Select Plan')
    }
    if(activePlan.value == 'Promo') {
        amount.setAttribute('value', 10000)
    }
    if(activePlan.value == 'Gold') {
        amount.setAttribute('value', 20000)
    }
    if(activePlan.value == 'Silver') {
        amount.setAttribute('value', 30000)
    }
    if(activePlan.value == 'Bronze') {
        amount.setAttribute('value', 40000)
    }
})