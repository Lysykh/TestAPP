// Описание тенировки
// Автор: Джо Фрилл
// Зона:  4
// Название: В4.
// Особенность: РЕДАКЦИЯ СОБСТВЕННАЯ "ФАРТЛЕК" В ОРИГИНАЛЕ ОТДЫХ от 5 до 10 % от интервала. Из за перевода в фартлек удлинен восстановительный интервал
// Длина рабочего повторения: от 1000 до 2000 минут
// Восстановление: 400 метров
// Темповая зона: 4 - 106%

// ТЕМПОВЫЕ ЗОНЫ	НОРМА	значение
// 		минимальный темп	максимальный темп
// 1	129%	02:53	02:34
// 2	121%	02:34	02:24
// 3	113%	02:24	02:14
// 4	106%	02:14	02:06
// 5	100%	02:06	01:59
// 6	96%	01:59	01:54
// 7	89%	01:54	01:46

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
  if (minutes === null) return "--:--";

  const wholeMinutes = Math.floor(minutes);
  const seconds = Math.round((minutes - wholeMinutes) * 60);

  // Форматируем секунды, чтобы всегда было 2 цифры
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${wholeMinutes}:${formattedSeconds}`;
}

// Функция для создания массива тренировок с фиксированными значениями
export default function createTrainingArray_orange_run(
  temp: number,
): RunLong[] {
  // Создаем массив из 10 одинаковых тренировок вручную
  const trainingArray: RunLong[] = [
    {
      id: 1,
      distance: 1200,
      temp: temp,
      reps: 1,
      sets: 2,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 3200,
      totalTime: 665,
    },
    {
      id: 2,
      distance: 1400,
      temp: temp,
      reps: 1,
      sets: 2,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 3600,
      totalTime: 760,
    },
    {
      id: 3,
      distance: 1600,
      temp: temp,
      reps: 1,
      sets: 2,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 4000,
      totalTime: 180,
    },
    {
      id: 4,
      distance: 1000,
      temp: temp,
      reps: 3,
      sets: 1,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 4200,
      totalTime: 180,
    },
    {
      id: 5,
      distance: 1800,
      temp: temp,
      reps: 2,
      sets: 1,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 4400,
      totalTime: 180,
    },
    {
      id: 6,
      distance: 2000,
      temp: temp,
      reps: 2,
      sets: 1,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 4800,
      totalTime: 180,
    },
    {
      id: 7,
      distance: 1400,
      temp: temp,
      reps: 3,
      sets: 1,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 5400,
      totalTime: 180,
    },
    {
      id: 8,
      distance: 1000,
      temp: temp,
      reps: 4,
      sets: 1,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 5600,
      totalTime: 180,
    },
    {
      id: 9,
      distance: 1200,
      temp: temp,
      reps: 2,
      sets: 2,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 6400,
      totalTime: 180,
    },
    {
      id: 10,
      distance: 1800,
      temp: temp,
      reps: 3,
      sets: 1,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 6600,
      totalTime: 180,
    },
    {
      id: 11,
      distance: 1400,
      temp: temp,
      reps: 2,
      sets: 2,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 7200,
      totalTime: 180,
    },
    {
      id: 12,
      distance: 1400,
      temp: temp,
      reps: 4,
      sets: 1,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 7200,
      totalTime: 180,
    },
    {
      id: 13,
      distance: 1600,
      temp: temp,
      reps: 3,
      sets: 2,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 8000,
      totalTime: 180,
    },
    {
      id: 14,
      distance: 1000,
      temp: temp,
      reps: 3,
      sets: 2,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 8400,
      totalTime: 180,
    },
    {
      id: 15,
      distance: 1800,
      temp: temp,
      reps: 4,
      sets: 1,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 8800,
      totalTime: 180,
    },
    {
      id: 16,
      distance: 2000,
      temp: temp,
      reps: 2,
      sets: 2,
      minTemp: temp * 1.06,
      maxTemp: temp * 1.13,
      relaxTemp: temp * 1.29,
      relaxDistance: 400,
      totalDistance: 9600,
      totalTime: 180,
    },
  ];

  // Вывод всех сгенерированных тренировок на консоль
  console.log("Все сгенерированные тренировки (ОРАНЖЕВАЯ):");
  console.log("=================================");
  trainingArray.forEach((training) => {
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
