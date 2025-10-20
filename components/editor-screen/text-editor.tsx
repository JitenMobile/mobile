import { useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from "react-native";
import {
  EnrichedTextInput,
  EnrichedTextInputInstance,
  OnChangeHtmlEvent,
  OnChangeStateEvent,
  OnChangeTextEvent,
} from "react-native-enriched";
import { SafeAreaView } from "react-native-safe-area-context";
import EditActionStripe from "./edit-action-stripe";

export default function TextEditor() {
  const ref = useRef<EnrichedTextInputInstance>(null);
  const [stylesState, setStylesState] = useState<OnChangeStateEvent | null>();
  const [textState, setTextState] = useState<OnChangeTextEvent | null>();
  const [htmlState, setHtmlState] = useState<OnChangeHtmlEvent | null>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Text>Title</Text>
        <EnrichedTextInput
          ref={ref}
          onChangeState={(e) => {
            setStylesState(e.nativeEvent);
          }}
          onChangeText={(e) => {
            setTextState(e.nativeEvent);
          }}
          onChangeHtml={(e) => {
            setHtmlState(e.nativeEvent);
          }}
          style={styles.input}
        />
        <EditActionStripe style={styles.actionStrip} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    fontSize: 20,
    padding: 10,
    flex: 1,
  },
  actionStrip: {
    // width: "100%",
  },
});
