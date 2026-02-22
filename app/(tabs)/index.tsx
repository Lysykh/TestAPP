import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SportSelect from "./SelectSport";
import SelectSportLevel from "./SelectSportLevel";
import SelectLevel from "./SelectWorckoutLevel";
import WorckOutMain from "./WorckOutMain";
import styles from "./styles";

// Интерфейс для сохраненной тренировки
interface SavedWorkout {
  id: string;
  date: string;
  color: string;
  watt: number;
  temp: number;
  workoutlevel: number;
  sportlevel: number;
  sportType: string;
  totalDistance: number;
  duration: number;
}

const STORAGE_KEY = "@workout_history";
const MAX_HISTORY_ITEMS = 10;

export default function HomeScreen() {
  const [showWorkoutMain, setShowWorkoutMain] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [savedWorkouts, setSavedWorkouts] = useState<SavedWorkout[]>([]);

  const [workoutLevel, setWorkoutLevel] = useState(1);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedTimeSeconds, setSelectedTimeSeconds] = useState<number | null>(
    null,
  );

  // Загрузка сохраненных тренировок при монтировании
  useEffect(() => {
    loadSavedWorkouts();
  }, []);

  // Функция загрузки сохраненных тренировок
  const loadSavedWorkouts = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setSavedWorkouts(parsed);
      } else {
        setSavedWorkouts([]);
      }
    } catch (error) {
      console.error("Error loading saved workouts:", error);
      setSavedWorkouts([]);
    }
  };

  const toggleWorkoutMode = () => {
    setShowWorkoutMain(!showWorkoutMain);
  };

  // Функция отображения истории тренировок
  const showWorkoutHistory = () => {
    if (savedWorkouts.length === 0) {
      Alert.alert(
        "История тренировок",
        "У вас пока нет сохраненных тренировок",
      );
    } else {
      setShowHistoryModal(true);
    }
  };

  // Функция получения названия спорта
  const getSportName = (sport: string | null): string => {
    if (!sport) return "не выбран";
    const sports: { [key: string]: string } = {
      swim: "🏊 Плавание",
      run: "🏃 Бег",
      bike: "🚴 Велосипед",
    };
    return sports[sport] || sport;
  };

  // Функция форматирования даты
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Функция получения цвета для отображения
  const getColorDisplay = (color: string) => {
    const colorMap: { [key: string]: { name: string; bgColor: string } } = {
      green: { name: "Зеленая", bgColor: "#4CAF50" },
      orange: { name: "Оранжевая", bgColor: "#FF9800" },
      red: { name: "Красная", bgColor: "#F44336" },
      grey: { name: "Серая", bgColor: "#9E9E9E" },
    };
    return colorMap[color] || { name: color, bgColor: "#95A5A6" };
  };

  // Функция конвертации секунд в читаемый формат
  const secondsToTimeString = (seconds: number): string => {
    if (!seconds || seconds < 0) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Компонент для отображения элемента истории
  const HistoryItem = ({ item }: { item: SavedWorkout }) => {
    const colorInfo = getColorDisplay(item.color);

    return (
      <View style={styles.historyCard}>
        <View style={styles.historyHeader}>
          <View
            style={[styles.colorBadge, { backgroundColor: colorInfo.bgColor }]}
          >
            <Text style={styles.colorBadgeText}>{colorInfo.name}</Text>
          </View>
          <Text style={styles.historyDate}>{formatDate(item.date)}</Text>
        </View>

        <View style={styles.historyStats}>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>{getSportName(item.sportType)}</Text>
            <Text style={styles.statValue}>{item.totalDistance}м</Text>
          </View>

          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Время тренировки</Text>
            <Text style={styles.statValue}>
              {secondsToTimeString(item.duration)}
            </Text>
          </View>

          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Уровень тренировки</Text>
            <Text style={styles.statValue}>{item.workoutlevel}</Text>
          </View>

          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Уровень спортсмена</Text>
            <Text style={styles.statValue}>{item.sportlevel}</Text>
          </View>

          {item.sportType === "bike" && item.watt > 0 && (
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Мощность</Text>
              <Text style={styles.statValue}>{Math.round(item.watt)}W</Text>
            </View>
          )}

          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Темп</Text>
            <Text style={styles.statValue}>
              {secondsToTimeString(item.temp)}/100м
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const recentWorkouts = savedWorkouts.slice(0, MAX_HISTORY_ITEMS);

  return (
    <View style={styles.homeScreenContainer}>
      <View style={styles.logoContainer}>
        <Image source={require("./logo.png")} style={styles.logoImage} />
      </View>

      <ScrollView style={styles.scrollContainer}>
        {showWorkoutMain ? (
          <WorckOutMain
            workoutLevel={workoutLevel}
            setWorkoutLevel={setWorkoutLevel}
            sportType={selectedSport}
            colorType={selectedColor}
            selectedTimeSeconds={selectedTimeSeconds}
            sportlevel={workoutLevel}
          />
        ) : (
          <>
            <SportSelect
              onSportChange={setSelectedSport}
              onColorChange={setSelectedColor}
            />
            <SelectLevel level={workoutLevel} setLevel={setWorkoutLevel} />
            <SelectSportLevel
              onTimeChange={setSelectedTimeSeconds}
              selectedSport={selectedSport}
            />
          </>
        )}
      </ScrollView>

      {/* Контейнер с кнопками */}
      <View style={styles.underSector}>
        <View style={styles.sectors}>
          {/* Кнопка СОЗДАТЬ ТРЕНИРОВКУ / НАЗАД К НАСТРОЙКАМ */}
          <View style={styles.buttomGOContainer}>
            <TouchableOpacity
              style={styles.buttomGO}
              onPress={toggleWorkoutMode}
            >
              <Text style={styles.buttomGOText}>
                {showWorkoutMain ? "НАЗАД К НАСТРОЙКАМ" : "СОЗДАТЬ ТРЕНИРОВКУ"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Кнопка ИСТОРИЯ ТРЕНИРОВОК (под кнопкой СОЗДАТЬ ТРЕНИРОВКУ) */}
          {!showWorkoutMain && (
            <View style={styles.historyButtonContainer}>
              <TouchableOpacity
                style={styles.historyButton}
                onPress={showWorkoutHistory}
              >
                <Text style={styles.historyButtonText}>
                  📋 ИСТОРИЯ ТРЕНИРОВОК
                </Text>
              </TouchableOpacity>
              {savedWorkouts.length > 0 && (
                <View style={styles.historyBadge}>
                  <Text style={styles.historyBadgeText}>
                    {savedWorkouts.length}
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>
      </View>

      {/* Модальное окно с историей тренировок */}
      <Modal
        visible={showHistoryModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowHistoryModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, styles.historyModalContent]}>
            <View style={styles.historyModalHeader}>
              <Text style={styles.modalTitle}>История тренировок</Text>
              <TouchableOpacity
                style={styles.closeIcon}
                onPress={() => setShowHistoryModal(false)}
              >
                <Text style={styles.closeIconText}>✕</Text>
              </TouchableOpacity>
            </View>

            {savedWorkouts.length === 0 ? (
              <View style={styles.emptyHistory}>
                <Text style={styles.emptyHistoryText}>
                  История тренировок пуста
                </Text>
              </View>
            ) : (
              <>
                <View style={styles.historyCount}>
                  <Text style={styles.historyCountText}>
                    Показано {recentWorkouts.length} из {savedWorkouts.length}{" "}
                    тренировок
                  </Text>
                </View>
                <FlatList
                  data={recentWorkouts}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <HistoryItem item={item} />}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.historyList}
                />
              </>
            )}

            <TouchableOpacity
              style={[styles.closeButton, styles.secondaryButton]}
              onPress={() => setShowHistoryModal(false)}
            >
              <Text style={styles.closeButtonText}>ЗАКРЫТЬ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
