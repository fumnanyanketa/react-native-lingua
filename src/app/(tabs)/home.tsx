import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }} edges={["top"]}>
      <View className="flex-1 items-center justify-center">
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20, color: "#0D132B" }}>
          Home
        </Text>
      </View>
    </SafeAreaView>
  );
}
