import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import SportSelect from './SelectSport';
import SelectSportLevel from './SelectSportLevel';
import SelectLevel from './SelectWorckoutLevel';
import WorckOutMain from './WorckOutMain';
import WorckOut from './WorckOutTop';
import styles from './styles';


export default function HomeScreen() {
  const [showComponents, setShowComponents] = useState({
    sportSelect: true,
    worckOut: false,
    worckOutMain: false
  }); 
  
  const [workoutLevel, setWorkoutLevel] = useState(14);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedTimeSeconds, setSelectedTimeSeconds] = useState<number | null>(null);

  return (
    <View style={styles.homeScreenContainer}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('./logo.png')} 
          style={styles.logoImage}
        />
      </View>
   
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
          selectedTimeSeconds={selectedTimeSeconds}
        />
      )}

      <SelectLevel level={workoutLevel} setLevel={setWorkoutLevel}/>

      <View style={styles.underSector}>   
        <View style={styles.sectors}>
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

      <SelectSportLevel onTimeChange={setSelectedTimeSeconds} />
    </View>
  );
}