
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const WorckOut = () => {


  return (
    <View style={styles.underSector}>
      <Text style={styles.text}>ТВОЙ СПОРТИВНЫЙ УРОВЕНЬ 2</Text>
      <View style={styles.sectors}>
        <Text style={styles.text}>ТВОЙ СПОРТИВНЫЙ УРОВЕНЬ 3</Text>
        <View style={styles.WorckOutTop}>
            <Text style={styles.text}>ТВОЙ СПОРТИВНЫЙ УРОВЕНЬ 4</Text>

        </View>
      </View>
    </View>
  );
};


export default WorckOut;