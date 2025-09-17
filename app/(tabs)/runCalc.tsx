export type RunLong = {
  id: number;
  distance: number;
  temp: number;
  reps: number;
  sets: number;
  minTemp: number;
  maxTemp: number;
};

// Функция для создания массива тренировок с фиксированными значениями
export default function createTrainingArray(
  count: number,
  minTemp: number,
  maxTemp: number
): RunLong[] {
  const trainingArray: RunLong[] = [];

  // Фиксированные значения для остальных параметров
  const distance = 1000;
  const temp = 15;
  const reps = 2;
  const sets = 3;

  for (let i = 0; i < count; i++) {
    trainingArray.push({
      id: i + 1,
      distance: distance,
      temp: temp,
      reps: reps,
      sets: sets,
      minTemp: minTemp,
      maxTemp: maxTemp
    });
  }

  return trainingArray;
}

