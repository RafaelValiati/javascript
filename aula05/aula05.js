

function tabuada(numero){
    for(let i=1; i<11; i++){
        console.log(numero*i)
    }
}

function percorrerLista(lista){
    for(let i=0; i<lista.length; i++){
        let y = lista[i]
        if (y%2===0) {
            console.log(y)
        } else {

            console.log("o numero é impar")

        }
    }
}

let x= [1,2,3,4,5]
percorrerLista(x);