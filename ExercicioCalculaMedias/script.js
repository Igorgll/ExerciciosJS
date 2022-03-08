var nome = "Igor Lima"
var notaPrimeiroBimestre = 9
var notaSegundoBimestre = 7
var notaTerceiroBimestre = 4
var notaQuartoBimestre = 2
var mediaFinal = (notaPrimeiroBimestre + notaSegundoBimestre +  notaTerceiroBimestre + notaQuartoBimestre) / 4

var notaFixada = mediaFinal.toFixed(1) // (1) numero de casas decimais

console.log("Bem vindo ! "+ nome)
console.log(notaFixada)