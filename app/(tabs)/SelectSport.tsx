// Импортируем необходимые компоненты и хуки из React и React Native
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Создаем основной компонент с использованием function declaration
function SportSelect() {
  // Состояния для хранения текущих типов изображений для каждого вида спорта
  const [swimType, setSwimType] = useState('orange');
  const [runType, setRunType] = useState('grey');
  const [bikeType, setBikeType] = useState('grey');
  
  // Состояние для хранения выбранного вида спорта
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  // Состояние для хранения выбранного цвета тренировки
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  
  // Финальные переменные для экспорта (на английском)
  const [ColorTypeFinal, setColorTypeFinal] = useState<string | null>(null);
  const [SportTypeFinal, setSportTypeFinal] = useState<string | null>(null);

  // Эффект для обновления финальных переменных при изменении выбора
  useEffect(() => {
    setColorTypeFinal(selectedColor);
    setSportTypeFinal(selectedSport);
    
    // Логирование финальных значений для отладки
    console.log('FINAL VALUES - Sport:', SportTypeFinal, 'Color:', ColorTypeFinal);
  }, [selectedSport, selectedColor]);

  // Функция для получения следующего типа иконки на основе текущего
  const getNextType = (currentType: string): string => {
    switch (currentType) {
      case 'orange':
        return 'green';
      case 'green':
        return 'red';
      case 'red':
        return 'grey';
      case 'grey':
        return 'orange';
      default:
        return 'orange';
    }
  };

  // Функция для получения русского названия цвета (только для отображения)
  const getColorName = (color: string): string => {
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

  // Функция для получения русского названия спорта (только для отображения)
  const getSportName = (sport: string): string => {
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

  // Обработчик нажатия для плавания
  const handleSwimPress = () => {
    const nextType = getNextType(swimType);
    setSwimType(nextType);
    setSelectedSport('swim'); // Английское название для финальной переменной
    setSelectedColor(nextType); // Английское название цвета
    console.log('sport: swim, swimType: ' + nextType);
  };

  // Обработчик нажатия для бега
  const handleRunPress = () => {
    const nextType = getNextType(runType);
    setRunType(nextType);
    setSelectedSport('run'); // Английское название для финальной переменной
    setSelectedColor(nextType); // Английское название цвета
    console.log('sport: run, runType: ' + nextType);
  };

  // Обработчик нажатия для велоспорта
  const handleBikePress = () => {
    const nextType = getNextType(bikeType);
    setBikeType(nextType);
    setSelectedSport('bike'); // Английское название для финальной переменной
    setSelectedColor(nextType); // Английское название цвета
    console.log('sport: bike, bikeType: ' + nextType);
  };

  // Вспомогательная функция для получения изображения плавания
  const getSwimImage = () => {
    switch (swimType) {
      case 'orange':
        return require('./swim_orange.png');
      case 'green':
        return require('./swim_green.png');
      case 'red':
        return require('./swim_red.png');
      case 'grey':
        return require('./swim_grey.png');
      default:
        return require('./swim_orange.png');
    }
  };

  // Вспомогательная функция для получения изображения бега
  const getRunImage = () => {
    switch (runType) {
      case 'orange':
        return require('./run_orange.png');
      case 'green':
        return require('./run_green.png');
      case 'red':
        return require('./run_red.png');
      case 'grey':
        return require('./run_grey.png');
      default:
        return require('./run_grey.png');
    }
  };

  // Вспомогательная функция для получения изображения велоспорта
  const getBikeImage = () => {
    switch (bikeType) {
      case 'orange':
        return require('./bike_orange.png');
      case 'green':
        return require('./bike_green.png');
      case 'red':
        return require('./bike_red.png');
      case 'grey':
        return require('./bike_grey.png');
      default:
        return require('./bike_grey.png');
    }
  };

  // Функция для экспорта финальных значений (можно использовать в других компонентах)
  const exportFinalValues = () => {
    return {
      SportTypeFinal,
      ColorTypeFinal
    };
  };

  // Возвращаем JSX разметку компонента
  return (
    <View style={{
      borderRadius: 10, 
      overflow: 'hidden',
      backgroundColor: '#F2F2F2',
      margin: 5,
    }}>
      {/* Заголовок секции */}
      <Text style={{ padding: 10, fontWeight: 'bold' }}>ВИД СПОРТА</Text>
      
      {/* Основной контейнер для видов спорта с горизонтальной прокруткой */}
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={{
          backgroundColor: '#F2F2F2',
        }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 20,
        }}
      >
        {/* Иконка плавания */}
        <TouchableOpacity onPress={handleSwimPress} style={{ marginRight: 10 }}>
          <ImageBackground
            source={getSwimImage()}
            style={{
              width: 130,
              height: 150,
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            resizeMode="contain"
          >
            <Text style={{ marginTop: 100 }}>Плавание {swimType}</Text>
          </ImageBackground>
        </TouchableOpacity>
        
        {/* Иконка бега */}
        <TouchableOpacity onPress={handleRunPress} style={{ marginRight: 10 }}>
          <ImageBackground
            source={getRunImage()}
            style={{
              width: 130,
              height: 150,
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            resizeMode="contain"
          >
            <Text style={{ marginTop: 100 }}>Бег {runType}</Text>
          </ImageBackground>
        </TouchableOpacity>
        
        {/* Иконка велоспорта */}
        <TouchableOpacity onPress={handleBikePress} style={{ marginRight: 10 }}>
          <ImageBackground
            source={getBikeImage()}
            style={{
              width: 130,
              height: 150,
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            resizeMode="contain"
          >
            <Text style={{ marginTop: 100 }}>Велосипед {bikeType}</Text>
          </ImageBackground>
        </TouchableOpacity>

        {/* Дополнительные элементы для демонстрации прокрутки */}
        <View style={{
          width: 130,
          height: 150,
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10
        }}>
          <Text>Дополнительный вид спорта 1</Text>
        </View>
        
        <View style={{
          width: 130,
          height: 150,
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10
        }}>
          <Text>Дополнительный вид спорта 2</Text>
        </View>
      </ScrollView>
      
      {/* Отображение выбранного вида спорта и цвета */}
      <Text style={{ padding: 10, fontStyle: 'italic' }}>
        Выбран: {selectedSport ? getSportName(selectedSport) : 'ничего'}{selectedColor ? `, цвет: ${getColorName(selectedColor)}` : ''}
      </Text>
      
      {/* Отображение финальных значений на английском (для отладки) */}
      <Text style={{ padding: 10, fontStyle: 'italic', fontSize: 12, color: 'gray' }}>
        Final values: Sport={SportTypeFinal || 'null'}, Color={ColorTypeFinal || 'null'}
      </Text>
    </View>
  );
}

// Экспортируем компонент для использования в других частях приложения
export default SportSelect;