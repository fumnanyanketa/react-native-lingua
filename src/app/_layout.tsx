import "../global.css";

import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { PostHogProvider } from "posthog-react-native";

import { useLanguageStore } from "@/store/languageStore";

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch {
      return;
    }
  },
};

function AuthGate() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { selectedLanguageId, _hasHydrated } = useLanguageStore();

  useEffect(() => {
    if (!isLoaded || !_hasHydrated) return;

    const firstSegment = segments[0];
    const inPublicRoute =
      firstSegment === "(auth)" || firstSegment === "onboarding";
    const inLanguageSelection = firstSegment === "language-selection";

    if (!isSignedIn && !inPublicRoute) {
      router.replace("/onboarding");
    } else if (isSignedIn && inPublicRoute) {
      if (selectedLanguageId) {
        router.replace("/home");
      } else {
        router.replace("/language-selection");
      }
    } else if (isSignedIn && !selectedLanguageId && !inLanguageSelection) {
      router.replace("/language-selection");
    }
  }, [isLoaded, _hasHydrated, isSignedIn, segments, selectedLanguageId, router]);

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <PostHogProvider
      apiKey={process.env.EXPO_PUBLIC_POSTHOG_KEY!}
      options={{ host: process.env.EXPO_PUBLIC_POSTHOG_HOST }}
    >
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <AuthGate />
      </ClerkProvider>
    </PostHogProvider>
  );
}
