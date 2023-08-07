function metodoDePagamento(metodo,preco){
    if (metodo === 1){
        preco = preco - preco*0.1
        return preco
    } else if (metodo === 2){
        preco = preco - preco*0.15
        return preco
    } else if (metodo === 3){
        return preco
    } else {
        throw new Error('Ocorreu um erro.')
    }
}

function main(){
    let metodo = 5
    let preco = 100
    console.log(metodoDePagamento(metodo,preco))
}

main();