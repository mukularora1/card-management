const formatAccountNumber = (accountNumber: string) => {
  return accountNumber.toString().replace(/\d{4}(?=\d)/g, "$& ");
};
function maskAccountNumber(accountNumber: string) {
  const number = formatAccountNumber(accountNumber);
  return number.slice(0, -4).replace(/\d/g, "*") + " " + number.slice(-4);
}
export { formatAccountNumber, maskAccountNumber };
