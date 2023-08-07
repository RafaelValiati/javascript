const custoEtanol= 5.79;
const custoGasolina = 6.66;
var tipoDeCombustivel= 'gasolina'
let kmPorLitro = 10;
const distancia=100;
let valorGasto;


if(tipoDeCombustivel === 'etanol'){
    
    valorGasto= (distancia/kmPorLitro)*custoEtanol
    console.log(valorGasto)


}else if(tipoDeCombustivel === 'gasolina'){
    
    valorGasto= (distancia/kmPorLitro)*custoGasolina
    console.log(valorGasto.toFixed(2))

}

