import { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

const CODE_LENGTH = 6;

type VerificationModalProps = {
  visible: boolean;
  email: string;
  onClose: () => void;
  onComplete: () => void;
};

export default function VerificationModal({
  visible,
  email,
  onClose,
  onComplete,
}: VerificationModalProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  // Focus the hidden input once the modal has slid into view.
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 350);
    return () => clearTimeout(timer);
  }, [visible]);

  const handleChange = (text: string) => {
    const digits = text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    setCode(digits);

    // Auto-continue the moment the final digit is entered.
    if (digits.length === CODE_LENGTH) {
      inputRef.current?.blur();
      setCode("");
      onComplete();
    }
  };

  const handleClose = () => {
    setCode("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
      statusBarTranslucent
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {/* Dimmed backdrop — tap to dismiss */}
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(13,19,43,0.45)" }}
          onPress={handleClose}
        />

        {/* Bottom sheet */}
        <View
          className="bg-white px-6 pt-3"
          style={{
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            paddingBottom: 32,
          }}
        >
          {/* Grabber */}
          <View className="mb-6 items-center">
            <View
              style={{
                width: 44,
                height: 5,
                borderRadius: 3,
                backgroundColor: "#E5E7EB",
              }}
            />
          </View>

          <Text className="h2 text-ink">Check your email</Text>
          <Text className="body-md text-muted mt-2">
            We&apos;ve sent a 6-digit verification code to{" "}
            <Text className="text-ink" style={{ fontFamily: "Poppins-SemiBold" }}>
              {email || "your email"}
            </Text>
            . Enter it below to continue.
          </Text>

          {/* OTP cells */}
          <Pressable
            className="mt-7 flex-row justify-between"
            onPress={() => inputRef.current?.focus()}
          >
            {Array.from({ length: CODE_LENGTH }).map((_, index) => {
              const digit = code[index] ?? "";
              const isFilled = digit !== "";
              const isActive = index === code.length;

              return (
                <View
                  key={index}
                  className="items-center justify-center"
                  style={{
                    width: 48,
                    height: 58,
                    borderRadius: 14,
                    borderWidth: isActive || isFilled ? 2 : 1.5,
                    borderColor: isActive
                      ? "#6C4EF5"
                      : isFilled
                        ? "#6C4EF5"
                        : "#E5E7EB",
                    backgroundColor: isFilled ? "#F3F0FE" : "#F6F7FB",
                  }}
                >
                  <Text
                    className="text-ink"
                    style={{ fontFamily: "Poppins-SemiBold", fontSize: 24 }}
                  >
                    {digit}
                  </Text>
                </View>
              );
            })}
          </Pressable>

          {/* Hidden input that actually captures the keystrokes */}
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChange}
            keyboardType="number-pad"
            maxLength={CODE_LENGTH}
            textContentType="oneTimeCode"
            autoComplete="one-time-code"
            style={{ position: "absolute", width: 1, height: 1, opacity: 0 }}
          />

          <Text className="body-sm text-muted mt-6 text-center">
            Didn&apos;t get the code?{" "}
            <Text className="text-primary" style={{ fontFamily: "Poppins-SemiBold" }}>
              Resend
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
