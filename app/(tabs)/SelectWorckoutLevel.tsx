// Импорт необходимых компонентов из React и React Native
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles"; // Импорт стилей

// Добавляем интерфейс для пропсов
interface SelectLevelProps {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

function SelectLevel({ level, setLevel }: SelectLevelProps) {
  function handleIncrement() {
    setLevel((prevLevel) => (prevLevel < 10 ? prevLevel + 1 : 10));
  }

  function handleDecrement() {
    setLevel((prevLevel) => (prevLevel > 1 ? prevLevel - 1 : 1));
  }

  function calculateResult() {
    const a = 5;
    const b = 3;
    const result = a + b;
    return result;
  }

  // Возвращаем JSX разметку компонента
  return (
    <View style={styles.underSector}>
      {/* Заголовок секции */}
      <Text style={styles.sportSelectTitle}>УРОВЕНЬ СЛОЖНОСТИ ТРЕНИРОВКИ</Text>

      {/* Основной контейнер секций */}
      <View style={styles.sectors}>
        <View style={styles.subsectors}>
          {/* Блок отображения уровня */}
          <View style={styles.levelDisplay}>
            {/* Основной блок с текущим уровнем */}
            <View style={styles.levelDisplayMain}>
              {/* Отображаем текущее значение состояния level */}
              <Text
                style={[
                  styles.levelDisplayMainText,
                  {
                    fontSize: 72, // Увеличиваем размер текста
                    fontWeight: "900",
                    textShadowColor: "rgba(0, 0, 0, 0.3)",
                    textShadowOffset: { width: 2, height: 2 },
                    textShadowRadius: 4,
                    textAlign: "center",
                  },
                ]}
              >
                {level}
              </Text>
            </View>
          </View>

          {/* Блок кнопок управления уровнем */}
          <View style={styles.buttomBox}>
            {/* Кнопка увеличения уровня */}
            <TouchableOpacity
              style={[
                styles.buttomUp,
                level >= 10 && { opacity: 0.5 }, // Визуально отключаем кнопку при максимуме
              ]}
              onPress={handleIncrement}
              disabled={level >= 10} // Отключаем функциональность кнопки при максимуме
            >
              <Text
                style={{
                  fontSize: 48,
                  color: "#000000",
                  fontWeight: "900",
                  textAlign: "center",
                  textAlignVertical: "center",
                  lineHeight: 48,
                }}
              >
                +
              </Text>
            </TouchableOpacity>

            {/* Кнопка уменьшения уровня */}
            <TouchableOpacity
              style={[
                styles.buttomDown,
                level <= 1 && { opacity: 0.5 }, // Визуально отключаем кнопку при минимуме
              ]}
              onPress={handleDecrement}
              disabled={level <= 1} // Отключаем функциональность кнопки при минимуме
            >
              <Text
                style={{
                  fontSize: 48,
                  color: "#000000",
                  fontWeight: "900",
                  textAlign: "center",
                  textAlignVertical: "center",
                  lineHeight: 48,
                }}
              >
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
