import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface SelectSportLevelProps {
  onTimeChange: (timeInSeconds: number | null) => void;
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

const SelectSportLevel: React.FC<SelectSportLevelProps> = ({ onTimeChange }) => {
  const [selectedTimeSeconds, setSelectedTimeSeconds] = useState<number | null>(null);
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  // Массив времени в секундах для внутренних вычислений
  const timeOptionsInSeconds = [120, 115, 110, 105, 100, 95, 90];
  
  // Массив для отображения пользователю
  const timeOptionsForDisplay = ['02:00', '01:55', '01:50', '01:45', '01:40', '01:35', '01:30'];

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
            <Text style={{ textAlign: 'center' }}>
              100М{"\n"}
              {secondsToTimeString(timeInSeconds)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Дополнительная информация для отладки (можно удалить) */}
      <Text style={{ padding: 10, fontSize: 12, color: '#666' }}>
        Выбрано: {selectedTimeSeconds !== null 
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