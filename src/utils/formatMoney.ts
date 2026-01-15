// Formater le montant en F CFA
export function formatMoney(amount: number) {
  return new Intl.NumberFormat("fr-FR").format(Math.abs(amount)) + " F CFA";
}
