import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

// Импорт функций расчетов
import createTrainingArray_run from "./calc/runCalc";
import createTrainingArray_orange_run from "./calc/runCalcOrange";
import createTrainingArray_red_run from "./calc/runCalcRed";

import createTrainingArray_swim from "./calc/swimCalc";
import createTrainingArray_orange_swim from "./calc/swimCalcOrange";
import createTrainingArray_red_swim from "./calc/swimCalcRed";

import createTrainingArray_bike from "./calc/bikeCalc";
import createTrainingArray_orange_bike from "./calc/bikeCalcOrange";
import createTrainingArray_red_bike from "./calc/bikeCalcRed";

import { getWattsForTime, secondsToTimeString } from "./SelectSportLevel";

interface WorkoutItem {
  id: number;
  distance: number;
  minTemp: number;
  maxTemp: number;
  minWatt: number;
  maxWatt: number;
  relaxTemp: number;
  relaxWatt: number;
  reps: number;
  sets: number;
  totalDistance: number;
  relaxDistance: number;
  watt: number;
  temp: number;
}

interface WorckOutMainProps {
  workoutLevel: number;
  setWorkoutLevel: React.Dispatch<React.SetStateAction<number>>;
  sportType: string | null;
  colorType: string | null;
  selectedTimeSeconds: number | null;
  sportlevel: number;
}

interface BackendItem {
  id: number;
  name: string;
  age: string;
}

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

// Конфигурация временных порогов для разных видов спорта
const SPORT_TIME_THRESHOLDS = {
  swim: {
    high: 149,
    medium: 119,
  },
  run: {
    high: 389,
    medium: 329,
  },
  bike: {
    high: 159,
    medium: 129,
  },
} as const;

const STORAGE_KEY = "@workout_history";

const WorckOutMain = ({
  workoutLevel,
  sportType,
  colorType,
  selectedTimeSeconds,
  sportlevel,
}: WorckOutMainProps) => {
  const [backendData, setBackendData] = useState<BackendItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [gigaResponse, setGigaResponse] = useState<string>("");
  const [loadingGiga, setLoadingGiga] = useState<boolean>(false);
  const [showMainInfoModal, setShowMainInfoModal] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);

  const fetchBackendData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://crystal-christmas.ru/get-items/2");
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setBackendData(data);
    } catch (err) {
      console.error("Error fetching backend data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Функция сохранения тренировки локально
  const saveWorkoutLocally = async () => {
    if (
      !workoutData ||
      !sportType ||
      !colorType ||
      selectedTimeSeconds === null
    ) {
      Alert.alert("Ошибка", "Не все данные тренировки доступны");
      return;
    }

    setSaving(true);
    try {
      // Получаем существующие тренировки
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      const savedWorkouts: SavedWorkout[] = stored ? JSON.parse(stored) : [];

      const currentDate = new Date().toISOString();
      const razryad = getSportName(sportType) === "плавание" ? 100 : 1000;

      const totalDuration = selectedTimeSeconds
        ? ((workoutData.distance * workoutData.reps * workoutData.sets) /
            razryad) *
            workoutData.minTemp +
          ((workoutData.relaxDistance * workoutData.reps * workoutData.sets) /
            razryad) *
            workoutData.relaxTemp +
          1200
        : 0;

      const newWorkout: SavedWorkout = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        date: currentDate,
        color: colorType,
        watt: workoutData.watt || 0,
        temp: workoutData.minTemp || 0,
        workoutlevel: workoutLevel,
        sportlevel: sportlevel,
        sportType: sportType,
        totalDistance: workoutData.totalDistance,
        duration: totalDuration,
      };

      // Добавляем новую тренировку в начало массива
      const updatedWorkouts = [newWorkout, ...savedWorkouts];

      // Сохраняем в AsyncStorage
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedWorkouts));

      Alert.alert("Успешно", "Тренировка отмечена как выполненная", [
        { text: "OK" },
      ]);
    } catch (err) {
      console.error("Error saving workout locally:", err);
      Alert.alert("Ошибка", "Не удалось сохранить данные тренировки");
    } finally {
      setSaving(false);
    }
  };

  const callGigaChat = async () => {
    if (!workoutData) return;

    setLoadingGiga(true);
    setGigaResponse("");

    try {
      const promptText = `Ты профессиональный тренер, смотришь тренировку своего атлета, которая состоит из: 
- Вид спорта: ${getSportName(sportType)}
- Общая дистанция: ${workoutData.totalDistance}м
- Количество подходов: ${workoutData.sets}
- Количество повторений в подходе: ${workoutData.reps}
- Темповая работа: ${secondsToTimeString(workoutData.minTemp)} - ${secondsToTimeString(workoutData.maxTemp)}
- Дистанция темпового отрезка: ${workoutData.distance}м
- Отдых между повторениями: ${secondsToTimeString(workoutData.relaxTemp)} на ${workoutData.relaxDistance}м
- Отдых между подходами: 60 секунд

Проанализируй данную тренировку с точки зрения профессионального тренер. повтори кажды элемент тренировки и дай одно или два профессиональных комментария. Не более 100 слов`;

      const response = await fetch(
        `https://crystal-christmas.ru/request_gigachat2/${encodeURIComponent(promptText)}`,
        {
          method: "POST",
        },
      );

      if (!response.ok)
        throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
      const responseText = await response.text();
      setGigaResponse(responseText);
    } catch (err) {
      console.error("Ошибка при вызове GigaChat:", err);
    } finally {
      setLoadingGiga(false);
    }
  };

  useEffect(() => {
    fetchBackendData();
  }, []);

  const getSportName = (sport: string | null): string => {
    if (!sport) return "не выбран";
    const sports: { [key: string]: string } = {
      swim: "🏊 Плавание",
      run: "🏃 Бег",
      bike: "🚴 Велосипед",
    };
    return sports[sport] || sport;
  };

  const getColorName = (color: string | null): string => {
    if (!color) return "не выбран";

    const colorDescriptions: { [key: string]: string } = {
      green: "Аэробная тренировка. Низкая интенсивность.",
      orange: "Средняя интенсивность. Тренировка ПАНО.",
      red: "Высокая интенсивность. Тренировка МПК.",
      grey: "серый",
    };

    return colorDescriptions[color] || color;
  };

  const getTrainingArrayFunction = () => {
    if (!sportType || selectedTimeSeconds === null) return () => [];

    const sportFunctions: { [key: string]: any } = {
      run: {
        green: createTrainingArray_run,
        grey: createTrainingArray_run,
        orange: createTrainingArray_orange_run,
        red: createTrainingArray_red_run,
      },
      swim: {
        green: createTrainingArray_swim,
        grey: createTrainingArray_swim,
        orange: createTrainingArray_orange_swim,
        red: createTrainingArray_red_swim,
      },
      bike: {
        green: (time: number) =>
          createTrainingArray_bike(time, getWattsForTime(time)),
        grey: (time: number) =>
          createTrainingArray_bike(time, getWattsForTime(time)),
        orange: (time: number) =>
          createTrainingArray_orange_bike(time, getWattsForTime(time)),
        red: (time: number) =>
          createTrainingArray_red_bike(time, getWattsForTime(time)),
      },
    };

    return sportFunctions[sportType]?.[colorType || "green"] || (() => []);
  };

  let trainingArray: WorkoutItem[] = [];
  if (selectedTimeSeconds !== null && sportType) {
    const createTrainingArrayFunction = getTrainingArrayFunction();
    trainingArray = createTrainingArrayFunction(selectedTimeSeconds);
  }

  const workoutData = trainingArray.find((item) => {
    if (!sportType || selectedTimeSeconds === null) return false;

    const thresholds =
      SPORT_TIME_THRESHOLDS[sportType as keyof typeof SPORT_TIME_THRESHOLDS];

    if (!thresholds) return item.id === workoutLevel;

    let targetId = workoutLevel;

    if (selectedTimeSeconds > thresholds.high) {
      targetId = workoutLevel;
    } else if (selectedTimeSeconds > thresholds.medium) {
      targetId = workoutLevel + 2;
    } else {
      targetId = workoutLevel + 5;
    }

    return item.id === targetId;
  });

  if (!workoutData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Данные тренировки не найдены</Text>
        <Text style={styles.text}>
          Пожалуйста, выберите время и уровень тренировки
        </Text>
      </View>
    );
  }

  const razryad = getSportName(sportType) === "плавание" ? 100 : 1000;

  const totalDuration = selectedTimeSeconds
    ? ((workoutData.distance * workoutData.reps * workoutData.sets) / razryad) *
        workoutData.minTemp +
      ((workoutData.relaxDistance * workoutData.reps * workoutData.sets) /
        razryad) *
        workoutData.relaxTemp +
      1200
    : 0;

  return (
    <ScrollView style={styles.worckOutMainContainer}>
      {/* Заголовок тренировки */}
      <View style={styles.workoutSection}>
        <Text style={styles.workoutSectionTitle}>О ТРЕНИРОВКЕ</Text>
        <View style={styles.workoutInfoRow}>
          <Text style={styles.workoutInfoLabel}>Уровень:</Text>
          <Text style={styles.workoutInfoValue}>{workoutLevel}</Text>
        </View>
        <View style={styles.workoutInfoRow}>
          <Text style={styles.workoutInfoLabel}>Спорт:</Text>
          <Text style={styles.workoutInfoValue}>{getSportName(sportType)}</Text>
        </View>
        <View style={styles.workoutInfoRow}>
          <Text style={styles.workoutInfoLabel}>Цвет:</Text>
          <Text style={styles.workoutInfoValue}>{getColorName(colorType)}</Text>
        </View>
        <View style={styles.workoutInfoRow}>
          <Text style={styles.workoutInfoLabel}>Дистанция работы:</Text>
          <Text style={styles.workoutInfoValue}>
            {workoutData.totalDistance}м
          </Text>
        </View>
        <View style={styles.workoutInfoRow}>
          <Text style={styles.workoutInfoLabel}>Общая продолжительность:</Text>
          <Text style={styles.workoutInfoValue}>
            {secondsToTimeString(totalDuration)}
          </Text>
        </View>
        <View style={styles.workoutInfoRow}>
          <Text style={styles.workoutInfoLabel}>Темп ПАНО:</Text>
          <Text style={styles.workoutInfoValue}>
            {selectedTimeSeconds !== null
              ? secondsToTimeString(selectedTimeSeconds)
              : "не выбрано"}
          </Text>
        </View>
        {sportType === "bike" && !isNaN(workoutData.watt) && (
          <View style={styles.workoutInfoRow}>
            <Text style={styles.workoutInfoLabel}>Мощность ПАНО:</Text>
            <Text style={styles.workoutInfoValue}>
              {Math.round(workoutData.watt)}W
            </Text>
          </View>
        )}
      </View>

      {/* Разминка */}
      <View style={styles.workoutSection}>
        <Text style={styles.workoutSectionTitle}>РАЗМИНКА</Text>
        <View style={styles.workoutExerciseBlock}>
          <View style={styles.workoutExerciseRow}>
            <Text style={styles.workoutExerciseLabel}>Время:</Text>
            <Text style={styles.workoutExerciseValue}>10:00</Text>
          </View>
          <View style={styles.workoutExerciseRow}>
            <Text style={styles.workoutExerciseLabel}>Темп:</Text>
            <Text style={styles.workoutExerciseValue}>
              {secondsToTimeString(workoutData.relaxTemp)}
            </Text>
          </View>
          {sportType === "bike" && !isNaN(workoutData.relaxWatt) && (
            <View style={styles.workoutExerciseRow}>
              <Text style={styles.workoutExerciseLabel}>Мощность:</Text>
              <Text style={styles.workoutExerciseValue}>
                {Math.round(workoutData.relaxWatt)}W
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Основное задание */}
      <View style={styles.workoutSection}>
        <View style={styles.workoutTitleWithHelp}>
          <Text style={styles.workoutSectionTitle}>ОСНОВНОЕ ЗАДАНИЕ</Text>
          <TouchableOpacity
            onPress={() => setShowMainInfoModal(true)}
            style={styles.helpButton}
          >
            <Text style={styles.helpButtonText}>?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.workoutExerciseBlock}>
          <View style={styles.workoutExerciseRow}>
            <Text style={styles.workoutExerciseLabel}>
              Количество подходов:
            </Text>
            <Text style={styles.workoutExerciseValue}>{workoutData.sets}</Text>
          </View>
          <View style={styles.workoutExerciseRow}>
            <Text style={styles.workoutExerciseLabel}>
              Количество повторов в подходе:
            </Text>
            <Text style={styles.workoutExerciseValue}>{workoutData.reps}</Text>
          </View>

          <View style={styles.workoutDivider} />

          {/* Рабочая часть повтора */}
          <View style={styles.workoutIndentedBlock}>
            <Text style={styles.workoutSubtitle}>Рабочая часть повтора:</Text>
            <View style={styles.workoutExerciseRow}>
              <Text style={styles.workoutExerciseLabel}>Темп:</Text>
              <Text style={styles.workoutExerciseValue}>
                {secondsToTimeString(workoutData.minTemp)} -{" "}
                {secondsToTimeString(workoutData.maxTemp)}
              </Text>
            </View>
            {sportType === "bike" &&
              !isNaN(workoutData.minWatt) &&
              !isNaN(workoutData.maxWatt) && (
                <View style={styles.workoutExerciseRow}>
                  <Text style={styles.workoutExerciseLabel}>Мощность:</Text>
                  <Text style={styles.workoutExerciseValue}>
                    {Math.round(workoutData.minWatt)} -{" "}
                    {Math.round(workoutData.maxWatt)}W
                  </Text>
                </View>
              )}
            <View style={styles.workoutExerciseRow}>
              <Text style={styles.workoutExerciseLabel}>Дистанция:</Text>
              <Text style={styles.workoutExerciseValue}>
                {workoutData.distance}м
              </Text>
            </View>
          </View>

          <View style={styles.workoutDivider} />

          {/* Отдых в повторе */}
          <View style={styles.workoutIndentedBlock}>
            <Text style={styles.workoutSubtitle}>Отдых в повторе:</Text>
            <View style={styles.workoutExerciseRow}>
              <Text style={styles.workoutExerciseLabel}>Темп:</Text>
              <Text style={styles.workoutExerciseValue}>
                {secondsToTimeString(workoutData.relaxTemp)}
              </Text>
            </View>
            {sportType === "bike" && !isNaN(workoutData.relaxWatt) && (
              <View style={styles.workoutExerciseRow}>
                <Text style={styles.workoutExerciseLabel}>Мощность:</Text>
                <Text style={styles.workoutExerciseValue}>
                  {Math.round(workoutData.relaxWatt)}W
                </Text>
              </View>
            )}
            <View style={styles.workoutExerciseRow}>
              <Text style={styles.workoutExerciseLabel}>Дистанция:</Text>
              <Text style={styles.workoutExerciseValue}>
                {workoutData.relaxDistance}м
              </Text>
            </View>
          </View>

          <View style={styles.workoutDivider} />

          <View style={styles.workoutExerciseRow}>
            <Text style={styles.workoutExerciseLabel}>
              Отдых между подходами:
            </Text>
            <Text style={styles.workoutExerciseValue}>60 секунд</Text>
          </View>
        </View>
      </View>

      {/* Заминка */}
      <View style={styles.workoutSection}>
        <Text style={styles.workoutSectionTitle}>ЗАМИНКА</Text>
        <View style={styles.workoutExerciseBlock}>
          <View style={styles.workoutExerciseRow}>
            <Text style={styles.workoutExerciseLabel}>Время:</Text>
            <Text style={styles.workoutExerciseValue}>10:00</Text>
          </View>
          <View style={styles.workoutExerciseRow}>
            <Text style={styles.workoutExerciseLabel}>Темп:</Text>
            <Text style={styles.workoutExerciseValue}>
              {secondsToTimeString(workoutData.relaxTemp)}
            </Text>
          </View>
          {sportType === "bike" && !isNaN(workoutData.relaxWatt) && (
            <View style={styles.workoutExerciseRow}>
              <Text style={styles.workoutExerciseLabel}>Мощность:</Text>
              <Text style={styles.workoutExerciseValue}>
                {Math.round(workoutData.relaxWatt)}W
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Данные из базы данных */}
      <View style={styles.workoutSection}>
        <Text style={styles.workoutSectionTitle}>КОНСУЛЬТАЦИЯ AI</Text>

        <TouchableOpacity
          style={[styles.workoutButton, styles.primaryButton]}
          onPress={callGigaChat}
          disabled={loadingGiga}
        >
          <Text style={styles.workoutButtonText}>
            {loadingGiga ? "Загрузка..." : "Спросить у AI Тренера"}
          </Text>
        </TouchableOpacity>

        {/* Ответ GigaChat */}
        {gigaResponse ? (
          <View style={styles.workoutExerciseBlock}>
            <Text style={styles.workoutSectionTitle}>КОНСУЛЬТАЦИЯ AI:</Text>
            <Text style={styles.gigaText}>{gigaResponse}</Text>
          </View>
        ) : null}
      </View>

      {/* Кнопка "ВЫПОЛНИЛ" */}
      <View style={styles.workoutSection}>
        <TouchableOpacity
          style={[
            styles.workoutCompleteButton,
            styles.primaryButton,
            saving && styles.disabledButton,
          ]}
          onPress={saveWorkoutLocally}
          disabled={saving}
        >
          <Text style={styles.workoutCompleteButtonText}>
            {saving ? "Сохранение..." : "✓ ВЫПОЛНИЛ"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Модальное окно с подсказкой для основного задания */}
      <Modal
        visible={showMainInfoModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowMainInfoModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Основное задание</Text>
            <Text style={styles.modalText}>
              Рабочая часть повтора - основной развивающий элемент тренировки.
            </Text>
            <Text style={styles.modalDescription}>
              Отдых внутри повтора - это элемент тренировки, который необходимо
              выполнять без остановки сразу после Рабочей части. Однако темп
              этого элемента существенно снижен по сравнению с рабочей частью.
            </Text>
            <TouchableOpacity
              style={[styles.closeButton, styles.primaryButton]}
              onPress={() => setShowMainInfoModal(false)}
            >
              <Text style={styles.closeButtonText}>ЗАКРЫТЬ ПОДСКАЗКУ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default WorckOutMain;
