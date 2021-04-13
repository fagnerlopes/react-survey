function formatNumber(value){
  const formatter = Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 4 });
  return formatter.format(value);
}

function formatPercentage(value) {
  const stringValue = value.toFixed(2);
  return stringValue.replace('.', ',')  + '%';
}

export { formatNumber, formatPercentage };