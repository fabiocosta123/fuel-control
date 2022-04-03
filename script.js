/*Pneu media de 50 mil
oleo troca 10.000
filtro combustivel
pastilha de freio 35 mil
amortecedores 40 mil km */
let tires = 50000
let oils = 10000
let filter = document.getElementById('filter')
let oil = document.getElementById('oil')
let priceTire = document.getElementById('priceTire')
let kmi = document.getElementById('kmi')
let kmf = document.getElementById('kmf')
let qtdLiters = document.getElementById('qLiters')
let priceKm = document.getElementById('pKm')
let priceFuel = document.getElementById('vFuel')
let txtDepreciation = document.getElementById('depreciation')
let txtCustKm = document.getElementById('custKm')
let txtMedia = document.getElementById('txtMedia')


/*const depreciationTire = Number(priceTire.value) * 4 / tires
const depreciationOil = Number(oil.value) * 3.5 / oils
const depreciationFilter = Number(filter.value) / oils
const depreciationBreakPad = Number()

let kmr = Number(kmf.value) - Number(kmi.value)
let vTotalStocked = Number(qtdLiters.value) * Number(priceKm.value)
const priceKmr = vTotalStocked / kmr

const tdepreciation = depreciationTire + depreciationFilter + depreciationOil + priceKmr
*/


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


}
// função calcula media de consumo
function calculateMediaConsumption() {
    let consumptionMedia = (Number(kmf.value) - Number(kmi.value)) / Number(qtdLiters.value)
    return consumptionMedia
}
// função calcula preço por km rodado
function calculatePriceKm() {
    const depreciationTire = Number(priceTire.value) * 4 / tires
    const depreciationOil = Number(oil.value) * 3.5 / oils
    const depreciationFilter = Number(filter.value) / oils
    let kmr = Number(kmf.value) - Number(kmi.value)
    let vTotalStocked = Number(qtdLiters.value) * Number(priceKm.value)
    const priceKmr = vTotalStocked / kmr
    let tdepreciation = depreciationFilter + depreciationOil + depreciationTire + priceKmr
    txtCustKm.innerHTML = `O custo por km rodado é de r$ ${tdepreciation.toFixed(2)}`
    return tdepreciation
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





