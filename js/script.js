// Botão de converter
const convertButton = document.querySelector(".convert-button")

// Select de moedas
const currencySelect = document.querySelector(".currency-select")

// Input do valor em dólar
const inputCurrency = document.querySelector(".input-currency")

// Valor em dólar (origem)
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

// Valor convertido (destino)
const currencyValueConverted = document.querySelector(".currency-value")

// Nome da moeda
const currencyName = document.querySelector("#currency-name")

// Imagem da moeda
const currencyImage = document.querySelector(".currency-img")

<<<<<<< HEAD
//Mensagem de erro
const errorMessage = document.querySelector (".error-message")
=======
const errorMessage = document.querySelector(".error-message")
>>>>>>> e83bb65 (refactor: replace alert validation with inline error message)

// Taxas de conversão (base: dólar)
const currencies = {
  EUR: {
name: "Euro",
rate: 0.92,
locale: "de-DE",
currency: "EUR",
image: "./assets/euro.png"
},
BRL:{
  name:"Real Brasileiro",
  rate: 5.10,
  locale: "pt-BR",
  currency: "BRL",
  image: "./assets/brasil.png"
}
}

// Função para formatar valores em moeda
function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, { //É uma ferramenta nativa do JavaScript, serve para formatar números de acordo com regras de um país
    style: "currency",
    currency
  }).format(value)
}
function showError(message){
  errorMessage.innerText =  message
  errorMessage.classList.add("active")
}
// Função principal de conversão
function convertValues() {
  const inputValue = Number(inputCurrency.value)
  const selectedCurrency = currencySelect.value
  const currencyData = currencies [selectedCurrency]

<<<<<<< HEAD
  //Limpa erro
  function clearError(){
    errorMessage.classList.remove("active")
  }

  // Validação
  if (isNaN (inputValue)|| inputValue <=0){
    showError ("Digite um valor maior que zero.")
    return
  }

  clearError()

  // Sempre mostrar o valor original em dólar
  currencyValueToConvert.innerHTML = formatCurrency(
    inputValue,
    "en-US",
    "USD"
  )

  // Conversões
  if (currencySelect.value === "Euro") {//Se o valor selecionado no select for exatamente igual a ‘Euro’, execute o código dentro do bloco
    const convertedValue = inputValue * rates.euro

    currencyValueConverted.innerHTML = formatCurrency(
      convertedValue,
      "de-DE",
      "EUR"
    )
  }

  else if (currencySelect.value === "Real") {
    const convertedValue = inputValue * rates.real

    currencyValueConverted.innerHTML = formatCurrency(
      convertedValue,
      "pt-BR",
      "BRL"
    )
  }
=======
if (!currencyData) return

  //Validação
if (!inputValue || inputValue <=0){
  errorMessage.innerText = "Digite um valor Válido"
  errorMessage.style.display = "block"
  return
}else{
  errorMessage.style.display = "none"
>>>>>>> e83bb65 (refactor: replace alert validation with inline error message)
}

//Valor em dólar
currencyValueToConvert.innerHTML = formatCurrency (
  inputValue,
  "en-US",
  "USD"
)

//Conversão
const convertedValue = inputValue * currencyData.rate

currencyValueConverted.innerHTML = formatCurrency(
  convertedValue,
  currencyData.locale,
  currencyData.currency
)
}


// Atualiza nome e imagem da moeda
function changeCurrency() {
  const selectedCurrency = currencySelect.value
  const currencyData = currencies [selectedCurrency]

  currencyName.innerHTML = currencyData.name
  currencyImage.src= currencyData.image

  convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

