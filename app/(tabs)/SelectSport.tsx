// Импортируем необходимые компоненты и хуки из React и React Native
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Создаем основной компонент с использованием function declaration
function SportSelect() {
  // Состояние для хранения выбранного вида спорта
  // Изначально null - ничего не выбрано
  const [sport, setSport] = useState<string | null>(null);
  
  // Состояние для хранения текущего типа изображения плавания
  // Изначально 'orange' - показываем оранжевую иконку
  const [swimType, setSwimType] = useState('orange');

  // Функция-обработчик нажатия на иконку плавания
  function handleSwimPress() {
    // Определяем следующий тип иконки на основе текущего
    let nextType;
    
    // Используем switch для циклического перебора состояний
    switch (swimType) {
      case 'orange':
        nextType = 'green'; // После оранжевого - зеленый
        break;
      case 'green':
        nextType = 'red';   // После зеленого - красный
        break;
      case 'red':
        nextType = 'grey';  // После красноаго - серый
        break;
      case 'grey':
        nextType = 'orange'; // После серого снова оранжевый (зацикливаем)
        break;
      default:
        nextType = 'orange'; // По умолчанию - оранжевый
    }
    
    // Обновляем состояния
    setSwimType(nextType);  // Устанавливаем новый тип иконки
    setSport('swim');       // Фиксируем, что выбран вид спорта 'swim'
    
    // Для отладки: выводим текущие значения в консоль
    console.log('sport: swim, swimType: ' + nextType);
  }

  // Вспомогательная функция для получения нужного изображения
  // в зависимости от текущего состояния swimType
  function getSwimImage() {
    // В зависимости от текущего типа возвращаем соответствующее изображение
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
        return require('./swim_orange.png'); // По умолчанию оранжевое
    }
  }

  // Возвращаем JSX разметку компонента
  return (
    // undersector
    <View style={{
      borderRadius: 10, 
      overflow: 'hidden', // используем просто 'hidden' вместо 'hiddenX'
      backgroundColor: '#F2F2F2',
      margin: 5,
    }}>
      {/* Заголовок секции */}
      <Text style={{ padding: 10, fontWeight: 'bold' }}>ВИД СПОРТА</Text>
      
      {/* Основной контейнер для видов спорта с горизонтальной прокруткой */}
      <ScrollView 
        horizontal={true} // включаем горизонтальную прокрутку
        showsHorizontalScrollIndicator={true} // показываем индикатор прокрутки
        style={{
          backgroundColor: '#F2F2F2',
        }}
        contentContainerStyle={{
          paddingHorizontal: 10, // отступ слева и справа для контейнера
          paddingBottom: 20, // нижний отступ для лучшего скролла
        }}
      >
        {/* Контейнер для иконки плавания с обработчиком нажатия */}
        <TouchableOpacity onPress={handleSwimPress} style={{ marginRight: 10 }}>
          <ImageBackground
            source={getSwimImage()} // Динамически выбираем изображение
            style={{
              width: 130,          // ширина квадрата
              height: 150,         // высота квадрата
              backgroundColor: '#FFFFFF', // цвет фона
              borderRadius: 10,     // небольшой радиус для углов
              justifyContent: 'center', // центрируем содержимое
              alignItems: 'center', // центрируем содержимое
            }}
            resizeMode="contain"    // Режим отображения изображения
          >
            {/* Выводим строку с обоими значениями */}
            <Text style={{ marginTop: 100 }}>{sport} {swimType}</Text>
          </ImageBackground>
        </TouchableOpacity>
        
        {/* Иконка бега (статичная, без обработчика) */}
        <View style={{ marginRight: 10 }}>
          <ImageBackground
            source={require('./run_grey.png')}
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
            <Text style={{ marginTop: 100 }}>Бег</Text>
          </ImageBackground>
        </View>
        
        {/* Иконка велоспорта (статичная, без обработчика) */}
        <View style={{ marginRight: 10 }}>
          <ImageBackground
            source={require('./bike_grey.png')}
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
            <Text style={{ marginTop: 100 }}>Велосипед</Text>
          </ImageBackground>
        </View>

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
    </View>
  );
}

// Экспортируем компонент для использования в других частях приложения
export default SportSelect;