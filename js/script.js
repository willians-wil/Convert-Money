// Botão de converter
const convertButton = document.querySelector(".convert-button")
document.addEventListener("DOMContentLoaded", () => {
  // Seletores
  const convertButton = document.querySelector(".convert-button");
  const currencySelect = document.querySelector(".currency-select");
  const inputCurrency = document.querySelector(".input-currency");
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");
  const currencyName = document.querySelector("#currency-name");
  const currencyImage = document.querySelector(".currency-img");
  const errorMessage = document.querySelector(".error-message");

  // Taxas de conversão
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
  };

  // Formatação de moeda
  function formatCurrency(value, locale, currency) {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
  }

  // Exibir erro
  function showError(message) {
    errorMessage.innerText = message;
    errorMessage.classList.add("active");
  }

  // Função principal de conversão
  function convertValues() {
    const inputValue = Number(inputCurrency.value);
    const selectedCurrency = currencySelect.value;
    const currencyData = currencies[selectedCurrency];

    if (!currencyData) return;

    if (isNaN(inputValue) || inputValue <= 0) {
      showError("Digite um valor maior que zero.");
      return;
    }

    errorMessage.classList.remove("active");

    currencyValueToConvert.innerText = formatCurrency(inputValue, "en-US", "USD");

    const convertedValue = inputValue * currencyData.rate;
    currencyValueConverted.innerText = formatCurrency(convertedValue, currencyData.locale, currencyData.currency);
  }

  // Atualiza nome e imagem da moeda
  function changeCurrency() {
    const selectedCurrency = currencySelect.value;
    const currencyData = currencies[selectedCurrency];

    if (!currencyData) return;

    currencyName.innerText = currencyData.name;
    currencyImage.src = currencyData.image;

    convertValues();
  }

  // Event listeners
  currencySelect.addEventListener("change", changeCurrency);
  convertButton.addEventListener("click", convertValues);
});
