import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { ThemedView } from "../themed-view";
import { IconSymbol } from "../ui/icon-symbol.ios";

const unSelectedColor = "gray";
const selectedColor = "black";
const unSelectedWeight = "light";
const selectedWeight = "medium";
const iconSize = 24;

export default function EditActionStripe({ style }: { style?: StyleProp<ViewStyle> }) {
  return (
    <ThemedView style={[localStyles.container, style]}>
      <View style={localStyles.stripe}>
        <IconSymbol
          name="bold"
          size={iconSize}
          color={unSelectedColor}
          weight={unSelectedWeight}
        />
        <IconSymbol
          name="italic"
          size={iconSize}
          color={unSelectedColor}
          weight={unSelectedWeight}
        />
        <IconSymbol
          name="textformat.size.larger"
          size={iconSize}
          color={unSelectedColor}
          weight={unSelectedWeight}
        />
        <IconSymbol
          name="list.bullet.indent"
          size={iconSize}
          color={unSelectedColor}
          weight={unSelectedWeight}
        />
      </View>
    </ThemedView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  stripe: {
    flexDirection: "row",
    gap: 12,
  },
});
