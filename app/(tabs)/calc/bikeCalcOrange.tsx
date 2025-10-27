// описание калькулятора зеленый велосипед
// 1. Ограничения дистанции от 800 до 2400 
// 2. минимальная дистанция 3000 метров
// 3. масимальная дистанция 10000 метров 
// 4. отдых от 200 до 400 метров 
// 5. максимальное количество повторов - до упора по ограничению в дистанцию
// 6. максимальное количество подходов 1
// 7. зона работы Аэробная (105% к темпу) 
// 8. количество повторений не больше 10
// 9. количество подходов не более 5

		
// ТЕМПОВЫЕ ЗОНЫ	НОРМА	минимум	максимум
// 1	135%	трусца	08:16
// ОТДЫХ 2	129%	08:16	07:54
// ЛЕГКАЯ 3	113%	07:54	06:55
// АЭРОБНАЯ 4	105%	06:55	06:26
// ПАНО 5	100%	06:26	06:08
// МПК 6	96%	06:08	05:53
// АНАЭРОБ 7	90%	05:53	

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
  if (minutes === null) return '--:--';
  
  const wholeMinutes = Math.floor(minutes);
  const seconds = Math.round((minutes - wholeMinutes) * 60);
  
  // Форматируем секунды, чтобы всегда было 2 цифры
  const formattedSeconds = seconds.toString().padStart(2, '0');
  
  return `${wholeMinutes}:${formattedSeconds}`;
}

// Функция для создания массива тренировок с фиксированными значениями
export default function createTrainingArray_orange_bike(
  temp: number,
  watt: number
): RunLong[] {
  const trainingArray: RunLong[] = [];
  let idCounter = 1;

  const count = 40;

  // Сначала собираем все тренировки
  for (let sets = 1; sets <= 5; sets++) {
    for (let reps = 1; reps <= 10; reps++) {
      
      //  [160, 150, 140, 130, 120, 110, 105]
      let distance: number;
      if (temp === 160) {
        distance = 5000;
      } else if (temp === 130) {
        distance = 10000;
      } else {
        // Значение по умолчанию или для других случаев
        distance = 15000;
      }

      for (let i = 0; i < count; i++) {
        if (distance > (distance * 2)) {
          break;
        }
        
        // Округляем relaxDistance до ближайших 100
        const relaxDistance = Math.ceil(distance * 0.2 / 1000) * 1000;
        
        trainingArray.push({
          id: idCounter++,
          distance: distance,
          temp: temp,
          watt: watt,
          reps: reps,
          sets: sets,
          minTemp: temp * 1.05,
          maxTemp: temp * 1.13,
          minWatt: watt * 1.05,
          maxWatt: watt * 1.13,
          relaxTemp: temp * 1.25,
          relaxWatt: watt * 1.25,
          relaxDistance: relaxDistance,
          totalDistance: (distance + relaxDistance) * reps * sets,
          totalTime: (distance + relaxDistance) * reps * sets 
        });
        
        distance += 1000;
      }
    }
  }

  // Сортируем массив по totalDistance в порядке возрастания
  trainingArray.sort((a, b) => a.totalDistance - b.totalDistance);

  // Дополнительная сортировка для одинаковой дистанции
  trainingArray.sort((a, b) => {
    if (a.totalDistance === b.totalDistance) {
      // Сначала сравниваем по sets (большие значения вперед)
      if (b.sets !== a.sets) {
        return b.sets - a.sets;
      }
      // Затем сравниваем по reps (большие значения вперед)
      if (b.reps !== a.reps) {
        return b.reps - a.reps;
      }
    }
    return a.totalDistance - b.totalDistance;
  });

  // Перезаписываем id в соответствии с новой сортировкой
  trainingArray.forEach((training, index) => {
    training.id = index + 1;
  });

  // Вывод первых 50 сгенерированных тренировок на консоль
  console.log("Первые 50 сгенерированных тренировок (ОРАНЖЕВЫЙ ВЕЛОСИПЕД):");
  console.log("=================================");
  
  // Берем только первые 50 элементов
  const first50Trainings = trainingArray.slice(0, 50);
  
  first50Trainings.forEach(training => {
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
  console.log(`Выведено первых: ${first50Trainings.length}`);

  return trainingArray;
}