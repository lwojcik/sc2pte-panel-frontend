import checkIfZero from 'src/helpers/checkIfZero/checkIfZero';

const calculatePercentage = (number: number, total: number) => {
  if (number < 0 || total < 0) return 0;
  const fraction = number / total;
  return checkIfZero(fraction) ? 0 : Math.round(fraction * 100);
};

export default calculatePercentage;
