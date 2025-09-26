import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SportSelect from './SelectSport';
import SelectSportLevel from './SelectSportLevel';
import SelectLevel from './SelectWorckoutLevel';
import WorckOutMain from './WorckOutMain';
import styles from './styles';

export default function HomeScreen() {
  const [showWorkoutMain, setShowWorkoutMain] = useState(false);
  
  const [workoutLevel, setWorkoutLevel] = useState(14);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedTimeSeconds, setSelectedTimeSeconds] = useState<number | null>(null);

  const toggleWorkoutMode = () => {
    setShowWorkoutMain(!showWorkoutMain);
  };

  return (
    <View style={styles.homeScreenContainer}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('./logo.png')} 
          style={styles.logoImage}
        />
      </View>
   
      {/* Добавляем ScrollView для возможности прокрутки */}
      <ScrollView style={styles.scrollContainer}>
        {showWorkoutMain ? (
          // Показываем только WorckOutMain когда активен режим тренировки
          <WorckOutMain 
            workoutLevel={workoutLevel} 
            setWorkoutLevel={setWorkoutLevel}
            sportType={selectedSport}
            colorType={selectedColor}
            selectedTimeSeconds={selectedTimeSeconds}
          />
        ) : (
          // Показываем все компоненты кроме WorckOutMain когда не в режиме тренировки
          <>
            <SportSelect 
              onSportChange={setSelectedSport}
              onColorChange={setSelectedColor}
            />
            <SelectLevel level={workoutLevel} setLevel={setWorkoutLevel}/>
            <SelectSportLevel 
              onTimeChange={setSelectedTimeSeconds} 
              selectedSport={selectedSport}
            />
          </>
        )}
      </ScrollView>

      {/* Кнопка остается за пределами ScrollView, чтобы всегда была видна */}
      <View style={styles.underSector}>   
        <View style={styles.sectors}>
          <View style={styles.buttomGOContainer}>
            <TouchableOpacity 
              style={styles.buttomGO}
              onPress={toggleWorkoutMode}
            >
              <Text style={styles.buttomGOText}>
                {showWorkoutMain ? 'НАЗАД К НАСТРОЙКАМ' : 'СОЗДАТЬ ТРЕНИРОВКУ'}
              </Text>
              <Text>Уровень + 2: {workoutLevel + 2}</Text>
            </TouchableOpacity>

            <Text>Уровень + 2: {workoutLevel + 2}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}