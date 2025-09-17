export type RunLong = {
  id: number;
  distance: number;
  temp: number | null;
  reps: number;
  sets: number;
  minTemp: number | null;
  maxTemp: number | null;
};

// Функция для создания массива тренировок с фиксированными значениями
export default function createTrainingArray(
  temp: number, 
): RunLong[] {
  const trainingArray: RunLong[] = [];

  // Фиксированные значения для остальных параметров
  let distance = 1000;
  const reps = 2;
  const sets = 3;
  const count = 40;

  for (let i = 0; i < count; i++) {
 
    trainingArray.push({
      id: i + 1,
      distance: distance,
      temp: temp,
      reps: reps,
      sets: sets,
      minTemp: temp * 0.9,
      maxTemp: temp * 1,
    });
    distance += 1000;
  }

  return trainingArray;
}

