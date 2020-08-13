export const formatPrice = (price: number, decimals = 2, showSymbol = true) =>
  `${price.toFixed(decimals).replace('.', ',')}${showSymbol ? ' €' : ''}`;
