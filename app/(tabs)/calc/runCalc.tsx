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
  reps: number;
  sets: number;
  minTemp: number | null;
  maxTemp: number | null;
  relaxTemp: number | null;
  relaxDistance: number | null;
  totalDistance: number;
  totalTime: number;
};

// Функция для создания массива тренировок с фиксированными значениями
export default function createTrainingArray_bike(
  temp: number,
): RunLong[] {
  const trainingArray: RunLong[] = [];
  let idCounter = 1;

  const count = 40;

  // Сначала собираем все тренировки
  for (let sets = 1; sets <= 5; sets++) {
    for (let reps = 1; reps <= 10; reps++) {
      
// [480, 420, 390, 375, 360, 350, 345, 340, 335, 330, 325, 320, 315, 310,];
       
  
      let distance: number;
      if (temp === 480) {
        distance = 2000;
      } else if (temp === 360) {
        distance = 4000;
      } else {
        // Значение по умолчанию или для других случаев
        distance = 5000;
      }

      // Инициализируем переменные для чередования
      let currentMaxTemp = temp * 1.13; // начальное значение maxTemp
      const minTempLimit = temp * 1.05 + 1.02; // minTemp + 0.02
      let alternateFlag = false; // флаг для чередования

      for (let i = 0; i < count; i++) {
        if (distance < 800 || distance > 10000) {
          break;
        }
        
        // Округляем relaxDistance до ближайших 100
        const relaxDistance = Math.ceil(distance * 0.2 / 1000) * 1000;
        
        trainingArray.push({
          id: idCounter++,
          distance: distance,
          temp: temp,
          reps: reps,
          sets: sets,
          minTemp: temp * 1.05,
          maxTemp: currentMaxTemp,
          relaxTemp: temp * 1.25,
          relaxDistance: relaxDistance,
          totalDistance: (distance + relaxDistance) * reps * sets,
          totalTime: (distance + relaxDistance) * reps * sets 
        });
        
        // Чередование изменений
        if (alternateFlag) {
          // Уменьшаем maxTemp на 0.01, но не ниже minTemp + 0.02
          currentMaxTemp = Math.max(currentMaxTemp - 2, minTempLimit);
        } else {
          // Увеличиваем дистанцию на 500
          distance += 500;
        }
        
        // Переключаем флаг для следующей итерации
        alternateFlag = !alternateFlag;
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

  // Выводим все тренировки в консоль
  console.log("Все собранные тренировки:");
  console.log("======================================");
  
  trainingArray.forEach(training => {
    console.log(`ID: ${training.id}`);
    console.log(`  Дистанция: ${training.distance} м`);
    console.log(`  Темп: ${training.temp}`);
    console.log(`  Повторения: ${training.reps}`);
    console.log(`  Подходы: ${training.sets}`);
    console.log(`  Мин. темп: ${training.minTemp}`);
    console.log(`  Макс. темп: ${training.maxTemp}`);
    console.log(`  Темп отдыха: ${training.relaxTemp}`);
    console.log(`  Дистанция отдыха: ${training.relaxDistance} м`);
    console.log(`  Общая дистанция: ${training.totalDistance} м`);
    console.log(`  Общее время: ${training.totalTime}`);
    console.log("--------------------------------------");
  });

  // Выводим статистику
  console.log("\nСтатистика:");
  console.log(`Всего тренировок: ${trainingArray.length}`);
  console.log(`Минимальная общая дистанция: ${Math.min(...trainingArray.map(t => t.totalDistance))} м`);
  console.log(`Максимальная общая дистанция: ${Math.max(...trainingArray.map(t => t.totalDistance))} м`);
  console.log(`Средняя общая дистанция: ${Math.round(trainingArray.reduce((sum, t) => sum + t.totalDistance, 0) / trainingArray.length)} м`);

  // Дополнительная статистика по maxTemp
  const maxTemps = trainingArray.map(t => t.maxTemp).filter(t => t !== null) as number[];
  console.log(`Минимальный maxTemp: ${Math.min(...maxTemps)}`);
  console.log(`Максимальный maxTemp: ${Math.max(...maxTemps)}`);

  return trainingArray;
}