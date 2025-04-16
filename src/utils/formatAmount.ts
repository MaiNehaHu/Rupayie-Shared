export const formatAmount = (amount: number) => {
  if (!amount) return `₹0.00`;

  const formattedNumber = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  return `₹ ${formattedNumber}`;
};
