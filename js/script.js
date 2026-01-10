const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const inputCurrency = document.querySelector(".input-currency")
const currencyValueToConvert = document.querySelector(".currency-value")
const currencyValueConverted = document.querySelector(".currency-value")
const currencyName = document.querySelector(".currency-name")
const currencyImage = document.querySelector(".currency-img")

//console.log (currencySelect.value)

const rates = {
  euro: 6.2,
  real: 0.19
}

function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(value)
}

function convertValues() {
  const inputValue = Number(inputCurrency.value)

  if (!inputValue || inputValue <= 0) {
    alert("Digite um valor válido")
    return
  }
  let convertedValue
  if (currencySelect.value === "Euro") {
    convertedValue = inputValue / rates.euro

    currencyValueConverted.innerHTML = formatCurrency(
      convertedValue,
      "de-DE",
      'EUR'
    )
  }
  else if (currencySelect.value === "Real") {
    convertedValue = inputValue / rates.real

    currencyValueToconvert.innerHTML = formatCurrency(
      inputValue,
      "pt-br",
      "BRL"
    )
  }

  currencyValueToconvert.innerHTML = formatCurrency(
    inputValue,
    "en-US",
    "USD"
  )
}

function changeCurrency() {
  if (currencySelect.value === "Euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "assets/euro.png"
  }
  else if (currencySelect.value === "Real") {
    currencyName.innerHTML = "Real Brasileiro"
    currencyImage.src = "./assets/brasil.png"
  }
  convertValues()
}

//IF (Se tal coisa for igual, faça isso, se não faça aquilo)


currencySelect.addEventListener("change", changeCurrency) //Vai ficar de olho, toda vez que o SELECT mudar ...Na troca de imagem das bandeiras e o nome ao adicionar o evento de mudança criar uma função
convertButton.addEventListener("click", convertValues) //Fica de olho, ouvindo toda vez que o botão é clicado
