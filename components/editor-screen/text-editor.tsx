import { useRef, useState } from "react";
import { Button, KeyboardAvoidingView, StyleSheet } from "react-native";
import {
  EnrichedTextInput,
  EnrichedTextInputInstance,
  OnChangeHtmlEvent,
  OnChangeStateEvent,
  OnChangeTextEvent,
} from "react-native-enriched";

export default function TextEditor() {
  const ref = useRef<EnrichedTextInputInstance>(null);
  const [stylesState, setStylesState] = useState<OnChangeStateEvent | null>();
  const [textState, setTextState] = useState<OnChangeTextEvent | null>();
  const [htmlState, setHtmlState] = useState<OnChangeHtmlEvent | null>();

  return (
    <KeyboardAvoidingView style={styles.container}>
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
      <Button
        title="Toggle bold"
        color={stylesState?.isBold ? "green" : "gray"}
        onPress={() => ref.current?.toggleBold()}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    fontSize: 20,
    padding: 10,
    maxHeight: 200,
    flex: 1,
  },
});
