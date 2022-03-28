let kmi = document.getElementById('initKm')
let kmf = document.getElementById('finalKm')
let amountLiters = document.getElementById('amountLiters')
let priceKm= document.getElementById('pricekm')
let valuedFueled = document.getElementById('valuedFueled')

// calculo para tirar media
function calcular(){
    let kmr = Number(kmf) - Number(kmi)
   // let totalabastecido = Number(amountLiters) * Number(priceKm)
   // let media = kmr / totalabastecido
    alert(kmr)

}
