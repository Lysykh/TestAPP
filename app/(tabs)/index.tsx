

// НОВЫЕ ИМПОРТЫ
// компонент для работы UseState - в частности для:
// - состояния компонентов при кнопке
import { useState } from 'react';
// - Сандартные импорты для отображения Текста и вьюшек
import { Image, Text, TouchableOpacity, View } from 'react-native';
// - Импортируем элеметы выбора
import SportSelect from './SelectSport';
import SelectSportLevel from './SelectSportLevel';
import SelectLevel from './SelectWorckoutLevel';
// - импортируем элементы тренировки второго экрана
import WorckOutMain from './WorckOutMain';
import WorckOut from './WorckOutTop';
// - импортирую стили 


export default function HomeScreen() {


// Добавляем состояния для показов и удаления компонентов в зависимости от кнопки
  const [showComponents, setShowComponents] = useState({
  sportSelect: true,
  worckOut: false,
  worckOutMain: false
}); 
// Добавляем состояния для сохранения выобранного уровня
  const [workoutLevel, setWorkoutLevel] = useState(15); // Добавляем состояние для уровня



  return (

// ДОБАВЛЯЮ БАЗОВЫЙ КОНТЕЙНЕР И ПЕРВУЮ ВКЛАДКУ С ЛОГОТИПОМ ВНУТРИ КОНТЕЙНЕРА БУДУТ ОСТАЛЬНЫЕ ЭЛЕМЕНТЫ ВКЛЮЧАЯ СТАРЫЕ
   <View style={{ backgroundColor: '#E7E7E7', flex: 1, overflowX: 'hidden'  }}>
<View style={{ 
  justifyContent: 'center', 
  alignItems: 'flex-end', // Оставляем выравнивание по правому краю
  marginHorizontal: 20,
  paddingVertical: 10 // Добавляем отступы сверху и снизу
}}>
  <Image 
    source={require('./logo.png')} 
    style={{ 
      width: 150, // Фиксированная ширина вместо процентов
      height: 70, 
      resizeMode: 'contain' // Используем resizeMode вместо objectFit
    }}
  />
</View>
   

{/* влючаем компоненты */}
{showComponents.sportSelect && <SportSelect />}
{showComponents.worckOut && <WorckOut />}
{showComponents.worckOutMain && <WorckOutMain />}
 
 {/* добавляем кнопку  */}
 <SelectLevel level={workoutLevel} setLevel={setWorkoutLevel}/>
      {/* underSector */}
    <View style={
      {borderRadius: 10, 
        overflowX: 'hidden', // запрещает горизонтальную прокрутку
        backgroundColor: '#F2F2F2',
        margin:5,}
        }>   
        {/* sectors */}
      <View style={
        {backgroundColor: '#F2F2F2',
          overflow: 'scroll', //- разрешает горизонтальный скрол внутри 
        }}>

        {/* buttomGO */}
        <View style={{
          paddingVertical: 10,   // отступ слева и справа для контейнера
width: '100%',          // ширина квадрата
height: 60,         // высота квадрата
backgroundColor: '#DF9C00', // цвет фона
borderRadius: 10,     // небольшой радиус для углов (опционально)

        }
          }>
        
<TouchableOpacity 
// buttomGO
  style={
{
          paddingVertical: 10,   // отступ слева и справа для контейнера
width: '100%',          // ширина квадрата
height: 60,         // высота квадрата
backgroundColor: '#DF9C00', // цвет фона
borderRadius: 10,     // небольшой радиус для углов (опционально)
        }
  }
  onPress={() => setShowComponents({
    sportSelect: !showComponents.sportSelect,
    worckOut: !showComponents.worckOut,
    worckOutMain: !showComponents.worckOutMain
  })}
>
            <Text style={{    fontSize: 15,
    color: '#FFFFFF',
    padding: 10,
    alignSelf: 'center', // Центрирует по горизонтали
    }}>СОЗДАТЬ ТРЕНИРОВКУ</Text>
            <Text>Уровень + 2: {workoutLevel + 2}</Text>
          </TouchableOpacity>


<Text>Уровень + 2: {workoutLevel + 2}</Text>




        </View>
      
      </View>
      </View>

      
 <SelectSportLevel />



 </View>
    
  );
}

