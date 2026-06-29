import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

type Bubble = {
  text: string;
  bg: string;
  color: string;
  position: { top?: number; left?: number; right?: number };
  tailLeft: number;
};

const BUBBLES: Bubble[] = [
  {
    text: "Hello!",
    bg: "#ECF0FE",
    color: "#0D132B",
    position: { top: 12, left: 4 },
    tailLeft: 22,
  },
  {
    text: "¡Hola!",
    bg: "#EFEAFB",
    color: "#6C4EF5",
    position: { top: 0, right: 24 },
    tailLeft: 26,
  },
  {
    text: "你好!",
    bg: "#FDEEE8",
    color: "#FF4D4F",
    position: { top: 120, right: 0 },
    tailLeft: 18,
  },
];

function SpeechBubble({ text, bg, color, position, tailLeft }: Bubble) {
  return (
    <View style={{ position: "absolute", ...position }}>
      <View
        style={{
          backgroundColor: bg,
          paddingHorizontal: 18,
          paddingVertical: 10,
          borderRadius: 18,
        }}
      >
        <Text style={{ color, fontFamily: "Poppins-SemiBold", fontSize: 18 }}>
          {text}
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: -5,
          left: tailLeft,
          width: 14,
          height: 14,
          backgroundColor: bg,
          borderRadius: 3,
          transform: [{ rotate: "45deg" }],
        }}
      />
    </View>
  );
}

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar style="dark" />

      <View className="flex-1 px-6">
        {/* Logo */}
        <View className="mt-2 mb-8 flex-row items-center justify-center">
          <Image
            source={images.mascotLogo}
            style={{ width: 44, height: 44 }}
            contentFit="contain"
          />
          <Text className="h1 text-ink ml-2">lingua</Text>
        </View>

        {/* Heading */}
        <Text
          className="text-ink"
          style={{ fontFamily: "Poppins-Bold", fontSize: 38, lineHeight: 46 }}
        >
          Your AI language <Text className="text-primary">teacher</Text>.
        </Text>

        {/* Subtitle */}
        <Text className="body-lg text-muted mt-4">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>

        {/* Illustration + speech bubbles */}
        <View className="flex-1 items-center justify-center">
          <View style={{ width: "100%", maxWidth: 360, aspectRatio: 1 }}>
            <Image
              source={images.mascotWelcome}
              style={{ width: "100%", height: "100%" }}
              contentFit="contain"
            />
            {BUBBLES.map((bubble) => (
              <SpeechBubble key={bubble.text} {...bubble} />
            ))}
          </View>
        </View>

        {/* Get Started button */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.push("/sign-up")}
          className="mb-4 flex-row items-center justify-center bg-primary"
          style={{ height: 64, borderRadius: 28 }}
        >
          <Text
            className="text-white"
            style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}
          >
            Get Started
          </Text>
          <View
            style={{
              position: "absolute",
              right: 28,
              width: 11,
              height: 11,
              borderTopWidth: 3,
              borderRightWidth: 3,
              borderColor: "#FFFFFF",
              borderRadius: 1,
              transform: [{ rotate: "45deg" }],
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
