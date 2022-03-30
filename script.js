let kmi = document.getElementById('kmi')
let kmf = document.getElementById('kmf')
let qtdLiters = document.getElementById('qLiters')
let priceKm = document.getElementById('pKm')
let priceFuel = document.getElementById('vFuel')
let txtConsumptionMedia = document.getElementById('consumptionMedia')
let txtPriceKm = document.getElementById('priceKm')

// funcção principal, chama outras funções
function calculate() {
    calculateMediaConsumption()
    calculatePriceKm()
}
// função calcula media de consumo
function calculateMediaConsumption() {
    let consumptionMedia = (Number(kmf.value) - Number(kmi.value)) / Number(qtdLiters.value)
    txtConsumptionMedia.innerHTML = `O consumo médio é de ${consumptionMedia} km/l.`
    return consumptionMedia.toFixed(2)
}
// função calcula preço por km rodado
function calculatePriceKm(){
    let kmr = Number(kmf.value) - Number(kmi.value)
    let vTotalStocked = Number(qtdLiters.value) * Number(priceFuel.value)
    let priceKmr = vTotalStocked / kmr 
    txtPriceKm.innerHTML = `O preço por km rodado é de r$ ${priceKmr}`
    return priceKm.toFixed(2)
}
