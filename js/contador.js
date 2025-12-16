// Capturando/Buscando/pegando elementos no HTML
const diasElemento = document.getElementById("dias")
const horasElemento = document.getElementById("horas")
const minutosElemento = document.getElementById("minutos")
const segundosElemento = document.getElementById("segundos")

// Criando a data de referencia
const dataLancamento = new Date(2026, 0, 1, 0, 0, 0);


function atualizaContador() {
    // Capturando o horário atual
    const agora = new Date();

    // datas no JS viram milissegundos
    // Aqui, nós temos a diferença e, milissegundos
    const diferenca = dataLancamento - agora;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)
    
    const segundos = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / 1000)

    diasElemento.innerText = dias
    horasElemento.innerText = horas
    minutosElemento.innerText = minutos
    segundosElemento.innerText = segundos


    
}


atualizaContador();
//setTimeout(function () {
   // console.log("passou 2 segundos");
//}, 5000)

//onst intervalId = setInterval(function () {
 //   console.log("Contando");
// }, 1000);

//console.log(intervalId)

// clearInterval(intervalId)