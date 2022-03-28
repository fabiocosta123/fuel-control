let kmi = document.getElementById('kmi')
let kmf = document.getElementById('kmf')
let qtdLitros = document.getElementById('qLitros')
let precoKm= document.getElementById('pKm')
let valorComb= document.getElementById('vComb')
let kmr = kmf - kmi
let media = kmr / valorComb
// calculo para tirar media



function calcular(){
    
    alert(Number(media.value))
}
