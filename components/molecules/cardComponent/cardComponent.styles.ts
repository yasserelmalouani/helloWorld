import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 400,
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: "aqua",
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    resizeMode: "cover",
  },
  containerDescription: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
  },
  containerSubtTitle: {
    flex: 1,
    justifyContent: "center",
  },
});
