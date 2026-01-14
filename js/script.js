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

// Mensagem de erro
const errorMessage = document.querySelector(".error-message")

// Taxas de conversão (base: dólar)
const currencies = {
  EUR: {
    name: "Euro",
    rate: 0.92,
    locale: "de-DE",
    currency: "EUR",
    image: "./assets/euro.png"
  },
  BRL: {
    name: "Real Brasileiro",
    rate: 5.10,
    locale: "pt-BR",
    currency: "BRL",
    image: "./assets/brasil.png"
  }
}

// Função para formatar valores em moeda
function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(value)
}

// Exibe erro
function showError(message) {
  errorMessage.innerText = message
  errorMessage.classList.add("active")
}

// Função principal de conversão
function convertValues() {
  const inputValue = Number(inputCurrency.value)
  const selectedCurrency = currencySelect.value
  const currencyData = currencies[selectedCurrency]

  if (!currencyData) return

  // Validação
  if (isNaN(inputValue) || inputValue <= 0) {
    showError("Digite um valor maior que zero.")
    return
  }

  errorMessage.classList.remove("active")

  // Valor em dólar
  currencyValueToConvert.innerHTML = formatCurrency(
    inputValue,
    "en-US",
    "USD"
  )

  // Conversão
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
  const currencyData = currencies[selectedCurrency]

  if (!currencyData) return

  currencyName.innerText = currencyData.name
  currencyImage.src = currencyData.image

  convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)