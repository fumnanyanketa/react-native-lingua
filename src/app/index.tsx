import { useClerk } from "@clerk/clerk-expo";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { signOut } = useClerk();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center gap-6">
        <Text className="h1 text-primary">Lingua</Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => signOut()}
          className="bg-primary items-center justify-center"
          style={{ paddingHorizontal: 32, paddingVertical: 14, borderRadius: 20 }}
        >
          <Text
            className="text-white"
            style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}
          >
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
