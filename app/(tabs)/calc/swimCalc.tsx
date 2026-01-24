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
export default function createTrainingArray_swim(
  temp: number,
): RunLong[] {
  const trainingArray: RunLong[] = [];
  let idCounter = 1;

  const count = 40;

  //ЗАДАЕМ ОСНОВНЫЕ УСЛОВИЯ ТРЕНИРОВКИ
  let terms_worktimemin = 360
  let terms_worktimemax = 720
  let terms_coefficient = 0.15
  // вычисляем начальную дистанцию рабочего отрезка 
  let terms_workdistance_min = Math.floor(terms_worktimemin / temp ) * 100 
  let terms_workdistance_max = Math.ceil(terms_worktimemax / temp ) * 100 
  // задаем предельные значения РАБОТЫ внутри тренировки из соображений 10 минут разминка \ 10 минут замика - дополнительно к работе/ 
  let terms_totaltime_min = 1800
  let terms_totaltime_max = 3000
  // задаем шаг внутри рабочего отрезка
  let terms_distance_plus = Math.round((terms_totaltime_max - terms_totaltime_min) / 10 / temp / 100) * 100;
  let totalTime = 0

  // Сначала собираем все тренировки
  // Задаем количество ПОДХОДОВ (до большой паузы)
  for (let sets = 1; sets <= 3; sets++) {
     if (totalTime > terms_totaltime_max) {
          break;
        }
    
      // Задаем количество ПОВТОРОВ (количество работ внутри подхода)
    for (let reps = 1; reps <= 3; reps++) {
    

      
    //  newTimeOptions = [160, 150, 140, 130, 120, 110, 105];

 
  // Для ЗЕЛЕНЫХ В2 тренировок время работы должно быть 6 - 12 минут
  // 2:40 - 160 сукунд 
  // 200 меторов - 320 секунд
  // 500 метров - 800 секунд 
  // 6 минут = 360 секунд 
  // 12 минут = 720 секунд
  // минимальная врея/дистация 50 минут - 10 мин на разминку 10 мин на заминку - 30 минут (1800 секунд) на работут - 
  // максимальное время/дистанция 70 минут - 10 мин на разминку 10 мин на заминку - 50 минут (3000 секунд) на работут -   
  // Для ЗЕЛЕНЫХ В2 тренировок время отдыха должно быть 10-15% от работы
   // Задаем СТАРТОВУЮ дистанцию работы внутри ПОВТОРА. 
   


      let distance: number;
      distance = terms_workdistance_min
 
      for (let i = 0; i < count; i++) {
        // ограничиваем дистанцию РАБОЧЕГО ПОДХОДА
        if (distance > terms_workdistance_max) {
          break;
        }
    
        
        // Округляем relaxDistance до ближайших 100
        const relaxDistance = Math.ceil(distance * terms_coefficient / 100) * 100;
        totalTime = (distance + relaxDistance) * reps * sets / 100 * temp

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
          totalTime: (distance + relaxDistance) * reps * sets / 100 * temp
        });
        
        // задаем ШАГ плюса к ДИСТАНЦИИ РАБОТЫ
        distance += terms_distance_plus;
        
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

  // Вывод всех сгенерированных тренировок на консоль
  console.log("Все сгенерированные тренировки:");
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

  // Вывод количества тренировок и всех переменных terms_
  console.log(`Всего сгенерировано тренировок: ${trainingArray.length}`);
  console.log("\nПараметры генерации (terms_ переменные):");
  console.log("==========================================");
  console.log(`terms_worktimemin: ${terms_worktimemin} сек (${formatTime(terms_worktimemin/60)} мин)`);
  console.log(`terms_worktimemax: ${terms_worktimemax} сек (${formatTime(terms_worktimemax/60)} мин)`);
  console.log(`terms_coefficient: ${terms_coefficient} (${terms_coefficient * 100}%)`);
  console.log(`terms_workdistance_min: ${terms_workdistance_min}м`);
  console.log(`terms_workdistance_max: ${terms_workdistance_max}м`);
  console.log(`terms_totaltime_min: ${terms_totaltime_min} сек (${formatTime(terms_totaltime_min/60)} мин)`);
  console.log(`terms_totaltime_max: ${terms_totaltime_max} сек (${formatTime(terms_totaltime_max/60)} мин)`);
  console.log(`terms_distance_plus: ${terms_distance_plus}м`);
  console.log(`Входной параметр temp: ${formatTime(temp)} мин/км`);

  return trainingArray;
}