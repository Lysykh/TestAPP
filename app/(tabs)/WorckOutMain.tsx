import React from 'react';
import { Image, Text, View } from 'react-native';
import CalcRun from './calculator/calc_run';
import createTrainingArray from './runCalc';
import { secondsToTimeString } from './SelectSportLevel';
import styles from './styles';

interface WorckOutMainProps {
  workoutLevel: number;
  setWorkoutLevel: React.Dispatch<React.SetStateAction<number>>;
  sportType: string | null;
  colorType: string | null;
  selectedTimeSeconds: number | null;
  
}

const WorckOutMain = ({ 
  workoutLevel, 
  setWorkoutLevel, 
  sportType, 
  colorType, 
  selectedTimeSeconds 
}: WorckOutMainProps) => {
  
  const getSportName = (sport: string | null): string => {
    if (!sport) return 'не выбран';
    switch (sport) {
      case 'swim':
        return 'плавание';
      case 'run':
        return 'бег';
      case 'bike':
        return 'велосипед';
      default:
        return sport;
    }
  };

let green1 = createTrainingArray(selectedTimeSeconds);

  const getColorName = (color: string | null): string => {
    if (!color) return 'не выбран';
    switch (color) {
      case 'orange':
        return 'оранжевый';
      case 'green':
        return 'зеленый';
      case 'red':
        return 'красный';
      case 'grey':
        return 'серый';
      default:
        return color;
    }
  };

  // Расчет времени: выбранное время + 40 секунд + 70 секунд
let RaschetBeg;
if (selectedTimeSeconds !== null) {
    RaschetBeg = selectedTimeSeconds + 40 + 70;
} else {
    RaschetBeg = null;
}

// worckoutTemp - это переменная которая забирает отфильтрованное значение из массива green. Нафильтровать и сохранить можно было много. Пример ниже но я остановился на этом

//   {green1
//     .filter(item => item.id === workoutLevel) // Фильтруем только элемент с id = 14
//     .map(item => 
//       `ID: ${item.id}, Дистанция: ${item.distance}m, Темп: ${item.minTemp}s, Темп: ${item.maxTemp}s, Повторы: ${item.reps}, Подходы: ${item.sets}`
//     ).join('')}

let worckoutTemp = green1
    .filter(item => item.id === workoutLevel) // Фильтруем только элемент с id = как WorckOutLevel
    .map(item => 
      `${item.minTemp}`
    ).join('')

    
  return (
    <View style={styles.worckOutMainContainer}>
      <Text style={styles.workoutSectionTitle}>РАЗМИНКА</Text>
  
      <View style={styles.workoutLevelDisplay}>
        <Text>Уровень: {workoutLevel}</Text>
        <Text>Спорт: {getSportName(sportType)}</Text>
        <Text>Цвет: {getColorName(colorType)}</Text>

<Text style={styles.valueText}>
  {green1
    .filter(item => item.id === workoutLevel) // Фильтруем только элемент с id = 14
    .map(item => 
      `ID: ${item.id}, Дистанция: ${item.distance}m, Темп: ${item.minTemp}s, Темп: ${item.maxTemp}s, Темп отдыха: ${item.relaxTemp}s, Повторы: ${item.reps}, Подходы: ${item.sets}, Всего дистанция: ${item.totalDistance}, Дистанция отдыха: ${item.relaxDistance}`
    ).join('')}
</Text>


        <Text>Время на 100м: {selectedTimeSeconds !== null 
          ? secondsToTimeString(selectedTimeSeconds) 
          : 'не выбрано'
        }</Text>
        {RaschetBeg !== null && (
          <Text>Расчет бега: {secondsToTimeString(worckoutTemp)} 
            {"\n"}({secondsToTimeString(worckoutTemp!)} + 40с + 70с)
          </Text>
        )}
        {sportType && colorType && (
          <Text>Идентификатор: {sportType}_{colorType}</Text>

        )}
      </View> 
      
      <View style={styles.workoutRow}>
        <View style={[styles.stick, styles.grayStick]} />
        
        <View style={styles.iconsColumn}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/time_b.png')} 
              style={styles.smallIcon}
            />
          </View>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/time_b.png')} 
              style={styles.smallIcon}
            />
          </View>
        </View>
        
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>8 : 15</Text>
          <Text style={styles.valueText}>Расчет бега: {secondsToTimeString(worckoutTemp)} 
          </Text>
        </View>
      </View> 

      <Text style={styles.workoutSectionTitle}>ОСНОВНОЕ ЗАДАНИЕ</Text>
      
      <View style={styles.tagRow}>
        <View style={[styles.stick, styles.whiteStick]} />
        
        <View style={styles.singleIconContainer}>
          <Image 
            source={require('../../assets/images/approaches_b.png')} 
            style={styles.mediumIcon}
          />
        </View>
        
        <View style={styles.singleValueContainer}>
          <Text style={styles.valueText}>2 повторений</Text>
        </View>
      </View> 

      <View style={styles.tagRow}>
        <View style={[styles.stick, styles.whiteStick]} />
        
        <View style={styles.singleIconContainer}>
          <Image 
            source={require('../../assets/images/repeats_b.png')} 
            style={styles.mediumIcon}
          />
        </View>
        
        <View style={styles.singleValueContainer}>
          <Text style={styles.valueText}>2 повторений</Text>
        </View>
      </View> 

      <View style={styles.workoutRow}>
        <View style={[styles.stick, styles.goldenStick]} />
        
        <View style={styles.iconsColumn}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/time_b.png')} 
              style={styles.smallIcon}
            />
          </View>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/tempo_b.png')} 
              style={styles.smallIcon}
            />
          </View>
        </View>
        
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>8 : 15</Text>
          <Text style={styles.valueText}>60 : 15</Text>
        </View>
      </View> 

      <View style={styles.workoutRow}>
        <View style={[styles.stick, styles.beigeStick]} />
        
        <View style={styles.iconsColumn}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/time_b.png')} 
              style={styles.smallIcon}
            />
          </View>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/tempo_b.png')} 
              style={styles.smallIcon}
            />
          </View>
        </View>
        
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>8 : 15</Text>
          <Text style={styles.valueText}>60 : 15</Text>
        </View>
      </View> 

      <View style={styles.tagRow}>
        <View style={[styles.stick, styles.lightGrayStick]} />
        
        <View style={styles.singleValueContainer}>
          <Text style={styles.valueText}>Отдых между подходами 3 минуты</Text>
        </View>
      </View> 

      <Text style={styles.workoutSectionTitle}>ЗАМИНКА</Text>
      
      <View style={styles.workoutRow}>
        <View style={[styles.stick, styles.grayStick]} />
        
        <View style={styles.iconsColumn}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/time_b.png')} 
              style={styles.smallIcon}
            />
          </View>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/tempo_b.png')} 
              style={styles.smallIcon}
            />
          </View>
        </View>
        
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>8 : 15</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.valueText}>60 : 15 ВСТАВЛЯЮ </Text> 
            <CalcRun a={60} b={15} /> 
          </View>
        </View>
      </View>       
    </View>
  );
};

export default WorckOutMain;