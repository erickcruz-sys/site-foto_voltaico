

function calculo(kw, dias, efi, irradiacao) {
return   kw * dias * efi * irradiacao / 1000
}

let result = document.getElementById('result')
function main(){

let kw = Number(document.getElementById('kw').value)
let dias = Number(document.getElementById('dias').value)
let efi = Number(document.getElementById('efi').value)
let irradiacao = Number(document.getElementById('irradiacao').value)

let placas = calculo(kw, dias, efi, irradiacao)
console.log(placas)

result.innerHTML = ``
result.innerHTML += `Seu consumo é de: ${placas.toFixed(2)} kw`

}

