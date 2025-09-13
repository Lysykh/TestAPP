import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface SelectSportLevelProps {
  onTimeChange: (time: string | null) => void;
}

const SelectSportLevel: React.FC<SelectSportLevelProps> = ({ onTimeChange }) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const timeOptions = ['02:00', '01:55', '01:50', '01:45', '01:40', '01:35', '01:30'];

  const handleBoxPress = (index: number, time: string) => {
    setSelectedBox(index);
    setSelectedTime(time);
    onTimeChange(time);
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
        {timeOptions.map((time, index) => (
          <TouchableOpacity
            key={time}
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
            onPress={() => handleBoxPress(index, time)}
          >
            <Text style={{ textAlign: 'center' }}>100М{"\n"}{time}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SelectSportLevel;