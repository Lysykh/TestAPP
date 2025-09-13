// Импорт необходимых компонентов из React и React Native
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Добавляем интерфейс для пропсов
interface SelectLevelProps {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

function SelectLevel({ level, setLevel }: SelectLevelProps) {
  function handleIncrement() {
    setLevel(prevLevel => prevLevel + 1);
  }

  function handleDecrement() {
    setLevel(prevLevel => (prevLevel > 0 ? prevLevel - 1 : 0));
  }

  function calculateResult() {
    const a = 5;
    const b = 3;
    const result = a + b;
    return result;
  }


  // Возвращаем JSX разметку компонента
  return (
// undersector
    <View style={{
borderRadius: 10, 
overflowX: 'hidden', // запрещает горизонтальную прокрутку
backgroundColor: '#F2F2F2',
margin:5,

  }}>
      {/* Заголовок секции */}
      <Text>УРОВЕНЬ СЛОЖНОСТИ ТРЕНИРОВКИ</Text>
      
      {/* Основной контейнер секций */}
      {/* sectors */}
      <View style={
        {backgroundColor: '#F2F2F2',
          overflow: 'scroll', //- разрешает горизонтальный скрол внутри 
        }}>
          {/* subsectors */}
        <View style={{ 
backgroundColor: '#F2F2F2',
flexDirection: 'row',   // располагаем элементы в линию
paddingHorizontal: 10,   // отступ слева и справа для контейнера
borderRadius: 10, 
padding: 20,
alignItems: 'center',
  }}>
          {/* Блок отображения уровня */}
          <View style={{
width: 200,          // ширина квадрата
height: 150,         // высота квадрата
backgroundColor: '#FFFFFF', // цвет фона
borderRadius: 10,     // небольшой радиус для углов (опционально)
alignItems: 'center',      // центрирование по горизонтали
justifyContent: 'center',  // центрирование по вертикали
flexDirection: 'column', // Вертикальное расположение (можно опустить, т.к. это значение по умолчанию)
borderWidth: 0,          // Толщина рамки
borderColor: '#000000',  // Чёрный цвет 
          }}>
            {/* Текст с прошлым уровнем */}
            {/* <Text>ПРОШЛАЯ 12  */}

{/* {
// выводим строку с  значением
(() => {
  const a = level;
  return `${a}`;
})()} */}

            {/* </Text> */}
            
            {/* Отображение результата вычислений (8) */}
            {/* <Text style={[{marginLeft: 10}]}>
              {calculateResult()}
            </Text> */}

            {/* Основной блок с текущим уровнем */}
            <View style={{
borderWidth: 0,          // Толщина рамки
borderColor: '#000000',  // Чёрный цвет
width: '100%',          // ширина квадрата
height: 100,         // высота квадрата
backgroundColor: '#FFFFFF', // цвет фона
borderRadius: 10,     // небольшой радиус для углов (опционально)
alignItems: 'center',      // центрирование по горизонтали
justifyContent: 'center',  // центрирование по вертикали

  }}>
              {/* Отображаем текущее значение состояния level */}
              <Text style={{
  fontSize: 64,
  color: '#000000',
  fontWeight: '900',
  textShadowColor: 'rgba(0, 0, 0, 0.3)',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 4,
  textAlign: 'center',
  marginVertical: 20
}}>
  {level}
</Text>
            </View>
            

          </View>
          
          {/* Блок кнопок управления уровнем */}
          {/* bottombox */}
          <View style={{
width: 200,          // ширина квадрата
height: 200,         // высота квадрата
backgroundColor: '#F2F2F2', // цвет фона
borderRadius: 10,     // небольшой радиус для углов (опционально)
alignItems: 'center',      // центрирование по горизонтали
justifyContent: 'center',  // центрирование по вертикали

  }}>
            {/* Кнопка увеличения уровняbottomUP */}
            <TouchableOpacity 
              style={{
paddingVertical: 10,   // отступ слева и справа для контейнера
width: 150,          // ширина квадрата
height: 60,         // высота квадрата
backgroundColor: '#FFFFFF', // цвет фона
borderRadius: 10,     // небольшой радиус для углов (опционально)
margin:10,

  }} 
              onPress={handleIncrement} // При нажатии вызываем handleIncrement
            >
                          <Text style={{
  fontSize: 40,
  color: '#000000',
  fontWeight: '900',
  textShadowColor: 'rgba(0, 0, 0, 0.3)',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 4,
  textAlign: 'center',
  marginVertical: 5
}}>
  +
</Text>


            </TouchableOpacity>
            
            {/* Кнопка уменьшения уровня */}
            <TouchableOpacity 
            // bottomDown
              style={{
paddingVertical: 10,   // отступ слева и справа для контейнера
width: 150,          // ширина квадрата
height: 60,         // высота квадрата
backgroundColor: '#FFFFFF', // цвет фона
borderRadius: 10,     // небольшой радиус для углов (опционально)
margin:10,

  }} 
              onPress={handleDecrement} // При нажатии вызываем handleDecrement
            >
              <Text style={{
  fontSize: 40,
  color: '#000000',
  fontWeight: '900',
  textShadowColor: 'rgba(0, 0, 0, 0.3)',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 4,
  textAlign: 'center',
  marginVertical: 5
}}>
  -
</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}



export default SelectLevel;