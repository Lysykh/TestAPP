import React from 'react';
import { Image, Text, View } from 'react-native';

import createTrainingArray_run from './calc/runCalc';
import createTrainingArray_orange_run from './calc/runCalcOrange';
import createTrainingArray_red_run from './calc/runCalcRed';

import createTrainingArray_swim from './calc/swimCalc';
import createTrainingArray_orange_swim from './calc/swimCalcOrange';
import createTrainingArray_red_swim from './calc/swimCalcRed';

import createTrainingArray_bike from './calc/bikeCalc';
import createTrainingArray_orange_bike from './calc/bikeCalcOrange';
import createTrainingArray_red_bike from './calc/bikeCalcRed';

import { secondsToTimeString } from './SelectSportLevel';
import styles from './styles';

interface WorkoutItem {
  id: number;
  distance: number;
  minTemp: number;
  maxTemp: number;
  relaxTemp: number;
  reps: number;
  sets: number;
  totalDistance: number;
  relaxDistance: number;
}

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

let razryad = 1000;
if (getSportName(sportType) === 'плавание') {
    razryad = 100;
}
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

  // Функция для выбора соответствующей функции расчета в зависимости от вида спорта и цвета
  const getTrainingArrayFunction = () => {
    if (!sportType || selectedTimeSeconds === null) {
      return () => [];
    }

    switch (sportType) {
      case 'run':
        switch (colorType) {
          case 'green':
          case 'grey':
            return createTrainingArray_run;
          case 'orange':
            return createTrainingArray_orange_run;
          case 'red':
            return createTrainingArray_red_run;
          default:
            return createTrainingArray_run;
        }
      
      case 'swim':
        switch (colorType) {
          case 'green':
          case 'grey':
            return createTrainingArray_swim;
          case 'orange':
            return createTrainingArray_orange_swim;
          case 'red':
            return createTrainingArray_red_swim;
          default:
            return createTrainingArray_swim;
        }
      
      case 'bike':
        switch (colorType) {
          case 'green':
          case 'grey':
            return createTrainingArray_bike;
          case 'orange':
            return createTrainingArray_orange_bike;
          case 'red':
            return createTrainingArray_red_bike;
          default:
            return createTrainingArray_bike;
        }
      
      default:
        // Для неизвестных видов спорта используем бег как fallback
        return createTrainingArray_run;
    }
  };

  // Получаем соответствующую функцию и создаем массив тренировок
  let trainingArray: WorkoutItem[] = [];
  
  if (selectedTimeSeconds !== null && sportType) {
    const createTrainingArrayFunction = getTrainingArrayFunction();
    trainingArray = createTrainingArrayFunction(selectedTimeSeconds);
  }

  // Находим элемент тренировки по workoutLevel
  const workoutData = trainingArray.find(item => item.id === workoutLevel);

  // Если данные не найдены, показываем сообщение
  if (!workoutData) {
    return (
      <View style={styles.worckOutMainContainer}>
        <Text style={styles.workoutSectionTitle}>Данные тренировки не найдены</Text>
        <Text>Пожалуйста, выберите время и уровень тренировки</Text>
        <Text>Уровень: {workoutLevel}</Text>
        <Text>Спорт: {getSportName(sportType)}</Text>
        <Text>Цвет: {getColorName(colorType)}</Text>
        <Text>Время на 100м: {selectedTimeSeconds !== null 
          ? secondsToTimeString(selectedTimeSeconds) 
          : 'не выбрано'
        }</Text>
      </View>
    );
  }

  // Функция для получения текста в зависимости от вида спорта
  const getSportSpecificText = (baseText: string) => {
    if (!sportType) return baseText;
    
    switch (sportType) {
      case 'swim':
        return baseText.replace('бег', 'плавание');
      case 'bike':
        return baseText.replace('бег', 'езда');
      default:
        return baseText;
    }
  };

  return (
    <View style={styles.worckOutMainContainer}>
      {/* Информация о тренировке */}
      <Text style={styles.workoutSectionTitle}>О ТРЕНИРОВКЕ</Text>
      <View style={styles.workoutInfoContainer}>
        <Text style={styles.workoutInfoText}>Уровень: {workoutLevel}</Text>
        <Text style={styles.workoutInfoText}>Спорт: {getSportName(sportType)}</Text>
        <Text style={styles.workoutInfoText}>Цвет: {getColorName(colorType)}</Text>
        <Text style={styles.workoutInfoText}>Общая дистанция: {workoutData.totalDistance}</Text>
        <Text style={styles.workoutInfoText}>Общая продолжительность: {secondsToTimeString(workoutData.totalDistance / razryad * selectedTimeSeconds)} </Text>
        <Text style={styles.workoutInfoText}>
          Темп ПАНО: {selectedTimeSeconds !== null 
            ? secondsToTimeString(selectedTimeSeconds) 
            : 'не выбрано'
          }
        </Text>
      </View>

      {/* Первая строка с временем */}

      <Text style={styles.workoutSectionTitle}>РАЗМИНКА</Text>

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
          <Text style={styles.valueText}>10:00</Text>
          <Text style={styles.valueText}>
            {getSportSpecificText(`Разминочный бег: ${secondsToTimeString(workoutData.relaxTemp)}`)}
          </Text>
        </View>
      </View>

      
      <Text style={styles.workoutSectionTitle}>ОСНОВНОЕ ЗАДАНИЕ</Text>
      
      {/* Подходы */}
      <View style={styles.tagRow}>
        <View style={[styles.stick, styles.whiteStick]} />
        <View style={styles.singleIconContainer}>
          <Image 
            source={require('../../assets/images/approaches_b.png')} 
            style={styles.mediumIcon}
          />
        </View>
        <View style={styles.singleValueContainer}>
          <Text style={styles.valueText}>{workoutData.sets} подходов</Text>
        </View>
      </View>

      {/* Повторения */}
      <View style={styles.tagRow}>
        <View style={[styles.stick, styles.whiteStick]} />
        <View style={styles.singleIconContainer}>
          <Image 
            source={require('../../assets/images/repeats_b.png')} 
            style={styles.mediumIcon}
          />
        </View>
        <View style={styles.singleValueContainer}>
          <Text style={styles.valueText}>{workoutData.reps} повторений</Text>
        </View>
      </View>

      {/* Основное упражнение */}
      <View style={styles.workoutRow}>
        <View style={[styles.stick, styles.goldenStick]} />
        <View style={styles.iconsColumn}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/tempo_b.png')} 
              style={styles.smallIcon}
            />
          </View>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/distance.png')} 
              style={styles.smallIcon}
            />
          </View>
        </View>
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>
            {secondsToTimeString(workoutData.minTemp)} - {secondsToTimeString(workoutData.maxTemp)}
          </Text>
          <Text style={styles.valueText}>{workoutData.distance}m</Text>
        </View>
      </View>

      {/* Отдых */}
      <View style={styles.workoutRow}>
        <View style={[styles.stick, styles.beigeStick]} />
        <View style={styles.iconsColumn}>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/tempo_b.png')} 
              style={styles.smallIcon}
            />
          </View>
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/distance.png')} 
              style={styles.smallIcon}
            />
          </View>
        </View>
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>{secondsToTimeString(workoutData.relaxTemp)}</Text>
          <Text style={styles.valueText}>{workoutData.relaxDistance}m</Text>
        </View>
      </View>

      {/* Отдых между подходами */}
      <View style={styles.tagRow}>
        <View style={[styles.stick, styles.lightGrayStick]} />
        <View style={styles.singleValueContainer}>
          <Text style={styles.valueText}>Отдых между подходами 3 минуты</Text>
        </View>
      </View>

      <Text style={styles.workoutSectionTitle}>ЗАМИНКА</Text>
      
      {/* Заминка */}
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
          <Text style={styles.valueText}>10:00</Text>
          <View style={styles.calcContainer}>
            <Text style={styles.valueText}>
              {getSportSpecificText(`Расчет бега: ${secondsToTimeString(workoutData.relaxTemp)}`)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WorckOutMain;