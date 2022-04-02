/*Pneu media de 50 mil
oleo troca 10.000
filtro combustivel
pastilha de freio 35 mil
amortecedores 40 mil km */
let tires = 50000
let oils = 10000
let filter = document.getElementById('filter')
let oil = document.getElementById('oil')
let kmi = document.getElementById('kmi')
let kmf = document.getElementById('kmf')
let qtdLiters = document.getElementById('qLiters')
let priceKm = document.getElementById('pKm')
let priceFuel = document.getElementById('vFuel')
let txtConsumptionMedia = document.getElementById('consumptionMedia')
let txtPriceKm = document.getElementById('priceKm')
let txtMedia = document.getElementById('txtMedia')
const listCars = [
    {
        name: "Honda fit", consumption: 13
    },
    {
        name: "Toyota Corolla", consumption: 8
    },
    {
        name: "Gol", consumption: 12
    },
    {
        name: "Focus", consumption: 7
    }]


// função principal, chama outras funções
function calculate() {
    calculateMediaConsumption()
    calculatePriceKm()
    modelsCars()
    depreciation()
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
//calcula depreciação
function depreciation(){
    let priceOil = 3.5 * Number(oil.value)
    let depreciation = 
    
    return priceOil
}
// escolhe modelo do carro
function modelsCars() {
    let select = document.getElementById('Cars')
    let value = select.options[select.selectedIndex].value
    let consumptionMedia = (Number(kmf.value) - Number(kmi.value)) / Number(qtdLiters.value)

    listCars.forEach((val) => {
        if (val.name == value) {
            if (consumptionMedia > val.consumption) {
                txtMedia.innerHTML = `A media do seu carro é de 
                    ${consumptionMedia.toFixed(2)} km/l e a média do fabricante é de ${val.consumption}
                    km/l seu carro está acima da média.`
            } 
            else if (consumptionMedia < val.consumption) {
                txtMedia.innerHTML = `A media do seu carro é de ${consumptionMedia.toFixed(2)} km/l, 
                e a media do fabricante é de ${val.consumption} km/l, seu carro está abaixo da media.`
            } 
            else if (consumptionMedia == val.consumption) {
                txtMedia.innerHTML = `A media do seu carro é de ${consumptionMedia.toFixed(2)}
                km/l, igual a media do fabricante, a media está dentro do esperado.`
            }

        }
    })

}





