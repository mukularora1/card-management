const getCurrentYear = () => {
  return new Date().getFullYear();
};
function convertDate(dateString: string) {
  return dateString.slice(0, 3) + dateString.slice(-2);
}
export { convertDate, getCurrentYear };
