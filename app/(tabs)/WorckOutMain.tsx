import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import createTrainingArray_run from './calc/runCalc';
import createTrainingArray_orange_run from './calc/runCalcOrange';
import createTrainingArray_red_run from './calc/runCalcRed';

import createTrainingArray_swim from './calc/swimCalc';
import createTrainingArray_orange_swim from './calc/swimCalcOrange';
import createTrainingArray_red_swim from './calc/swimCalcRed';

import createTrainingArray_bike from './calc/bikeCalc';
import createTrainingArray_orange_bike from './calc/bikeCalcOrange';
import createTrainingArray_red_bike from './calc/bikeCalcRed';

import { getWattsForTime, secondsToTimeString } from './SelectSportLevel';
import styles from './styles';

interface WorkoutItem {
  id: number;
  distance: number;
  minTemp: number;
  maxTemp: number;
  minWatt: number;
  maxWatt: number;
  relaxTemp: number;
  relaxWatt: number;
  reps: number;
  sets: number;
  totalDistance: number;
  relaxDistance: number;
  watt: number;
  temp: number;
}

interface WorckOutMainProps {
  workoutLevel: number;
  setWorkoutLevel: React.Dispatch<React.SetStateAction<number>>;
  sportType: string | null;
  colorType: string | null;
  selectedTimeSeconds: number | null;
}

// Интерфейс для данных с бэкенда
interface BackendItem {
  id: number;
  name: string;
  age: string;
}

const WorckOutMain = ({ 
  workoutLevel, 
  setWorkoutLevel, 
  sportType, 
  colorType, 
  selectedTimeSeconds 
}: WorckOutMainProps) => {
  
  // Состояние для данных с бэкенда
  const [backendData, setBackendData] = useState<BackendItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Состояние для ответа GigaChat
  const [gigaResponse, setGigaResponse] = useState<string>("");
  const [loadingGiga, setLoadingGiga] = useState<boolean>(false);
  const [errorGiga, setErrorGiga] = useState<string | null>(null);

  // Функция для получения данных с бэкенда
  const fetchBackendData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://127.0.0.1:811/get-items/2', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data from backend:', data);
      setBackendData(data);
      
    } catch (err) {
      console.error('Error fetching backend data:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Функция для вызова GigaChat
  const callGigaChat = async () => {
    setLoadingGiga(true);
    setErrorGiga(null);
    setGigaResponse("");
    
    try {
      // ПРАВИЛЬНЫЙ POST запрос с промптом в URL
      const promptText = "Привет как дела?";
      const response = await fetch(`http://127.0.0.1:811/request_gigachat2/${encodeURIComponent(promptText)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
      }

      // Получаем ответ как текст (GigaChat возвращает строку)
      const responseText = await response.text();
      console.log('Ответ от GigaChat:', responseText);
      setGigaResponse(responseText);
      
    } catch (err) {
      console.error('Ошибка при вызове GigaChat:', err);
      setErrorGiga(err instanceof Error ? err.message : 'Неизвестная ошибка');
    } finally {
      setLoadingGiga(false);
    }
  };

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    fetchBackendData();
  }, []);

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
            return (time: number) => createTrainingArray_bike(time, getWattsForTime(time));
          case 'orange':
            return (time: number) => createTrainingArray_orange_bike(time, getWattsForTime(time));
          case 'red':
            return (time: number) => createTrainingArray_red_bike(time, getWattsForTime(time));
          default:
            return (time: number) => createTrainingArray_bike(time, getWattsForTime(time));
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

  // Функция для отображения ватт (только для велосипеда)
  const renderWattInfo = (minWatt: number, maxWatt: number) => {
    if (sportType === 'bike' && !isNaN(minWatt) && !isNaN(maxWatt)) {
      return (
        <Text style={styles.valueText}>
          {Math.round(minWatt)} - {Math.round(maxWatt)}W
        </Text>
      );
    }
    return null;
  };

  // Функция для безопасного отображения ватт
  const renderSingleWatt = (watt: number) => {
    if (sportType === 'bike' && !isNaN(watt)) {
      return (
        <Text style={styles.valueText}>
          {Math.round(watt)}W
        </Text>
      );
    }
    return null;
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
        {sportType === 'bike' && workoutData.watt && !isNaN(workoutData.watt) && (
          <Text style={styles.workoutInfoText}>
            Мощность ПАНО: {Math.round(workoutData.watt)}W
          </Text>
        )}
      </View>

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
          {sportType === 'bike' && (
            <View style={styles.iconContainer}>
              <Image 
                source={require('../../assets/images/watt_b.png')} 
                style={styles.smallIcon}
              />
            </View>
          )}
        </View>
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>10:00</Text>
          <Text style={styles.valueText}>
            {secondsToTimeString(workoutData.relaxTemp)}
          </Text>
          {sportType === 'bike' && renderSingleWatt(workoutData.relaxWatt)}
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
          {sportType === 'bike' && (
            <View style={styles.iconContainer}>
              <Image 
                source={require('../../assets/images/watt_b.png')} 
                style={styles.smallIcon}
              />
            </View>
          )}
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
          {sportType === 'bike' && renderWattInfo(workoutData.minWatt, workoutData.maxWatt)}
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
          {sportType === 'bike' && (
            <View style={styles.iconContainer}>
              <Image 
                source={require('../../assets/images/watt_b.png')} 
                style={styles.smallIcon}
              />
            </View>
          )}
          <View style={styles.iconContainer}>
            <Image 
              source={require('../../assets/images/distance.png')} 
              style={styles.smallIcon}
            />
          </View>
        </View>
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>{secondsToTimeString(workoutData.relaxTemp)}</Text>
          {sportType === 'bike' && renderSingleWatt(workoutData.relaxWatt)}
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
          {sportType === 'bike' && (
            <View style={styles.iconContainer}>
              <Image 
                source={require('../../assets/images/watt_b.png')} 
                style={styles.smallIcon}
              />
            </View>
          )}
        </View>
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>10:00</Text>
          <View style={styles.calcContainer}>
            <Text style={styles.valueText}>
              {secondsToTimeString(workoutData.relaxTemp)}
            </Text>
          </View>
          {sportType === 'bike' && renderSingleWatt(workoutData.relaxWatt)}
        </View>
      </View>

      {/* Блок с данными из бэкенда (ПЕРЕНЕСЕН В КОНЕЦ) */}
      <View style={extendedStyles.backendDataContainer}>
        <Text style={styles.workoutSectionTitle}>ДАННЫЕ ИЗ БАЗЫ ДАННЫХ</Text>
        
        {/* Кнопка для вызова GigaChat */}
        <TouchableOpacity 
          style={extendedStyles.gigaButton}
          onPress={callGigaChat}
          disabled={loadingGiga}
        >
          <Text style={extendedStyles.gigaButtonText}>
            {loadingGiga ? 'Загрузка...' : 'Спросить у GigaChat'}
          </Text>
        </TouchableOpacity>
        
        {loading ? (
          <Text style={extendedStyles.backendText}>Загрузка данных...</Text>
        ) : error ? (
          <Text style={extendedStyles.backendError}>Ошибка: {error}</Text>
        ) : backendData ? (
          <View style={extendedStyles.backendInfoContainer}>
            <Text style={extendedStyles.backendText}>ID: {backendData.id}</Text>
            <Text style={extendedStyles.backendText}>Name: {backendData.name}</Text>
            <Text style={extendedStyles.backendText}>Age: {backendData.age}</Text>
            
            {/* Блок ответа GigaChat */}
            <View style={extendedStyles.gigaResponseContainer}>
              <Text style={styles.workoutSectionTitle}>ОТВЕТ GIGACHAT:</Text>
              {loadingGiga ? (
                <Text style={extendedStyles.backendText}>Запрашиваю ответ...</Text>
              ) : errorGiga ? (
                <Text style={extendedStyles.backendError}>Ошибка: {errorGiga}</Text>
              ) : gigaResponse ? (
                <Text style={extendedStyles.gigaResponseText}>{gigaResponse}</Text>
              ) : (
                <Text style={extendedStyles.backendText}>Нажмите кнопку выше</Text>
              )}
            </View>
          </View>
        ) : (
          <Text style={extendedStyles.backendText}>Данные не получены</Text>
        )}
      </View>
    </View>
  );
};

// Добавляем стили для бэкенд данных (серо-белая палитра, оранжевая кнопка)
const extendedStyles = {
  ...styles,
  backendDataContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f9fa', // Светло-серый фон
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dee2e6', // Серый бордер
  },
  backendInfoContainer: {
    marginTop: 10,
  },
  backendText: {
    fontSize: 14,
    color: '#495057', // Темно-серый текст
    marginBottom: 5,
  },
  backendError: {
    fontSize: 14,
    color: '#dc3545', // Красный для ошибок
    marginBottom: 5,
  },
  gigaButton: {
    backgroundColor: '#fd7e14', // Оранжевый цвет как в теме
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 2, // Тень для Android
    shadowColor: '#000', // Тень для iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  gigaButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  gigaResponseContainer: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#ffffff', // Белый фон
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ced4da', // Светло-серый бордер
  },
  gigaResponseText: {
    fontSize: 14,
    color: '#212529', // Очень темно-серый почти черный
    fontStyle: 'italic',
    marginTop: 5,
    lineHeight: 20,
  },
};

export default WorckOutMain;