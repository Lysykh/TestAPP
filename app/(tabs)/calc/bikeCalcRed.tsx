// Описание тенировки
// Автор: Джо Фрилл
// Зона:  4
// Название: В4.
// Особенность: РЕДАКЦИЯ СОБСТВЕННАЯ "ФАРТЛЕК" В ОРИГИНАЛЕ ОТДЫХ от 5 до 10 % от интервала. Из за перевода в фартлек удлинен восстановительный интервал
// Длина рабочего повторения: от 1000 до 2000 минут
// Восстановление: 400 метров
// Темповая зона: 4 - 106%

// WATT ЗОНЫ ТРИАТЛЕТ велосипед	НОРМА	мин	макс
// 1	55%	64	78
// 2	74%	78	105
// 3	89%	105	127
// 4	104%	127	148
// 5	120%	148	171
// 6	> 120%
// ТЕМПОВЫЕ ЗОНЫ	НОРМА	значение
// 1	>129	от	до
// 2	129%	02:41	02:21
// 3	113%	02:21	02:11
// 4	105%	02:11	02:05
// 5а	100%	02:05	02:00
// 5b	96%	02:00	01:52
// 5c	90%	01:52

export type RunLong = {
  id: number;
  distance: number;
  temp: number | null;
  watt: number | null;
  reps: number;
  sets: number;
  minTemp: number | null;
  maxTemp: number | null;
  minWatt: number | null;
  maxWatt: number | null;
  relaxTemp: number | null;
  relaxWatt: number | null;
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
export default function createTrainingArray_red_bike(
  temp: number,
  watt: number,
): RunLong[] {
  // Создаем массив из 10 одинаковых тренировок вручную
  const trainingArray: RunLong[] = [
    {
      id: 1,
      distance: 1500,
      temp: temp,
      watt: watt,
      reps: 1,
      sets: 2,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 1500,
      totalDistance: 6000,
      totalTime: 700,
    },
    {
      id: 2,
      distance: 1500,
      temp: temp,
      watt: watt,
      reps: 2,
      sets: 1,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 1500,
      totalDistance: 6000,
      totalTime: 700,
    },
    {
      id: 3,
      distance: 1000,
      temp: temp,
      watt: watt,
      reps: 2,
      sets: 2,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 1000,
      totalDistance: 8000,
      totalTime: 700,
    },
    {
      id: 4,
      distance: 1000,
      temp: temp,
      watt: watt,
      reps: 4,
      sets: 1,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 1000,
      totalDistance: 8000,
      totalTime: 700,
    },
    {
      id: 5,
      distance: 1500,
      temp: temp,
      watt: watt,
      reps: 3,
      sets: 1,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 1500,
      totalDistance: 9000,
      totalTime: 700,
    },
    {
      id: 6,
      distance: 1000,
      temp: temp,
      watt: watt,
      reps: 5,
      sets: 1,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 1000,
      totalDistance: 10000,
      totalTime: 700,
    },
    {
      id: 7,
      distance: 1000,
      temp: temp,
      watt: watt,
      reps: 3,
      sets: 2,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 1000,
      totalDistance: 12000,
      totalTime: 700,
    },
    {
      id: 8,
      distance: 3000,
      temp: temp,
      watt: watt,
      reps: 1,
      sets: 2,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 3000,
      totalDistance: 12000,
      totalTime: 700,
    },
    {
      id: 9,
      distance: 1500,
      temp: temp,
      watt: watt,
      reps: 4,
      sets: 1,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 1500,
      totalDistance: 12000,
      totalTime: 700,
    },
    {
      id: 10,
      distance: 3000,
      temp: temp,
      watt: watt,
      reps: 2,
      sets: 1,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 3000,
      totalDistance: 12000,
      totalTime: 700,
    },
    {
      id: 11,
      distance: 2500,
      temp: temp,
      watt: watt,
      reps: 3,
      sets: 1,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 2500,
      totalDistance: 15000,
      totalTime: 700,
    },
    {
      id: 12,
      distance: 2000,
      temp: temp,
      watt: watt,
      reps: 2,
      sets: 2,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 2000,
      totalDistance: 16000,
      totalTime: 700,
    },
    {
      id: 13,
      distance: 1500,
      temp: temp,
      watt: watt,
      reps: 3,
      sets: 2,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 1500,
      totalDistance: 18000,
      totalTime: 700,
    },
    {
      id: 14,
      distance: 3000,
      temp: temp,
      watt: watt,
      reps: 3,
      sets: 1,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 3000,
      totalDistance: 18000,
      totalTime: 700,
    },
    {
      id: 15,
      distance: 2500,
      temp: temp,
      watt: watt,
      reps: 2,
      sets: 2,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 2500,
      totalDistance: 20000,
      totalTime: 700,
    },
    {
      id: 16,
      distance: 2500,
      temp: temp,
      watt: watt,
      reps: 4,
      sets: 1,
      minTemp: temp * 1.0,
      maxTemp: temp * 0.96,
      minWatt: watt * 1.0,
      maxWatt: watt * 1.2,
      relaxTemp: temp * 1.29,
      relaxWatt: watt * 0.55,
      relaxDistance: 2500,
      totalDistance: 20000,
      totalTime: 700,
    },
  ];

  // Вывод всех сгенерированных тренировок на консоль
  console.log("Все сгенерированные тренировки (ОРАНЖЕВАЯ):");
  console.log("=================================");
  trainingArray.forEach((training) => {
    console.log(`ID: ${training.id}`);
    console.log(`  Дистанция: ${training.distance}м`);
    console.log(`  Темп: ${formatTime(training.temp)} мин/км`);
    console.log(`  Ватты: ${training.watt}W`);
    console.log(`  Повторения: ${training.reps}`);
    console.log(`  Подходы: ${training.sets}`);
    console.log(`  Мин. темп: ${formatTime(training.minTemp)} мин/км`);
    console.log(`  Макс. темп: ${formatTime(training.maxTemp)} мин/км`);
    console.log(`  Мин. ватты: ${training.minWatt}W`);
    console.log(`  Макс. ватты: ${training.maxWatt}W`);
    console.log(`  Темп отдыха: ${formatTime(training.relaxTemp)} мин/км`);
    console.log(`  Ватты отдыха: ${training.relaxWatt}W`);
    console.log(`  Дистанция отдыха: ${training.relaxDistance}м`);
    console.log(`  Общая дистанция: ${training.totalDistance}м`);
    console.log(`  Общее время: ${training.totalTime} сек`);
    console.log("---------------------------------");
  });

  console.log(`Всего сгенерировано тренировок: ${trainingArray.length}`);

  return trainingArray;
}
