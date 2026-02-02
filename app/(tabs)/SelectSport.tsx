// Импортируем необходимые компоненты и хуки из React и React Native
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles"; // Импортируем стили

// Определяем интерфейс для пропсов
interface SportSelectProps {
  onSportChange: (sport: string | null) => void;
  onColorChange: (color: string | null) => void;
}

// Создаем основной компонент с использованием function declaration
function SportSelect({ onSportChange, onColorChange }: SportSelectProps) {
  // Состояния для хранения текущих типов изображений для каждого вида спорта
  const [swimType, setSwimType] = useState("grey");
  const [runType, setRunType] = useState("grey");
  const [bikeType, setBikeType] = useState("grey");

  // Состояние для хранения выбранного вида спорта
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  // Состояние для хранения выбранного цвета тренировки
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Финальные переменные для экспорта (на английском)
  const [ColorTypeFinal, setColorTypeFinal] = useState<string | null>(null);
  const [SportTypeFinal, setSportTypeFinal] = useState<string | null>(null);

  // Эффект для обновления финальных переменных при изменении выбора
  useEffect(() => {
    setColorTypeFinal(selectedColor);
    setSportTypeFinal(selectedSport);

    // Передаем значения родительскому компоненту
    onSportChange(selectedSport);
    onColorChange(selectedColor);

    // Логирование финальных значений для отладки
    console.log(
      "FINAL VALUES - Sport:",
      SportTypeFinal,
      "Color:",
      ColorTypeFinal,
    );
  }, [selectedSport, selectedColor, onSportChange, onColorChange]);

  // Функция для получения следующего типа иконки на основе текущего
  const getNextType = (currentType: string): string => {
    switch (currentType) {
      case "orange":
        return "green";
      case "green":
        return "red";
      case "red":
        return "orange"; // Возвращаем к оранжевому вместо серого
      case "grey":
        return "orange";
      default:
        return "orange";
    }
  };

  // Функция для сброса всех невыбранных видов спорта к серому
  const resetOtherSports = (selectedSport: string) => {
    if (selectedSport !== "swim") setSwimType("grey");
    if (selectedSport !== "run") setRunType("grey");
    if (selectedSport !== "bike") setBikeType("grey");
  };

  // Функция для получения русского названия цвета (только для отображения)
  const getColorName = (color: string): string => {
    switch (color) {
      case "orange":
        return "оранжевый";
      case "green":
        return "зеленый";
      case "red":
        return "красный";
      case "grey":
        return "серый";
      default:
        return color;
    }
  };

  // Функция для получения русского названия спорта (только для отображения)
  const getSportName = (sport: string): string => {
    switch (sport) {
      case "swim":
        return "плавание";
      case "run":
        return "бег";
      case "bike":
        return "велосипед";
      default:
        return sport;
    }
  };

  // Обработчик нажатия для плавания
  const handleSwimPress = () => {
    const nextType = getNextType(swimType);
    setSwimType(nextType);
    setSelectedSport("swim"); // Английское название для финальной переменной
    setSelectedColor(nextType); // Английское название цвета
    resetOtherSports("swim"); // Сбрасываем другие виды спорта к серому

    // Уведомляем родительский компонент об изменении
    onSportChange("swim");
    onColorChange(nextType);

    console.log("sport: swim, swimType: " + nextType);
  };

  // Обработчик нажатия для бега
  const handleRunPress = () => {
    const nextType = getNextType(runType);
    setRunType(nextType);
    setSelectedSport("run"); // Английское название для финальной переменной
    setSelectedColor(nextType); // Английское название цвета
    resetOtherSports("run"); // Сбрасываем другие виды спорта к серому

    // Уведомляем родительский компонент об изменении
    onSportChange("run");
    onColorChange(nextType);

    console.log("sport: run, runType: " + nextType);
  };

  // Обработчик нажатия для велоспорта
  const handleBikePress = () => {
    const nextType = getNextType(bikeType);
    setBikeType(nextType);
    setSelectedSport("bike"); // Английское название для финальной переменной
    setSelectedColor(nextType); // Английское название цвета
    resetOtherSports("bike"); // Сбрасываем другие виды спорта к серому

    // Уведомляем родительский компонент об изменении
    onSportChange("bike");
    onColorChange(nextType);

    console.log("sport: bike, bikeType: " + nextType);
  };

  // Вспомогательная функция для получения изображения плавания
  const getSwimImage = () => {
    switch (swimType) {
      case "orange":
        return require("./swim_orange.png");
      case "green":
        return require("./swim_green.png");
      case "red":
        return require("./swim_red.png");
      case "grey":
        return require("./swim_grey.png");
      default:
        return require("./swim_grey.png");
    }
  };

  // Вспомогательная функция для получения изображения бега
  const getRunImage = () => {
    switch (runType) {
      case "orange":
        return require("./run_orange.png");
      case "green":
        return require("./run_green.png");
      case "red":
        return require("./run_red.png");
      case "grey":
        return require("./run_grey.png");
      default:
        return require("./run_grey.png");
    }
  };

  // Вспомогательная функция для получения изображения велоспорта
  const getBikeImage = () => {
    switch (bikeType) {
      case "orange":
        return require("./bike_orange.png");
      case "green":
        return require("./bike_green.png");
      case "red":
        return require("./bike_red.png");
      case "grey":
        return require("./bike_grey.png");
      default:
        return require("./bike_grey.png");
    }
  };

  // Функция для экспорта финальных значений (можно использовать в других компонентах)
  const exportFinalValues = () => {
    return {
      SportTypeFinal,
      ColorTypeFinal,
    };
  };

  // Возвращаем JSX разметку компонента
  return (
    <View style={styles.sportSelectContainer}>
      {/* Заголовок секции */}
      <Text style={styles.sportSelectTitle}>ВЫБОР ВИДА СПОРТА</Text>

      {/* Основной контейнер для видов спорта с горизонтальной прокруткой */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={styles.sportSelectScrollView}
        contentContainerStyle={styles.sportSelectScrollContent}
      >
        {/* Иконка плавания */}
        <TouchableOpacity
          onPress={handleSwimPress}
          style={styles.sportItemTouchable}
        >
          <ImageBackground
            source={getSwimImage()}
            style={styles.sportItemContainer}
            resizeMode="contain"
          ></ImageBackground>
        </TouchableOpacity>

        {/* Иконка бега */}
        <TouchableOpacity
          onPress={handleRunPress}
          style={styles.sportItemTouchable}
        >
          <ImageBackground
            source={getRunImage()}
            style={styles.sportItemContainer}
            resizeMode="contain"
          ></ImageBackground>
        </TouchableOpacity>

        {/* Иконка велоспорта */}
        <TouchableOpacity
          onPress={handleBikePress}
          style={styles.sportItemTouchable}
        >
          <ImageBackground
            source={getBikeImage()}
            style={styles.sportItemContainer}
            resizeMode="contain"
          ></ImageBackground>
        </TouchableOpacity>

        {/* Дополнительные элементы для демонстрации прокрутки */}
        <View style={styles.sportItemContainer}>
          <ImageBackground
            source={require("./calendar.png")}
            style={styles.sportItemContainer}
            resizeMode="contain"
          ></ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}

// Экспортируем компонент для использования в других частях приложения
export default SportSelect;
