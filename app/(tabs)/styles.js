import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  // Основные стили
  motherbox: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    overflowX: 'hidden',
  },

  // Стили для HomeScreen
  homeScreenContainer: {
    backgroundColor: '#E7E7E7', 
    flex: 1, 
    overflowX: 'hidden'
  },

  logoContainer: {
    justifyContent: 'center', 
    alignItems: 'flex-end',
    marginHorizontal: 20,
    paddingVertical: 10
  },

  logoImage: {
    width: 150,
    height: 70, 
    resizeMode: 'contain'
  },

  underSector: {
    borderRadius: 10, 
    overflowX: 'hidden',
    backgroundColor: '#F2F2F2',
    margin: 5,
  },

  sectors: {
    backgroundColor: '#F2F2F2',
    overflow: 'scroll',
  },

  buttomGOContainer: {
    paddingVertical: 10,
    width: '100%',
    height: 60,
    backgroundColor: '#DF9C00',
    borderRadius: 10,
  },

  buttomGO: {
    paddingVertical: 10,
    width: '100%',
    height: 60,
    backgroundColor: '#DF9C00',
    borderRadius: 10,
  },

  buttomGOText: {
    fontSize: 15,
    color: '#FFFFFF',
    padding: 10,
    alignSelf: 'center',
  },

  // Стили для компонента выбора спорта
  sportSelectContainer: {
    borderRadius: 10, 
    overflow: 'hidden',
    backgroundColor: '#F2F2F2',
    margin: 5,
  },

  sportSelectTitle: {
    padding: 10, 
    fontWeight: 'bold',
    fontSize: 16,
  },

  sportSelectScrollView: {
    backgroundColor: '#F2F2F2',
  },

  sportSelectScrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },

  sportItemTouchable: {
    marginRight: 10,
  },

  sportItemContainer: {
    width: 130,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sportItemText: {
    marginTop: 100,
    fontSize: 14,
    textAlign: 'center',
  },

  sportSelectionInfo: {
    padding: 10, 
    fontStyle: 'italic',
    fontSize: 14,
  },

  sportFinalValues: {
    padding: 10, 
    fontStyle: 'italic', 
    fontSize: 12, 
    color: 'gray',
  },

  // Дополнительные стили (если есть)
  subsectors: { 
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 10, 
    padding: 20,
    alignItems: 'center',
  },

  spotrbox: {
    width: 130,
    height: 150,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    borderRadius: 10,
  },

  levelbox: {
    width: 70,
    height: 70,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  typebox: {
    width: 110,
    height: 100,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 10,
    borderRadius: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
  text: {
    fontSize: 15,
    color: '#333',
    padding: 10,
  },
  
  textButtomGo: {
    fontSize: 15,
    color: '#FFFFFF',
    padding: 10,
    alignSelf: 'center',
  },

  levelDisplay: {
    width: 200,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderWidth: 0,
    borderColor: '#000000',
  },

  selectedBox: {
    backgroundColor: '#BCBCBC',
  },

  levelDisplayText: {
    borderWidth: 0,
    borderColor: '#000000',
    width: '100%',
    height: 25,
    backgroundColor: '#FFFFFF',
    fontSize: 15,
    color: '#333',
    alignItems: 'right',
    justifyContent: 'center',
  },

  levelDisplayMain: {
    borderWidth: 0,
    borderColor: '#000000',
    width: '100%',
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  levelDisplayMainText: {
    borderWidth: 0,
    borderColor: '#000000',
    fontSize: 25,
    color: '#333',
  },

  levelDisplayStatus: {
    borderWidth: 0,
    borderColor: '#000000',
    width: '100%',
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  WorckOutTop: {
    width: 'auto',
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderWidth: 0,
    borderColor: '#000000',
  },

  WorckOutMain: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderWidth: 0,
    borderColor: '#000000',
  },

  buttomBox: {
    width: 200,
    height: 200,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttomUp: {
    paddingVertical: 10,
    width: 150,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
  },
  
  buttomDown: {
    paddingVertical: 10,
    width: 150,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
  },
  
  backgroundImage: {
    width: '70%',
    height: '70%',
    alignSelf: 'center',
  },

  // Стили для WorckOutMain - КОМПАКТНЫЕ
  worckOutMainContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    margin: 8,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },

  workoutSectionTitle: {
    padding: 12,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    backgroundColor: '#F8F8F8',
  },

  workoutLevelDisplay: {
    padding: 8,
  },

  // Компактные строки
  workoutRow: {
    minHeight: 52,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  tagRow: {
    minHeight: 36,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  stick: {
    width: 4,
    height: '70%', 
    borderRadius: 2,
    marginRight: 8,
    marginLeft: 2,
  },

  grayStick: {
    backgroundColor: '#BFBFBF',
  },

  whiteStick: {
    backgroundColor: 'white',
  },

  goldenStick: {
    backgroundColor: '#D89738',
  },

  beigeStick: {
    backgroundColor: '#E0C491',
  },

  lightGrayStick: {
    backgroundColor: '#E7E7E7',
  },

  // Центрированные иконки и значения
  iconsColumn: {
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 20,
    marginVertical: 1,
  },

  valuesColumn: {
    flex: 1,
    justifyContent: 'center',
  },

  valueText: {
    fontSize: 13,
    color: '#333',
    lineHeight: 16,
    textAlignVertical: 'center',
  },

  singleIconContainer: {
    width: 24,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  singleValueContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  smallIcon: {
    width: 14, 
    height: 14
  },

  mediumIcon: {
    width: 16, 
    height: 16
  },

  // Для строк с одной иконкой
  tagContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  scrollContainer: {
    flex: 1,
  },

  // Компактная информационная секция
  workoutInfoContainer: {
    padding: 12,
    backgroundColor: '#FAFAFA',
  },

  workoutInfoText: {
    fontSize: 12,
    marginBottom: 2,
    color: '#666',
    lineHeight: 14,
  },

  calcContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Убраны лишние отступы
  workoutSection: {
    marginBottom: 4,
  },

  workoutContent: {
    paddingVertical: 4,
  },

  // Минимальные отступы между секциями
  sectionSpacing: {
    height: 8,
  },

  // Стили для значений с ваттами
  wattValue: {
    fontSize: 12,
    color: '#D89738',
    fontWeight: '500',
  },

  // Центрированный контейнер для значений
  centeredValueContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
  }
});