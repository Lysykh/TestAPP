import React from 'react';
import { Image, Text, View } from 'react-native';
import CalcRun from './calculator/calc_run';
import styles from './styles';

interface WorckOutMainProps {
  workoutLevel: number;
  setWorkoutLevel: React.Dispatch<React.SetStateAction<number>>;
}

const WorckOutMain = ({ workoutLevel, setWorkoutLevel }: WorckOutMainProps) => {
  return (
    <View style={styles.worckOutMainContainer}>
      <Text style={styles.workoutSectionTitle}>РАЗМИНКА</Text>
  
      <View style={styles.workoutLevelDisplay}>
        <Text>Уровень: {workoutLevel}</Text>
      </View> 
      
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
              source={require('../../assets/images/time_b.png')} 
              style={styles.smallIcon}
            />
          </View>
        </View>
        
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>8 : 15</Text>
          <Text style={styles.valueText}>60 : 15</Text>
        </View>
      </View> 

      <Text style={styles.workoutSectionTitle}>ОСНОВНОЕ ЗАДАНИЕ</Text>
      
      {/* ПОДХОДЫ */}
      <View style={styles.tagRow}>
        <View style={[styles.stick, styles.whiteStick]} />
        
        <View style={styles.singleIconContainer}>
          <Image 
            source={require('../../assets/images/approaches_b.png')} 
            style={styles.mediumIcon}
          />
        </View>
        
        <View style={styles.singleValueContainer}>
          <Text style={styles.valueText}>2 повторений</Text>
        </View>
      </View> 

      {/* ПОВТОРЕНИЯ */}
      <View style={styles.tagRow}>
        <View style={[styles.stick, styles.whiteStick]} />
        
        <View style={styles.singleIconContainer}>
          <Image 
            source={require('../../assets/images/repeats_b.png')} 
            style={styles.mediumIcon}
          />
        </View>
        
        <View style={styles.singleValueContainer}>
          <Text style={styles.valueText}>2 повторений</Text>
        </View>
      </View> 

      {/* УПРАЖНЕНИЕ 1 */}
      <View style={styles.workoutRow}>
        <View style={[styles.stick, styles.goldenStick]} />
        
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
        </View>
        
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>8 : 15</Text>
          <Text style={styles.valueText}>60 : 15</Text>
        </View>
      </View> 

      {/* УПРАЖНЕНИЕ 2 */}
      <View style={styles.workoutRow}>
        <View style={[styles.stick, styles.beigeStick]} />
        
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
        </View>
        
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>8 : 15</Text>
          <Text style={styles.valueText}>60 : 15</Text>
        </View>
      </View> 

      {/* ОТДЫХ */}
      <View style={styles.tagRow}>
        <View style={[styles.stick, styles.lightGrayStick]} />
        
        <View style={styles.singleValueContainer}>
          <Text style={styles.valueText}>Отдых между подходами 3 минуты</Text>
        </View>
      </View> 

      <Text style={styles.workoutSectionTitle}>ЗАМИНКА</Text>
      
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
        </View>
        
        <View style={styles.valuesColumn}>
          <Text style={styles.valueText}>8 : 15</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.valueText}>60 : 15 ВСТАВЛЯЮ </Text> 
            <CalcRun a={60} b={15} /> 
          </View>
        </View>
      </View>       
    </View>
  );
};

export default WorckOutMain;