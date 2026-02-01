import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

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
}

interface BackendItem {
  id: number;
  name: string;
  age: string;
}

// Конфигурация временных порогов для разных видов спорта
// временные пороги это те пороги после которых тренировка стартует с уровня + 3 и +6 по сравнению с базовым .
// Пользователь реальный вроень тренировки не видит и всегда видит как первый
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

const WorckOutMain = ({
  workoutLevel,
  sportType,
  colorType,
  // selectedTimeSeconds - это переменная которая обозначает какой мы выбрали ПАНО Для того чтобы посчитать среднее время тренировки нужно брать не ПАНО
  selectedTimeSeconds,
}: WorckOutMainProps) => {
  const [backendData, setBackendData] = useState<BackendItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [gigaResponse, setGigaResponse] = useState<string>("");
  const [loadingGiga, setLoadingGiga] = useState<boolean>(false);

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
- Отдых между подходами: 3 минуты

Проанализируй данную тренировку с точки зрения профессионального тренера. повтори кажды элемент тренировки и дай одно или два профессиональных комментария. Не более 100 слов`;

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
      swim: "плавание",
      run: "бег",
      bike: "велосипед",
    };
    return sports[sport] || sport;
  };

  const getColorName = (color: string | null): string => {
    if (!color) return "не выбран";
    const colors: { [key: string]: string } = {
      orange: "оранжевый",
      green: "зеленый",
      red: "красный",
      grey: "серый",
    };
    return colors[color] || color;
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
      <View style={simpleStyles.container}>
        <Text style={simpleStyles.title}>Данные тренировки не найдены</Text>
        <Text style={simpleStyles.text}>
          Пожалуйста, выберите время и уровень тренировки
        </Text>
      </View>
    );
  }

  const razryad = getSportName(sportType) === "плавание" ? 100 : 1000;
  // по этой формуле среднее время расчитывается как общая дистанция которую мы преодалеем в темпе ПАНО,
  const totalDuration = selectedTimeSeconds
    ? (workoutData.totalDistance / razryad) * selectedTimeSeconds
    : 0;

  return (
    <ScrollView style={simpleStyles.container}>
      {/* Заголовок тренировки */}
      <View style={simpleStyles.section}>
        <Text style={simpleStyles.sectionTitle}>О ТРЕНИРОВКЕ</Text>
        <View style={simpleStyles.infoRow}>
          <Text style={simpleStyles.label}>Уровень:</Text>
          <Text style={simpleStyles.value}>{workoutLevel}</Text>
        </View>
        <View style={simpleStyles.infoRow}>
          <Text style={simpleStyles.label}>Спорт:</Text>
          <Text style={simpleStyles.value}>{getSportName(sportType)}</Text>
        </View>
        <View style={simpleStyles.infoRow}>
          <Text style={simpleStyles.label}>Цвет:</Text>
          <Text style={simpleStyles.value}>{getColorName(colorType)}</Text>
        </View>
        <View style={simpleStyles.infoRow}>
          <Text style={simpleStyles.label}>Общая дистанция:</Text>
          <Text style={simpleStyles.value}>{workoutData.totalDistance}м</Text>
        </View>
        <View style={simpleStyles.infoRow}>
          <Text style={simpleStyles.label}>Общая продолжительность:</Text>
          <Text style={simpleStyles.value}>
            {secondsToTimeString(totalDuration)}
          </Text>
        </View>
        <View style={simpleStyles.infoRow}>
          <Text style={simpleStyles.label}>Темп ПАНО:</Text>
          <Text style={simpleStyles.value}>
            {selectedTimeSeconds !== null
              ? secondsToTimeString(selectedTimeSeconds)
              : "не выбрано"}
          </Text>
        </View>
        {sportType === "bike" && !isNaN(workoutData.watt) && (
          <View style={simpleStyles.infoRow}>
            <Text style={simpleStyles.label}>Мощность ПАНО:</Text>
            <Text style={simpleStyles.value}>
              {Math.round(workoutData.watt)}W
            </Text>
          </View>
        )}
      </View>

      {/* Разминка */}
      <View style={simpleStyles.section}>
        <Text style={simpleStyles.sectionTitle}>РАЗМИНКА</Text>
        <View style={simpleStyles.exerciseBlock}>
          <View style={simpleStyles.exerciseRow}>
            <Text style={simpleStyles.exerciseLabel}>Время:</Text>
            <Text style={simpleStyles.exerciseValue}>10:00</Text>
          </View>
          <View style={simpleStyles.exerciseRow}>
            <Text style={simpleStyles.exerciseLabel}>Темп:</Text>
            <Text style={simpleStyles.exerciseValue}>
              {secondsToTimeString(workoutData.relaxTemp)}
            </Text>
          </View>
          {sportType === "bike" && !isNaN(workoutData.relaxWatt) && (
            <View style={simpleStyles.exerciseRow}>
              <Text style={simpleStyles.exerciseLabel}>Мощность:</Text>
              <Text style={simpleStyles.exerciseValue}>
                {Math.round(workoutData.relaxWatt)}W
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Основное задание */}
      <View style={simpleStyles.section}>
        <Text style={simpleStyles.sectionTitle}>ОСНОВНОЕ ЗАДАНИЕ</Text>

        <View style={simpleStyles.exerciseBlock}>
          <View style={simpleStyles.exerciseRow}>
            <Text style={simpleStyles.exerciseLabel}>Подходы:</Text>
            <Text style={simpleStyles.exerciseValue}>{workoutData.sets}</Text>
          </View>
          <View style={simpleStyles.exerciseRow}>
            <Text style={simpleStyles.exerciseLabel}>Повторения:</Text>
            <Text style={simpleStyles.exerciseValue}>{workoutData.reps}</Text>
          </View>

          <View style={simpleStyles.divider} />

          <Text style={simpleStyles.subtitle}>Основное упражнение:</Text>
          <View style={simpleStyles.exerciseRow}>
            <Text style={simpleStyles.exerciseLabel}>Темп:</Text>
            <Text style={simpleStyles.exerciseValue}>
              {secondsToTimeString(workoutData.minTemp)} -{" "}
              {secondsToTimeString(workoutData.maxTemp)}
            </Text>
          </View>
          {sportType === "bike" &&
            !isNaN(workoutData.minWatt) &&
            !isNaN(workoutData.maxWatt) && (
              <View style={simpleStyles.exerciseRow}>
                <Text style={simpleStyles.exerciseLabel}>Мощность:</Text>
                <Text style={simpleStyles.exerciseValue}>
                  {Math.round(workoutData.minWatt)} -{" "}
                  {Math.round(workoutData.maxWatt)}W
                </Text>
              </View>
            )}
          <View style={simpleStyles.exerciseRow}>
            <Text style={simpleStyles.exerciseLabel}>Дистанция:</Text>
            <Text style={simpleStyles.exerciseValue}>
              {workoutData.distance}м
            </Text>
          </View>

          <View style={simpleStyles.divider} />

          <Text style={simpleStyles.subtitle}>Отдых:</Text>
          <View style={simpleStyles.exerciseRow}>
            <Text style={simpleStyles.exerciseLabel}>Время:</Text>
            <Text style={simpleStyles.exerciseValue}>
              {secondsToTimeString(workoutData.relaxTemp)}
            </Text>
          </View>
          {sportType === "bike" && !isNaN(workoutData.relaxWatt) && (
            <View style={simpleStyles.exerciseRow}>
              <Text style={simpleStyles.exerciseLabel}>Мощность:</Text>
              <Text style={simpleStyles.exerciseValue}>
                {Math.round(workoutData.relaxWatt)}W
              </Text>
            </View>
          )}
          <View style={simpleStyles.exerciseRow}>
            <Text style={simpleStyles.exerciseLabel}>Дистанция:</Text>
            <Text style={simpleStyles.exerciseValue}>
              {workoutData.relaxDistance}м
            </Text>
          </View>

          <View style={simpleStyles.divider} />

          <View style={simpleStyles.exerciseRow}>
            <Text style={simpleStyles.exerciseLabel}>
              Отдых между подходами:
            </Text>
            <Text style={simpleStyles.exerciseValue}>3 минуты</Text>
          </View>
        </View>
      </View>

      {/* Заминка */}
      <View style={simpleStyles.section}>
        <Text style={simpleStyles.sectionTitle}>ЗАМИНКА</Text>
        <View style={simpleStyles.exerciseBlock}>
          <View style={simpleStyles.exerciseRow}>
            <Text style={simpleStyles.exerciseLabel}>Время:</Text>
            <Text style={simpleStyles.exerciseValue}>10:00</Text>
          </View>
          <View style={simpleStyles.exerciseRow}>
            <Text style={simpleStyles.exerciseLabel}>Темп:</Text>
            <Text style={simpleStyles.exerciseValue}>
              {secondsToTimeString(workoutData.relaxTemp)}
            </Text>
          </View>
          {sportType === "bike" && !isNaN(workoutData.relaxWatt) && (
            <View style={simpleStyles.exerciseRow}>
              <Text style={simpleStyles.exerciseLabel}>Мощность:</Text>
              <Text style={simpleStyles.exerciseValue}>
                {Math.round(workoutData.relaxWatt)}W
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Данные из базы данных */}
      <View style={simpleStyles.section}>
        <Text style={simpleStyles.sectionTitle}>КОНСУЛЬТАЦИЯ AI</Text>

        <TouchableOpacity
          style={simpleStyles.button}
          onPress={callGigaChat}
          disabled={loadingGiga}
        >
          <Text style={simpleStyles.buttonText}>
            {loadingGiga ? "Загрузка..." : "Спросить у GigaChat"}
          </Text>
        </TouchableOpacity>

        {/* {loading ? (
          <Text style={simpleStyles.text}>Загрузка данных...</Text>
        ) : backendData ? (
          <View style={simpleStyles.exerciseBlock}>
            <View style={simpleStyles.exerciseRow}>
              <Text style={simpleStyles.exerciseLabel}>ID:</Text>
              <Text style={simpleStyles.exerciseValue}>{backendData.id}</Text>
            </View>
            <View style={simpleStyles.exerciseRow}>
              <Text style={simpleStyles.exerciseLabel}>Имя:</Text>
              <Text style={simpleStyles.exerciseValue}>{backendData.name}</Text>
            </View>
            <View style={simpleStyles.exerciseRow}>
              <Text style={simpleStyles.exerciseLabel}>Возраст:</Text>
              <Text style={simpleStyles.exerciseValue}>{backendData.age}</Text>
            </View>
          </View>
        ) : (
          <Text style={simpleStyles.text}>Данные не получены</Text>
        )} */}

        {/* Ответ GigaChat */}
        {gigaResponse ? (
          <View style={simpleStyles.exerciseBlock}>
            <Text style={simpleStyles.sectionTitle}>КОНСУЛЬТАЦИЯ AI:</Text>
            <Text style={simpleStyles.gigaText}>{gigaResponse}</Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

// Упрощенные стили
const simpleStyles = {
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  section: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  label: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    flex: 1,
    textAlign: "right",
  },
  exerciseBlock: {
    marginTop: 8,
  },
  exerciseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  exerciseLabel: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  exerciseValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    flex: 1,
    textAlign: "right",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 12,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 12,
  },
  button: {
    backgroundColor: "#ff6b35",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: "center",
    marginVertical: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    paddingVertical: 12,
  },
  gigaText: {
    fontSize: 14,
    color: "#333",
    fontStyle: "italic",
    lineHeight: 20,
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 12,
  },
};

export default WorckOutMain;
