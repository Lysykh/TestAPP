

export type RunLong = {
  id: number;
  distance: number;
  temp: number | null;
  reps: number;
  sets: number;
  minTemp: number | null;
  maxTemp: number | null;
  relaxTemp: number | null;
  relaxDistance: number | null;
  totalDistance: number;
  totalTime: number;
};

// Функция для преобразования числа в формат мм:сс
function formatTime(minutes: number | null): string {
  if (minutes === null) return '--:--';
  
  const wholeMinutes = Math.floor(minutes);
  const seconds = Math.round((minutes - wholeMinutes) * 60);
  
  // Форматируем секунды, чтобы всегда было 2 цифры
  const formattedSeconds = seconds.toString().padStart(2, '0');
  
  return `${wholeMinutes}:${formattedSeconds}`;
}

// Функция для создания массива тренировок с фиксированными значениями
export default function createTrainingArray_red_swim(
  temp: number,
): RunLong[] {
  // Создаем массив из 10 одинаковых тренировок вручную
  const trainingArray: RunLong[] = [
    {
      id: 1,
      distance: 3000,
      temp: temp,
      reps: 1,
      sets: 1,
      minTemp: temp,
      maxTemp: temp * 1.05,
      relaxTemp: temp * 1.25,
      relaxDistance: 100,
      totalDistance: 400,
      totalTime: 180
    },
    {
      id: 2,
      distance: 450,
      temp: temp,
      reps: 1,
      sets: 1,
      minTemp: temp,
      maxTemp: temp * 1.05,
      relaxTemp: temp * 1.25,
      relaxDistance: 100,
      totalDistance: 550,
      totalTime: 180
    },
    {
      id: 3,
      distance: 600,
      temp: temp,
      reps: 1,
      sets: 1,
      minTemp: temp,
      maxTemp: temp * 1.05,
      relaxTemp: temp * 1.25,
      relaxDistance: 100,
      totalDistance: 700,
      totalTime: 180
    },
    {
      id: 4,
      distance: 400,
      temp: temp,
      reps: 2,
      sets: 1,
      minTemp: temp,
      maxTemp: temp * 1.05,
      relaxTemp: temp * 1.25,
      relaxDistance: 100,
      totalDistance: 1000,
      totalTime: 180
    },
    {
      id: 5,
      distance: 500,
      temp: temp,
      reps: 2,
      sets: 1,
      minTemp: temp,
      maxTemp: temp * 1.05,
      relaxTemp: temp * 1.25,
      relaxDistance: 100,
      totalDistance: 1200,
      totalTime: 180
    },
    {
      id: 6,
      distance: 600,
      temp: temp,
      reps: 2,
      sets: 1,
      minTemp: temp,
      maxTemp: temp * 1.05,
      relaxTemp: temp * 1.25,
      relaxDistance: 100,
      totalDistance: 1400,
      totalTime: 180
    },
    {
      id: 7,
      distance: 450,
      temp: temp,
      reps: 3,
      sets: 1,
      minTemp: temp,
      maxTemp: temp * 1.05,
      relaxTemp: temp * 1.25,
      relaxDistance: 100,
      totalDistance: 1650,
      totalTime: 180
    },
    {
      id: 8,
      distance: 300,
      temp: temp,
      reps: 5,
      sets: 1,
      minTemp: temp,
      maxTemp: temp * 1.05,
      relaxTemp: temp * 1.25,
      relaxDistance: 100,
      totalDistance: 2000,
      totalTime: 180
    },
    {
      id: 9,
      distance: 350,
      temp: temp,
      reps: 5,
      sets: 1,
      minTemp: temp,
      maxTemp: temp * 1.05,
      relaxTemp: temp * 1.25,
      relaxDistance: 100,
      totalDistance: 2250,
      totalTime: 180
    },
    {
      id: 10,
      distance: 300,
      temp: temp,
      reps: 6,
      sets: 1,
      minTemp: temp,
      maxTemp: temp * 1.05,
      relaxTemp: temp * 1.25,
      relaxDistance: 100,
      totalDistance: 2400,
      totalTime: 180
    }
  ];

  // Вывод всех сгенерированных тренировок на консоль
  console.log("Все сгенерированные тренировки (ОРАНЖЕВАЯ):");
  console.log("=================================");
  trainingArray.forEach(training => {
    console.log(`ID: ${training.id}`);
    console.log(`  Дистанция: ${training.distance}м`);
    console.log(`  Темп: ${formatTime(training.temp)} мин/км`);
    console.log(`  Повторения: ${training.reps}`);
    console.log(`  Подходы: ${training.sets}`);
    console.log(`  Мин. темп: ${formatTime(training.minTemp)} мин/км`);
    console.log(`  Макс. темп: ${formatTime(training.maxTemp)} мин/км`);
    console.log(`  Темп отдыха: ${formatTime(training.relaxTemp)} мин/км`);
    console.log(`  Дистанция отдыха: ${training.relaxDistance}м`);
    console.log(`  Общая дистанция: ${training.totalDistance}м`);
    console.log(`  Общее время: ${training.totalTime} сек`);
    console.log("---------------------------------");
  });

  console.log(`Всего сгенерировано тренировок: ${trainingArray.length}`);

  return trainingArray;
}
