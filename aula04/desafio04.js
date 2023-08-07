class Carros{
    cor;
    marca;
    gastoPorQuilometro;
    
    constructor(marca,cor,gastoPorQuilometro){
        this.cor=cor
        this.marca=marca
        this.gastoPorQuilometro=gastoPorQuilometro
    }

    custoDeViagem(distancia,precoDoCombustivel){
        let c = (distancia/this.gastoPorQuilometro)*precoDoCombustivel;
        return c;
    }
}


x = new Carros(`macaca`,`larry`,10)
console.log(x.custoDeViagem(100,6.66))
