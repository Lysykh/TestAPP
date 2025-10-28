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

  // Стили для WorckOutMain
  worckOutMainContainer: {
    borderWidth: 0, 
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 0,
  },

  workoutSectionTitle: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },

  workoutLevelDisplay: {
    padding: 10,
  },

  workoutRow: {
    height: 90,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },

  tagRow: {
    height: 30,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },

  stick: {
    width: 4,
    height: '100%', 
    borderRadius: 2,
    marginRight: 8,
  },

  grayStick: {
    backgroundColor: '#BFBFBF',
  },

  whiteStick: {
    backgroundColor: 'white',
  },

  goldenStick: {
    backgroundColor: '#D89738',
    marginLeft: 32,
  },

  beigeStick: {
    backgroundColor: '#E0C491',
    marginLeft: 32,
  },

  lightGrayStick: {
    backgroundColor: '#E7E7E7',
    marginLeft: 12,
  },

  iconsColumn: {
    width: 24,
    height: '100%',
    justifyContent: 'space-between',
    marginRight: 8,
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
  },

  valuesColumn: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },

  valueText: {
    fontSize: 14,
  },

  singleIconContainer: {
    width: 24,
    height: '100%',
    justifyContent: 'center',
    marginRight: 8,
  },

  singleValueContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  smallIcon: {
    width: 15, 
    height: 15
  },

  mediumIcon: {
    width: 20, 
    height: 20
  },

  // Для строк с одной иконкой
  tagContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  scrollContainer: {
  flex: 1, // Занимает все доступное пространство
},

// Добавьте эти стили в ваш существующий StyleSheet
workoutInfoContainer: {
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#E7E7E7',
},

workoutInfoText: {
  fontSize: 14,
  marginBottom: 2,
  color: '#666',
},

calcContainer: {
  flexDirection: 'row',
  alignItems: 'center',
}

});

