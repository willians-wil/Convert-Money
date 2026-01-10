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

// Taxas de conversão (base: dólar)
const rates = {
  euro: 0.92,
  real: 5.10
}

// Função para formatar valores em moeda
function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, { //É uma ferramenta nativa do JavaScript, serve para formatar números de acordo com regras de um país
    style: "currency",
    currency
  }).format(value)
}

// Função principal de conversão
function convertValues() {
  const inputValue = Number(inputCurrency.value)

  // Validação
  if (!inputValue || inputValue <= 0) {
    alert("Digite um valor válido")
    return
  }

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
}

// Atualiza nome e imagem da moeda
function changeCurrency() {
  if (currencySelect.value === "Euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  if (currencySelect.value === "Real") {
    currencyName.innerHTML = "Real Brasileiro"
    currencyImage.src = "./assets/brasil.png"
  }

  convertValues()
}

// Eventos
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
