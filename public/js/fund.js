const amount = document.getElementById('amount')
const activePlan = document.getElementById('activePlan')

if(activePlan.value === 'Promo') {
    amount.value = 10000
}
if(activePlan.value === 'Gold') {
    amount.value = 20000
}
if(activePlan.value === 'Silver') {
    amount.value = 30000
}
if(activePlan.value === 'Bronze') {
    amount.value = 40000
}