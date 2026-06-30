import { useClerk } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center gap-6">
        <Text className="h1 text-primary">Lingua</Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => router.push("/language-selection")}
          className="bg-primary items-center justify-center"
          style={{ paddingHorizontal: 32, paddingVertical: 14, borderRadius: 20 }}
        >
          <Text
            className="text-white"
            style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}
          >
            Choose a Language
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => signOut()}
          style={{ paddingHorizontal: 32, paddingVertical: 14 }}
        >
          <Text
            className="text-muted"
            style={{ fontFamily: "Poppins-Medium", fontSize: 14 }}
          >
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
