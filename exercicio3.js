// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
let $botao = document.querySelectorAll('.botao-expandir-retrair')
$botao.forEach(function(item){
    item.addEventListener('click',e =>{
        if(!e.target.parentElement.classList.contains('expandido')){
            e.target.parentElement.classList.add('expandido')
            e.target.innerHTML='-'
        }
        else{
            e.target.parentElement.classList.remove('expandido')
            e.target.innerHTML='+'
        }
    })
}
)
