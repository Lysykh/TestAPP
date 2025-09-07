import React from 'react';
import { Text, View } from 'react-native';


interface CalcRunProps {
  a: number;
  b: number;
}

function CalcRun({ a, b }: CalcRunProps) {
  // Логика сложения прямо в компоненте (без отдельной функции)
  const c = a + b;

  return (
    <View>
      <Text>РАЗМИНКА</Text>
      <Text>Результат: {a} + {b} = {c}</Text>
    </View>
  );
}

export default CalcRun;