
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

convertValues() 
}

currencySelect.addEventListener("change", changeCurrency) //Vai ficar de olho, toda vez que o SELECT mudar ...Na troca de imagem das bandeiras e o nome ao adicionar o evento de mudança criar uma função
convertButton.addEventListener("click", convertValues) //Fica de olho, ouvindo toda vez que o botão é clicado
