// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let $constante = document.querySelector('#constante')
let $massa1 = document.querySelector('#massa1')
let $massa2 = document.querySelector('#massa2')
let $distancia = document.querySelector('#distancia')

const calculo = () =>{
    let constante = new Number($constante.value)
    let massa1 = new Number($massa1.value)
    let massa2 = new Number($massa2.value)
    let distancia = new Number($distancia.value)

    if(!$massa1.value){     //Validação tosca para caso o usuario não preencha todos os dados ele receber um aviso
        alert("A primeira massa não pode ficar em branco")
        return false
    }
    if(!$massa2.value){     //Validação tosca para caso o usuario não preencha todos os dados ele receber um aviso
        alert("A segunda massa não pode ficar em branco")
        return false
    }
    if(!$distancia.value){  //Validação tosca para caso o usuario não preencha todos os dados ele receber um aviso
        alert("A distancia não pode ficar em branco")
        return false
    }
    
    let resultado = (constante*massa1*massa2)/(distancia**2)
    document.querySelector('#resultado').value=resultado.toPrecision(3)
}