

//Passo a passo até o ponto onde o usuário digita o valor que deseja converter para o valor convertido Dólar para Euro
/*
//1° Adiciona uma variável com a busca pelo id ou classe do botão no HTML 
const convertButton = document.querySelector(".convert-button") //classe do meu button no html
//console.log (convertButton) Sempre testar com console.log após a variável ser criada 

function convertValues(){ //3° Criar uma função para que quando clicar no botão quero que converta os valores
                          //3° Console.log("Funcionou") Para ter certeza de que o meu botao está chamando a minha função, testar com console.log
const inputCurrencyValue = document.querySelector (".input-currency").value  //4° Mapiei o meu input e dei o nome na variável de inputCurrencyValue
//console.log(inputCurrencyValue) Sempre testar com console.log após a variável ser criada

const currencyValueToconvert = document.querySelector (".currency-value-to-convert")//7° variável criada para mapear o parágrafo do valor a converter 
const currencyValueConverted = document.querySelector (".currency-value") //8° variável criada para mapear o parágrafo do valor convertido 

const dolarToday = 5.2 //5° Criar uma variável simulando o valor do dólar
const convertedValue = inputCurrencyValue / dolarToday //6° Criei uma variável de nome valor convertido peguei o valor do input inputCurrencyValue e dividi = pelo dolarToday 
//console.log (convertedValue) Colocar a última variável criada e verificar no console.log o valor convertido ao digitar no input 

currencyValueToconvert.innerHTML = inputCurrencyValue /*9° Pego  a variável do do meu parágrafo e altero o texto dele através do innerHTML pelo 
do input, ou seja quando a pessoa clicar no botão aparecerá o valor que ela digitou no campo dólar*/
//currencyValueConverted.innerHTML = convertedValue /*10° Pego a variável do valor em dólar  mudo o texto dele para o valor convertido em Euro convertedValue*/

//2° crie um ouvinte de evento, que estará ouvindo o meu botão quando ele for clicado que chamará a função 
//convertButton.addEventListener ("click", convertValues) 

// Passo passo dos valores convertidos e inseridos de forma correta com ponto e vírgula do valor digitado ao convertido

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector (".currency-select") //mapear o select para quando clicar para alteração de valor de moeda , converta autmomaticamente no valor de Dólar/Euro

function convertValues() {

  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToconvert = document.querySelector(".currency-value-to-convert")
  const currencyValueConverted = document.querySelector(".currency-value")

  //console.log (currencySelect.value)


  const euroToday = 6.2
  const realToday = 0.19
  
  

  //IF (Se tal coisa for igual, faça isso, se não faça aquilo)

  if(currencySelect.value == ("Euro")){ //Se o select estiver selecionado o valor de Euro entra aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue / euroToday) //Vai pegar o valor do input e divide pelo Euro

  }  
  if(currencySelect.value == ("Real")){ //Se o select estiver selecionado o valor de Real entra aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("pt-BR", {
    style:"currency",
    currency: "BRL"
    }).format (inputCurrencyValue / realToday)//currencyValueConverted irá continuar trocando por ele, quando for o real selecionado eu quero converter para o Real 
  }  

  //Essa formatação faz com que os número sejam convertidos de forma correta com ponto e vírgula

  currencyValueToconvert.innerHTML = new Intl.NumberFormat("en-US", { //Essa configuração é o valor principal da aplicação o Dólar
    style: "currency", //Qual estilo? Moeda
    currency: "USD" //Qual moeda? Americana
  }).format(inputCurrencyValue) //valor que a pessoa digita no input

  /*currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(convertedValue) //Valor convertido em Euro ...essa variável é o valor do input divido pelo dólar do dia
  
  QUANDO FOR A PARTE DO IF COMO NO PRIMEIRO EXEMPLO A CONVERSÃO É PRA EURO E JÁ ESTÁ LA, DESCONSIDERAR COM COMENTÁRIO PARA VALER SOMENTE A CONVERSÃO DO REAL

*/
}
function changeCurrency(){
    //console.log ("trocou de moeda") //Verificar se está funcionando a troca ao mudar o select
    const currencyName = document.getElementById ("currency-name") //Variável criada para que na troca do select mude também a nome
    const currencyImage = document.querySelector (".currency-img") //Variável criada para que na troca do select mude também a imagem
    
    
if(currencySelect.value == "Euro"){ //Se ele identificar que dentro do (currencySelect.value o novo valor for Euro, ele irá no innerHTMl aparecer como Euro
    currencyName.innerHTML = "Euro"
    currencyImage.src="./assets/euro.png"
}

 if(currencySelect.value == "Real"){////Se ele identificar que dentro do (currencySelect.value o novo valor for Real, ele irá no innerHTMl aparecer como Real
    currencyName.innerHTML = "Real Brasileiro"
    currencyImage.src="./assets/brasil.png"
    
}

convertValues() //No final chama a função de converter valores
}

currencySelect.addEventListener("change", changeCurrency) //Vai ficar de olho, toda vez que o SELECT mudar ...Na troca de imagem das bandeiras e o nome ao adicionar o evento de mudança criar uma função
convertButton.addEventListener("click", convertValues) //Fica de olho, ouvindo toda vez que o botão é clicado
