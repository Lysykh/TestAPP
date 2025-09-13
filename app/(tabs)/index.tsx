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
import styles from './styles';

export default function HomeScreen() {
  // Добавляем состояния для показов и удаления компонентов в зависимости от кнопки
  const [showComponents, setShowComponents] = useState({
    sportSelect: true,
    worckOut: false,
    worckOutMain: false
  }); 
  
  // Добавляем состояния для сохранения выобранного уровня
  const [workoutLevel, setWorkoutLevel] = useState(14);

  // Добавляем состояния для хранения выбранного спорта и цвета
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    // ДОБАВЛЯЮ БАЗОВЫЙ КОНТЕЙНЕР И ПЕРВУЮ ВКЛАДКУ С ЛОГОТИПОМ ВНУТРИ КОНТЕЙНЕРА БУДУТ ОСТАЛЬНЫЕ ЭЛЕМЕНТЫ ВКЛЮЧАЯ СТАРЫЕ
    <View style={styles.homeScreenContainer}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('./logo.png')} 
          style={styles.logoImage}
        />
      </View>
   
      {/* влючаем компоненты */}
      {showComponents.sportSelect && (
        <SportSelect 
          onSportChange={setSelectedSport}
          onColorChange={setSelectedColor}
        />
      )}
      {showComponents.worckOut && <WorckOut />}
      {showComponents.worckOutMain && (
        <WorckOutMain 
          workoutLevel={workoutLevel} 
          setWorkoutLevel={setWorkoutLevel}
          sportType={selectedSport}
          colorType={selectedColor}
        />
      )}

      {/* добавляем кнопку  */}
      <SelectLevel level={workoutLevel} setLevel={setWorkoutLevel}/>

      {/* underSector */}
      <View style={styles.underSector}>   
        {/* sectors */}
        <View style={styles.sectors}>
          {/* buttomGO */}
          <View style={styles.buttomGOContainer}>
            <TouchableOpacity 
              style={styles.buttomGO}
              onPress={() => setShowComponents({
                sportSelect: !showComponents.sportSelect,
                worckOut: !showComponents.worckOut,
                worckOutMain: !showComponents.worckOutMain
              })}
            >
              <Text style={styles.buttomGOText}>СОЗДАТЬ ТРЕНИРОВКУ</Text>
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