// описание калькулятора регулярный бег
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
export default function createTrainingArray_swim(
  temp: number,
): RunLong[] {
  const trainingArray: RunLong[] = [];
  let idCounter = 1;

  const count = 40;

  // Сначала собираем все тренировки
  for (let sets = 1; sets <= 5; sets++) {
    for (let reps = 2; reps <= 12; reps++) {
      
      
    //  newTimeOptions = [160, 150, 140, 130, 120, 110, 105];

  
      let distance: number;
  if (temp === 160) {
    distance = 200;
  } else if (temp === 140) {
    distance = 400;
  } else {
    // Значение по умолчанию или для других случаев
    distance = 600;
  }  


      for (let i = 0; i < count; i++) {
        if (distance > 2400) {
          break;
        }
        
        // Округляем relaxDistance до ближайших 100
        const relaxDistance = Math.ceil(distance * 0.2 / 100) * 100;
        
        trainingArray.push({
          id: idCounter++,
          distance: distance,
          temp: temp,
          reps: reps,
          sets: sets,
          minTemp: temp * 1.05,
          maxTemp: temp,
          relaxTemp: temp * 1.25,
          relaxDistance: relaxDistance,
          totalDistance: (distance + relaxDistance) * reps * sets,
          totalTime: (distance + relaxDistance) * reps * sets
        });
        
        distance += 100;
      }
    }
  }

  // Сортируем массив по totalDistance в порядке возрастания
  trainingArray.sort((a, b) => a.totalDistance - b.totalDistance);

  // Перезаписываем id в соответствии с новой сортировкой
  trainingArray.forEach((training, index) => {
    training.id = index + 1;
  });

  return trainingArray;
}