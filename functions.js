// Exercicio 1/2

let nome = 'Cole'

function mostrarLembrete(){
    console.log('Water the plants.');
}

// Exercicio 3/4

function saudacaoEmEspanhol(){
    console.log('Buenas tardes.');
}

// Exercicio 5/6/7/8/9/10

function agradecerCliente(){
    console.log(`Thank you for your purchase! ${nome}! We appreciate your business.`);
}

agradecerCliente();

// Exercicio 11

function criarListaDeCompras(item1 = 'leite', item2 = 'pão', item3 = 'ovos'){

}

function contarMonitores(linha, coluna){
    return linha*coluna;
}

let numeroDeMonitores = contarMonitores(5, 4)
console.log(numeroDeMonitores);

function custoDosMonitores(linha, coluna){
    return (linha*coluna)*200;
}

let custoTotal = custoDosMonitores(5,4);

const plantaPrecisaDeAgua = dia =>{
    if(dia == 'Wednesday'){
        return true;
    }else{
        return false
    }
}

console.log(plantaPrecisaDeAgua('Tuesday'))