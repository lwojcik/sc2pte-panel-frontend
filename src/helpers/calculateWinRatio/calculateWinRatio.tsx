import checkIfZero from 'helpers/checkIfZero/checkIfZero';
import calculatePercentage from 'helpers/calculatePercentage/calculatePercentage';

const calculateWinRatio = (wins: number, losses: number) => {
  const gamesOverall = wins + losses;
  const winPercentage = checkIfZero(wins) ? 0 : calculatePercentage(wins, gamesOverall);
  const lossPercentage = checkIfZero(losses) ? 0 : 100 - winPercentage;
  return [winPercentage, lossPercentage] as [number, number];
};

export default calculateWinRatio;
