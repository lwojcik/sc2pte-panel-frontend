import checkIfZero from 'src/helpers/checkIfZero/checkIfZero';

const calculatePercentage = (number: number, total: number) => {
  const fraction = number / total;
  return checkIfZero(fraction) ? 0 : Math.round(fraction * 100);
};

export default calculatePercentage;
