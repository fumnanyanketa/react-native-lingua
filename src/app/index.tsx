import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-6">
      <Text className="h1 text-primary">Lingua</Text>

      <Link href="/onboarding" className="rounded-full bg-primary px-8 py-4">
        <Text className="text-white" style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
          Open Onboarding
        </Text>
      </Link>
    </View>
  );
}
