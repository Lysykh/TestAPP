import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Основные стили
  motherbox: {
    backgroundColor: "#E7E7E7",
    flex: 1,
    overflowX: "hidden",
  },

  // Стили для HomeScreen
  homeScreenContainer: {
    backgroundColor: "#E7E7E7",
    flex: 1,
    overflowX: "hidden",
  },

  logoContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginHorizontal: 20,
    paddingVertical: 10,
  },

  logoImage: {
    width: 150,
    height: 70,
    resizeMode: "contain",
  },

  scrollContainer: {
    flex: 1,
  },

  underSector: {
    borderRadius: 10,
    overflowX: "hidden",
    backgroundColor: "#F2F2F2",
    margin: 5,
    padding: 10,
  },

  sectors: {
    backgroundColor: "#F2F2F2",
    overflow: "scroll",
  },

  buttomGOContainer: {
    paddingVertical: 10,
    width: "100%",
    height: 60,
    backgroundColor: "#DF9C00",
    borderRadius: 10,
  },

  buttomGO: {
    paddingVertical: 10,
    width: "100%",
    height: 60,
    backgroundColor: "#DF9C00",
    borderRadius: 10,
  },

  buttomGOText: {
    fontSize: 15,
    color: "#FFFFFF",
    padding: 10,
    alignSelf: "center",
  },

  // Стили для кнопки истории
  historyButtonContainer: {
    marginTop: 12,
    width: "100%",
    position: "relative",
  },

  historyButton: {
    backgroundColor: "#95A5A6",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  historyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  historyBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#DF9C00",
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  historyBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 6,
  },

  // Стили для компонента выбора спорта
  sportSelectContainer: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#F2F2F2",
    margin: 5,
  },

  sportSelectTitle: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 16,
  },

  sportSelectScrollView: {
    backgroundColor: "#F2F2F2",
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
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  sportItemText: {
    marginTop: 100,
    fontSize: 14,
    textAlign: "center",
  },

  sportSelectionInfo: {
    padding: 10,
    fontStyle: "italic",
    fontSize: 14,
  },

  sportFinalValues: {
    padding: 10,
    fontStyle: "italic",
    fontSize: 12,
    color: "gray",
  },

  // Дополнительные стили
  subsectors: {
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },

  spotrbox: {
    width: 130,
    height: 150,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    borderRadius: 10,
  },

  levelbox: {
    width: 70,
    height: 70,
    backgroundColor: "#E5E5E5",
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  typebox: {
    width: 110,
    height: 100,
    backgroundColor: "#E5E5E5",
    marginHorizontal: 10,
    borderRadius: 10,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  text: {
    fontSize: 15,
    color: "#333",
    padding: 10,
  },

  textButtomGo: {
    fontSize: 15,
    color: "#FFFFFF",
    padding: 10,
    alignSelf: "center",
  },

  levelDisplay: {
    width: 200,
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderWidth: 0,
    borderColor: "#000000",
  },

  selectedBox: {
    backgroundColor: "#BCBCBC",
  },

  levelDisplayText: {
    borderWidth: 0,
    borderColor: "#000000",
    width: "100%",
    height: 25,
    backgroundColor: "#FFFFFF",
    fontSize: 15,
    color: "#333",
    alignItems: "right",
    justifyContent: "center",
  },

  levelDisplayMain: {
    borderWidth: 0,
    borderColor: "#000000",
    width: "100%",
    height: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  levelDisplayMainText: {
    borderWidth: 0,
    borderColor: "#000000",
    fontSize: 25,
    color: "#333",
  },

  levelDisplayStatus: {
    borderWidth: 0,
    borderColor: "#000000",
    width: "100%",
    height: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  WorckOutTop: {
    width: "auto",
    height: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderWidth: 0,
    borderColor: "#000000",
  },

  WorckOutMain: {
    width: "auto",
    height: "auto",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderWidth: 0,
    borderColor: "#000000",
  },

  buttomBox: {
    width: 200,
    height: 200,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttomUp: {
    paddingVertical: 10,
    width: 150,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    margin: 10,
  },

  buttomDown: {
    paddingVertical: 10,
    width: 150,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    margin: 10,
  },

  backgroundImage: {
    width: "70%",
    height: "70%",
    alignSelf: "center",
  },

  // Стили для WorckOutMain
  worckOutMainContainer: {
    borderWidth: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 16,
    margin: 5,
  },

  workoutSection: {
    backgroundColor: "#F8F9FA",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },

  workoutSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },

  workoutTitleWithHelp: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  helpButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#DF9C00",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },

  helpButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  workoutInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },

  workoutInfoLabel: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },

  workoutInfoValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    flex: 1,
    textAlign: "right",
  },

  workoutExerciseBlock: {
    marginTop: 4,
  },

  workoutIndentedBlock: {
    marginLeft: 16,
    marginTop: 4,
  },

  workoutExerciseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },

  workoutExerciseLabel: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },

  workoutExerciseValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    flex: 1,
    textAlign: "right",
  },

  workoutSubtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#444",
    marginTop: 8,
    marginBottom: 6,
    marginLeft: 0,
  },

  workoutDivider: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
  },

  workoutButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 12,
  },

  primaryButton: {
    backgroundColor: "#DF9C00",
  },

  secondaryButton: {
    backgroundColor: "#95A5A6",
  },

  workoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  workoutCompleteButton: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },

  workoutCompleteButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  disabledButton: {
    opacity: 0.5,
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

  // Стили для модальных окон
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  historyModalContent: {
    maxHeight: "80%",
    paddingBottom: 10,
  },

  historyModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 10,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
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
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 15,
  },

  closeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  closeIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#BDC3C7",
    justifyContent: "center",
    alignItems: "center",
  },

  closeIconText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },

  // Стили для истории
  historyList: {
    paddingBottom: 10,
  },

  historyCard: {
    backgroundColor: "#F8F9FA",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  colorBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  colorBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  historyDate: {
    fontSize: 12,
    color: "#666",
  },

  historyStats: {
    marginTop: 5,
  },

  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },

  statLabel: {
    fontSize: 13,
    color: "#666",
  },

  statValue: {
    fontSize: 13,
    color: "#333",
    fontWeight: "600",
  },

  emptyHistory: {
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyHistoryText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },

  historyCount: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#BDC3C7",
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "center",
  },

  historyCountText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },

  // Стили для строк с иконками
  workoutRow: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  tagRow: {
    height: 30,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  stick: {
    width: 4,
    height: "100%",
    borderRadius: 2,
    marginRight: 8,
  },

  grayStick: {
    backgroundColor: "#BFBFBF",
  },

  whiteStick: {
    backgroundColor: "white",
  },

  goldenStick: {
    backgroundColor: "#D89738",
    marginLeft: 32,
  },

  beigeStick: {
    backgroundColor: "#E0C491",
    marginLeft: 32,
  },

  lightGrayStick: {
    backgroundColor: "#E7E7E7",
    marginLeft: 12,
  },

  iconsColumn: {
    width: 24,
    height: "100%",
    justifyContent: "space-between",
    marginRight: 8,
  },

  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 24,
  },

  valuesColumn: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
  },

  valueText: {
    fontSize: 14,
  },

  singleIconContainer: {
    width: 24,
    height: "100%",
    justifyContent: "center",
    marginRight: 8,
  },

  singleValueContainer: {
    flex: 1,
    justifyContent: "center",
  },

  smallIcon: {
    width: 15,
    height: 15,
  },

  mediumIcon: {
    width: 20,
    height: 20,
  },

  tagContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  workoutInfoContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E7E7E7",
  },

  workoutInfoText: {
    fontSize: 14,
    marginBottom: 2,
    color: "#666",
  },

  calcContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
