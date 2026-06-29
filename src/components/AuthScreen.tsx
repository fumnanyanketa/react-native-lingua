import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import {
  AppleIcon,
  ChevronLeftIcon,
  EyeIcon,
  EyeOffIcon,
  FacebookIcon,
  GoogleIcon,
} from "@/components/icons";
import VerificationModal from "@/components/VerificationModal";

type SocialProvider = {
  label: string;
  Icon: () => React.ReactElement;
};

const SOCIALS: SocialProvider[] = [
  { label: "Continue with Google", Icon: () => <GoogleIcon /> },
  { label: "Continue with Facebook", Icon: () => <FacebookIcon /> },
  { label: "Continue with Apple", Icon: () => <AppleIcon /> },
];

type AuthScreenProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  showPassword: boolean;
  footerPrompt: string;
  footerAction: string;
  footerHref: "/sign-in" | "/sign-up";
};

/* A bordered input box with a floating label, matching the design. */
function LabeledInput({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <View
      className="bg-white px-4 py-3"
      style={{ borderRadius: 16, borderWidth: 1.5, borderColor: "#E5E7EB" }}
    >
      <Text className="caption text-muted" style={{ fontSize: 13 }}>
        {label}
      </Text>
      {children}
    </View>
  );
}

export default function AuthScreen({
  title,
  subtitle,
  primaryLabel,
  showPassword,
  footerPrompt,
  footerAction,
  footerHref,
}: AuthScreenProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleVerified = () => {
    setShowModal(false);
    router.replace("/");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar style="dark" />

      <View className="flex-1 px-6">
        {/* Back button */}
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={12}
          className="mt-1 mb-3"
          style={{ width: 32 }}
        >
          <ChevronLeftIcon />
        </TouchableOpacity>

        {/* Heading */}
        <Text className="h1 text-ink">{title}</Text>
        <Text className="body-lg text-muted mt-2">{subtitle}</Text>

        {/* Mascot */}
        <View className="my-5 items-center" style={{ height: 150 }}>
          <Image
            source={images.mascotAuth}
            style={{ width: 230, height: 150 }}
            contentFit="contain"
          />
        </View>

        {/* Email */}
        <LabeledInput label="Email">
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="name@example.com"
            placeholderTextColor="#9AA0AE"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 17,
              color: "#0D132B",
              paddingVertical: 2,
              marginTop: 2,
            }}
          />
        </LabeledInput>

        {/* Password (sign-up only) */}
        {showPassword && (
          <View className="mt-4">
            <LabeledInput label="Password">
              <View className="flex-row items-center">
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  placeholderTextColor="#9AA0AE"
                  secureTextEntry={secure}
                  autoCapitalize="none"
                  style={{
                    flex: 1,
                    fontFamily: "Poppins-Medium",
                    fontSize: 17,
                    color: "#0D132B",
                    paddingVertical: 2,
                    marginTop: 2,
                  }}
                />
                <TouchableOpacity onPress={() => setSecure((s) => !s)} hitSlop={10}>
                  {secure ? <EyeIcon /> : <EyeOffIcon />}
                </TouchableOpacity>
              </View>
            </LabeledInput>
          </View>
        )}

        {/* Primary gradient button */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setShowModal(true)}
          className="mt-5"
          style={{ borderRadius: 18, overflow: "hidden" }}
        >
          <LinearGradient
            colors={["#7558F6", "#6C4EF5", "#5B3BF6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ height: 58, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              className="text-white"
              style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}
            >
              {primaryLabel}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Divider */}
        <View className="my-5 flex-row items-center">
          <View className="h-px flex-1" style={{ backgroundColor: "#E5E7EB" }} />
          <Text className="body-md text-muted mx-3">or continue with</Text>
          <View className="h-px flex-1" style={{ backgroundColor: "#E5E7EB" }} />
        </View>

        {/* Social buttons */}
        <View className="gap-3">
          {SOCIALS.map(({ label, Icon }) => (
            <TouchableOpacity
              key={label}
              activeOpacity={0.85}
              className="flex-row items-center justify-center bg-white"
              style={{
                height: 56,
                borderRadius: 16,
                borderWidth: 1.5,
                borderColor: "#E5E7EB",
              }}
            >
              <View style={{ position: "absolute", left: 22 }}>
                <Icon />
              </View>
              <Text
                className="text-ink"
                style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <View className="flex-1 flex-row items-end justify-center pb-2">
          <Text className="body-md text-muted">{footerPrompt} </Text>
          <TouchableOpacity onPress={() => router.replace(footerHref)} hitSlop={8}>
            <Text className="body-md text-primary" style={{ fontFamily: "Poppins-SemiBold" }}>
              {footerAction}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <VerificationModal
        visible={showModal}
        email={email}
        onClose={() => setShowModal(false)}
        onComplete={handleVerified}
      />
    </SafeAreaView>
  );
}
