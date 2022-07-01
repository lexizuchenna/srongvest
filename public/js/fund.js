const amount = document.getElementById('amount')
const activePlan = document.getElementById('activePlan')

if(activePlan.value === 'promo') {
    amount.value = 10000
}
if(activePlan.value === 'gold') {
    amount.value = 20000
}
if(activePlan.value === 'silver') {
    amount.value = 30000
}
if(activePlan.value === 'bronze') {
    amount.value = 40000
}