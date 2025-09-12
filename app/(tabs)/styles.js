import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  motherbox: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    overflowX: 'hidden', // запрещает горизонтальную прокрутку
  },

  underSector: {
    borderRadius: 10, 
    overflowX: 'hidden', // запрещает горизонтальную прокрутку
    backgroundColor: '#F2F2F2',
    borderRadius: 10, 
    margin: 5,
  },

  sectors: {
    backgroundColor: '#F2F2F2',
    overflow: 'scroll', //- разрешает горизонтальный скрол внутри 
  },

  // субсектор прокручивается по горизонтали внутри сетора вместе с боксами
  subsectors: { 
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',   // располагаем элементы в линию
    paddingHorizontal: 10,   // отступ слева и справа для контейнера
    borderRadius: 10, 
    padding: 20,
    alignItems: 'center',
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

  spotrbox: {
    width: 130,          // ширина квадрата
    height: 150,         // высота квадрата
    backgroundColor: '#FFFFFF', // цвет фона
    marginHorizontal: 10, // расстояние между элементами по горизонтали
    borderRadius: 10,     // небольшой радиус для углов (опционально)
  },

  levelbox: {
    width: 70,          // ширина квадрата
    height: 70,         // высота квадрата
    backgroundColor: '#E5E5E5', // цвет фона
    marginHorizontal: 10, // расстояние между элементами по горизонтали
    borderRadius: 10,     // небольшой радиус для углов (опционально)
    elevation: 3,              // тень на Android
    shadowColor: '#000',       // тень на iOS
    shadowOffset: { width: 0, height: 2 },  // смещение тени
    shadowOpacity: 0.2,        // прозрачность
    shadowRadius: 4,           // размытие
  },

  typebox: {
    width: 110,          // ширина квадрата
    height: 100,         // высота квадрата
    backgroundColor: '#E5E5E5', // цвет фона
    marginHorizontal: 10, // расстояние между элементами по горизонтали
    borderRadius: 10,     // небольшой радиус для углов (опционально)
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
    alignSelf: 'center', // Центрирует по горизонтали
  },

  levelDisplay: {
    width: 200,          // ширина квадрата
    height: 150,         // высота квадрата
    backgroundColor: '#FFFFFF', // цвет фона
    borderRadius: 10,     // небольшой радиус для углов (опционально)
    alignItems: 'center',      // центрирование по горизонтали
    justifyContent: 'center',  // центрирование по вертикали
    flexDirection: 'column', // Вертикальное расположение (можно опустить, т.к. это значение по умолчанию)
    borderWidth: 0,          // Толщина рамки
    borderColor: '#000000',  // Чёрный цвет 
  },

  selectedBox: {
    backgroundColor: '#BCBCBC',
  },

  levelDisplayText: {
    borderWidth: 0,          // Толщина рамки
    borderColor: '#000000',  // Чёрный цвет
    width: '100%',          // ширина квадрата
    height: 25,         // высота квадрата
    backgroundColor: '#FFFFFF', // цвет фона
    fontSize: 15,
    color: '#333',
    alignItems: 'right',      // центрирование по горизонтали
    justifyContent: 'center',  // центрирование по вертикали
  },

  levelDisplayMain: {
    borderWidth: 0,          // Толщина рамки
    borderColor: '#000000',  // Чёрный цвет
    width: '100%',          // ширина квадрата
    height: 100,         // высота квадрата
    backgroundColor: '#FFFFFF', // цвет фона
    borderRadius: 10,     // небольшой радиус для углов (опционально)
    alignItems: 'center',      // центрирование по горизонтали
    justifyContent: 'center',  // центрирование по вертикали
  },
  
  levelDisplayMainText: {
    borderWidth: 0,          // Толщина рамки
    borderColor: '#000000',  // Чёрный цвет
    fontSize: 25,
    color: '#333',
  },

  levelDisplayStatus: {
    borderWidth: 0,          // Толщина рамки
    borderColor: '#000000',  // Чёрный цвет
    width: '100%',          // ширина квадрата
    height: 25,         // высота квадрата
    backgroundColor: '#FFFFFF', // цвет фона
    borderRadius: 10,     // небольшой радиус для углов (опционально)
    alignItems: 'center',      // центрирование по горизонтали
    justifyContent: 'center',  // центрирование по вертикали
  },

  WorckOutTop: {
    width: 'auto',          // ширина квадрата
    height: 100,         // высота квадрата
    backgroundColor: '#FFFFFF', // цвет фона
    borderRadius: 10,     // небольшой радиус для углов (опционально)
    alignItems: 'center',      // центрирование по горизонтали
    justifyContent: 'center',  // центрирование по вертикали
    flexDirection: 'column', // Вертикальное расположение (можно опустить, т.к. это значение по умолчанию)
    borderWidth: 0,          // Толщина рамки
    borderColor: '#000000',  // Чёрный цвет 
  },

  WorckOutMain: {
    width: 'auto',          // ширина квадрата
    height: 'auto',         // высота квадрата
    backgroundColor: '#FFFFFF', // цвет фона
    borderRadius: 10,     // небольшой радиус для углов (опционально)
    alignItems: 'center',      // центрирование по горизонтали
    justifyContent: 'center',  // центрирование по вертикали
    flexDirection: 'column', // Вертикальное расположение (можно опустить, т.к. это значение по умолчанию)
    borderWidth: 0,          // Толщина рамки
    borderColor: '#000000',  // Чёрный цвет 
  },

  buttomBox: {
    width: 200,          // ширина квадрата
    height: 200,         // высота квадрата
    backgroundColor: '#F2F2F2', // цвет фона
    borderRadius: 10,     // небольшой радиус для углов (опционально)
    alignItems: 'center',      // центрирование по горизонтали
    justifyContent: 'center',  // центрирование по вертикали
  },
  
  buttomUp: {
    paddingVertical: 10,   // отступ слева и справа для контейнера
    width: 150,          // ширина квадрата
    height: 60,         // высота квадрата
    backgroundColor: '#FFFFFF', // цвет фона
    borderRadius: 10,     // небольшой радиус для углов (опционально)
    margin: 10,
  },
  
  buttomDown: {
    paddingVertical: 10,   // отступ слева и справа для контейнера
    width: 150,          // ширина квадрата
    height: 60,         // высота квадрата
    backgroundColor: '#FFFFFF', // цвет фона
    borderRadius: 10,     // небольшой радиус для углов (опционально)
    margin: 10,
  },
  
  buttomGO: {
    paddingVertical: 10,   // отступ слева и справа для контейнера
    width: '100%',          // ширина квадрата
    height: 60,         // высота квадрата
    backgroundColor: '#DF9C00', // цвет фона
    borderRadius: 10,     // небольшой радиус для углов (опционально)
  },

  backgroundImage: {
    width: '70%', // Размер изображения — 50% от контейнера
    height: '70%',
    alignSelf: 'center', // Центрирует по горизонтали
  },
});