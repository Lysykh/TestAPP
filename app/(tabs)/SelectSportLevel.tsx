import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface SelectSportLevelProps {
  onTimeChange: (timeInSeconds: number | null) => void;
  selectedSport: string | null; // Изменяем тип на string | null
}

// Функция для преобразования времени в секунды
const timeStringToSeconds = (timeString: string): number => {
  const [minutes, seconds] = timeString.split(':').map(Number);
  return minutes * 60 + seconds;
};

// Функция для преобразования секунд в строку мм:сс
const secondsToTimeString = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const SelectSportLevel: React.FC<SelectSportLevelProps> = ({ onTimeChange, selectedSport }) => {
  const [selectedTimeSeconds, setSelectedTimeSeconds] = useState<number | null>(null);
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [timeOptionsInSeconds, setTimeOptionsInSeconds] = useState<number[]>([]);
  const [buttonDistance, setButtonDistance] = useState<number>(100);
  const [distanceText, setDistanceText] = useState<string>('100м');

  // Обновляем параметры при изменении выбранного вида спорта
  useEffect(() => {
    let newTimeOptions: number[];
    let newButtonDistance: number;
    let newDistanceText: string;

    switch (selectedSport) {
      case 'swim':
        newTimeOptions = [120, 115, 110, 105, 100, 95, 90];
        newButtonDistance = 100;
        newDistanceText = '100м';
        break;
      case 'run':
        newTimeOptions = [1200, 1150, 1100, 1050, 1000, 950, 900];
        newButtonDistance = 1000;
        newDistanceText = '1км';
        break;
      case 'bike':
        newTimeOptions = [12000, 11500, 11000, 10500, 10000, 9500, 9000];
        newButtonDistance = 1000;
        newDistanceText = '1км';
        break;
      default:
        // Значения по умолчанию (до выбора спорта)
        newTimeOptions = [120, 115, 110, 105, 100, 95, 90];
        newButtonDistance = 100;
        newDistanceText = '100м';
    }

    setTimeOptionsInSeconds(newTimeOptions);
    setButtonDistance(newButtonDistance);
    setDistanceText(newDistanceText);
    
    // Сбрасываем выбор при изменении вида спорта
    setSelectedBox(null);
    setSelectedTimeSeconds(null);
    onTimeChange(null);
  }, [selectedSport, onTimeChange]);

  const handleBoxPress = (index: number, timeInSeconds: number) => {
    setSelectedBox(index);
    setSelectedTimeSeconds(timeInSeconds);
    onTimeChange(timeInSeconds);
  };

  return (
    <View style={{
      borderRadius: 10, 
      overflow: 'hidden',
      backgroundColor: '#F2F2F2',
      margin: 5,
    }}>
      <Text style={{ padding: 10, fontWeight: 'bold' }}>ТВОЙ СПОРТИВНЫЙ УРОВЕНЬ</Text>
      
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={{
          backgroundColor: '#F2F2F2',
        }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        {timeOptionsInSeconds.map((timeInSeconds, index) => (
          <TouchableOpacity
            key={timeInSeconds}
            style={[
              {
                width: 70,
                height: 70,
                backgroundColor: '#E5E5E5',
                marginRight: 10,
                borderRadius: 10,
                elevation: 3,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              },
              selectedBox === index && {
                backgroundColor: '#BCBCBC',
              }
            ]}
            onPress={() => handleBoxPress(index, timeInSeconds)}
          >
            <Text style={{ textAlign: 'center', fontSize: 12 }}>
              {distanceText}{"\n"}
              {secondsToTimeString(timeInSeconds)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Дополнительная информация для отладки */}
      <Text style={{ padding: 10, fontSize: 12, color: '#666' }}>
        Выбранный спорт: {selectedSport || 'не выбран'}
      </Text>
      <Text style={{ padding: 10, fontSize: 12, color: '#666' }}>
        Выбрано время: {selectedTimeSeconds !== null 
          ? `${secondsToTimeString(selectedTimeSeconds)} (${selectedTimeSeconds} секунд)`
          : 'не выбрано'
        }
      </Text>
    </View>
  );
};

// Экспортируем вспомогательные функции для использования в других компонентах
export { secondsToTimeString, timeStringToSeconds };
export default SelectSportLevel;