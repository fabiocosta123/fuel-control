let kmi = document.getElementById('kmi')
let kmf = document.getElementById('kmf')
let qtdLiters = document.getElementById('qLiters')
let priceKm = document.getElementById('pKm')
let priceFuel = document.getElementById('vFuel')
let txtConsumptionMedia = document.getElementById('consumptionMedia')
let txtPriceKm = document.getElementById('priceKm')
const listCars = [
{
     name: "Honda fit", consumption: 13 
}, 
{
    name: "Toyota Corolla", consumption: 8
}, 
{
    name:"Gol", consumption: 12
},
{
    name:"Focus", consumption: 7
}]



// função principal, chama outras funções
function calculate() {
    calculateMediaConsumption()
    calculatePriceKm()
    modelsCars()
}
// função calcula media de consumo
function calculateMediaConsumption() {
    let consumptionMedia = (Number(kmf.value) - Number(kmi.value)) / Number(qtdLiters.value)
    txtConsumptionMedia.innerHTML = `O consumo médio é de ${consumptionMedia.toFixed(2)} km/l.`
    return consumptionMedia
}
// função calcula preço por km rodado
function calculatePriceKm() {
    let kmr = Number(kmf.value) - Number(kmi.value)
    let vTotalStocked = Number(qtdLiters.value) * Number(priceKm.value)
    let priceKmr = vTotalStocked / kmr
    txtPriceKm.innerHTML = `O preço por km rodado é de r$ ${priceKmr.toFixed(2)}`
    return priceKmr
}
// escolhe modelo do carro
function modelsCars() {
    let select = document.getElementById('Cars')
    let value = select.options[select.selectedIndex].value
    
    if (select.value == listCars.name || consumptionMedia == listCars.consumption) {
        console.log('O consumo está dentro do esperado')
        // comparar media de consumo
    } else if (select.value == listCars.name || consumptionMedia > listCars.consumption) {
        console.log('O consumo está acima da media do fabricante')
    } else if (select.value == listCars.name || consumptionMedia < listCars.consumption) {
        console.log('O consumo está abaixo do fabricante')
    }
    
}




