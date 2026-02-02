import React, { useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface SelectSportLevelProps {
  onTimeChange: (timeInSeconds: number | null) => void;
  selectedSport: string | null;
}

// Функция для преобразования времени в секунды
const timeStringToSeconds = (timeString: string): number => {
  const [minutes, seconds] = timeString.split(":").map(Number);
  return minutes * 60 + seconds;
};

const secondsToTimeString = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

// Альтернативный вариант с фиксированными значениями ватт
const getWattsForTime = (timeInSeconds: number): number => {
  const wattsMap: { [key: number]: number } = {
    160: 100,
    150: 120,
    140: 150,
    130: 190,
    120: 240,
    110: 300,
    105: 400,
  };

  return wattsMap[timeInSeconds] || 0;
};

const SelectSportLevel: React.FC<SelectSportLevelProps> = ({
  onTimeChange,
  selectedSport,
}) => {
  const [selectedTimeSeconds, setSelectedTimeSeconds] = useState<number | null>(
    null,
  );
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [timeOptionsInSeconds, setTimeOptionsInSeconds] = useState<number[]>(
    [],
  );
  const [buttonDistance, setButtonDistance] = useState<number>(100);
  const [distanceText, setDistanceText] = useState<string>("100м");
  const [showWatts, setShowWatts] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  // Обновляем параметры при изменении выбранного вида спорта
  useEffect(() => {
    let newTimeOptions: number[];
    let newButtonDistance: number;
    let newDistanceText: string;
    let newShowWatts: boolean;

    switch (selectedSport) {
      case "swim":
        newTimeOptions = [160, 150, 140, 130, 120, 110, 105];
        newButtonDistance = 100;
        newDistanceText = "100м";
        newShowWatts = false;
        break;
      case "run":
        newTimeOptions = [
          480, 420, 390, 375, 360, 350, 345, 340, 335, 330, 325, 320, 315, 310,
        ];
        newButtonDistance = 1000;
        newDistanceText = "1км";
        newShowWatts = false;
        break;
      case "bike":
        newTimeOptions = [160, 150, 140, 130, 120, 110, 105];
        newButtonDistance = 1000;
        newDistanceText = "1км";
        newShowWatts = true;
        break;
      default:
        // Значения по умолчанию (до выбора спорта)
        newTimeOptions = [120, 115, 110, 105, 100, 95, 90];
        newButtonDistance = 100;
        newDistanceText = "100м";
        newShowWatts = false;
    }

    setTimeOptionsInSeconds(newTimeOptions);
    setButtonDistance(newButtonDistance);
    setDistanceText(newDistanceText);
    setShowWatts(newShowWatts);

    // Сбрасываем выбор при изменении вида спорта
    setSelectedBox(null);
    setSelectedTimeSeconds(null);
    onTimeChange(null);
  }, [selectedSport, onTimeChange]);

  const handleBoxPress = (index: number, timeInSeconds: number) => {
    setSelectedBox(index);
    setSelectedTimeSeconds(timeInSeconds);
    onTimeChange(timeInSeconds);
  };

  const getSportInfoText = () => {
    switch (selectedSport) {
      case "swim":
        return "С каким темпом вы можете проплыть 1 000 м";
      case "run":
        return "С каким темпом вы можете пробежать 5 000 м";
      case "bike":
        return "С каким темпом вы можете проехать 10 000 м";
      default:
        return "Выберите вид спорта для получения информации о темпе";
    }
  };

  return (
    <>
      <View
        style={{
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "#F2F2F2",
          margin: 5,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Text style={{ fontWeight: "bold", flex: 1 }}>
            ТВОЙ СОРЕВНОВАТЕЛЬНЫЙ ТЕМП (темп ПАНО)
          </Text>
          <TouchableOpacity
            onPress={() => setShowInfoModal(true)}
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: "#007AFF",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>?</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          style={{
            backgroundColor: "#F2F2F2",
          }}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}
        >
          {timeOptionsInSeconds.map((timeInSeconds, index) => (
            <TouchableOpacity
              key={timeInSeconds}
              style={[
                {
                  width: 70,
                  height: 70,
                  backgroundColor: "#E5E5E5",
                  marginRight: 10,
                  borderRadius: 10,
                  elevation: 3,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                },
                selectedBox === index && {
                  backgroundColor: "#BCBCBC",
                },
              ]}
              onPress={() => handleBoxPress(index, timeInSeconds)}
            >
              <Text style={{ textAlign: "center", fontSize: 12 }}>
                {distanceText}
                {"\n"}
                {secondsToTimeString(timeInSeconds)}
                {showWatts && (
                  <>
                    {"\n"}
                    {getWattsForTime(timeInSeconds)}W
                  </>
                )}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Модальное окно с подсказкой */}
      <Modal
        visible={showInfoModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowInfoModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Информация о темпе</Text>
            <Text style={styles.modalText}>{getSportInfoText()}</Text>
            <Text style={styles.modalDescription}>
              Выберите время, с которым вы можете преодолеть указанную дистанцию
              в соревновательном темпе. Этот показатель поможет определить ваш
              уровень подготовки и подобрать оптимальную нагрузку для
              тренировок.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowInfoModal(false)}
            >
              <Text style={styles.closeButtonText}>ЗАКРЫТЬ ПОДСКАЗКУ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
    color: "#444",
    lineHeight: 22,
  },
  modalDescription: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
    lineHeight: 20,
  },
  closeButton: {
    backgroundColor: "#FF9500",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

// Экспортируем вспомогательные функции для использования в других компонентах
export { getWattsForTime, secondsToTimeString, timeStringToSeconds };
export default SelectSportLevel;
