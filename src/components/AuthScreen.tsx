import { useOAuth, useSignIn, useSignUp } from "@clerk/clerk-expo";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as WebBrowser from "expo-web-browser";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import {
  AppleIcon,
  ChevronLeftIcon,
  EyeIcon,
  EyeOffIcon,
  GoogleIcon,
} from "@/components/icons";
import VerificationModal from "@/components/VerificationModal";

// Required for OAuth to properly close the browser session on Android.
WebBrowser.maybeCompleteAuthSession();

type AuthScreenProps = {
  mode: "sign-in" | "sign-up";
  title: string;
  subtitle: string;
  primaryLabel: string;
  showPassword: boolean;
  footerPrompt: string;
  footerAction: string;
  footerHref: "/sign-in" | "/sign-up";
};

function clerkError(err: unknown): string {
  const e = err as { errors?: Array<{ longMessage?: string; message?: string }> } | null;
  return (
    e?.errors?.[0]?.longMessage ??
    e?.errors?.[0]?.message ??
    (err instanceof Error ? err.message : "Something went wrong. Please try again.")
  );
}

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
  mode,
  title,
  subtitle,
  primaryLabel,
  showPassword,
  footerPrompt,
  footerAction,
  footerHref,
}: AuthScreenProps) {
  const router = useRouter();
  const { signIn, setActive: setSignInActive, isLoaded: signInLoaded } = useSignIn();
  const { signUp, setActive: setSignUpActive, isLoaded: signUpLoaded } = useSignUp();
  const { startOAuthFlow: startGoogleFlow } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: startAppleFlow } = useOAuth({ strategy: "oauth_apple" });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const emailAddressIdRef = useRef<string | null>(null);

  // ── Email / password flow ──────────────────────────────────────────────────

  const handlePrimary = async () => {
    if (loading) return;
    setError(null);

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      if (mode === "sign-up") {
        if (!signUpLoaded || !signUp) return;

        if (password.length < 8) {
          setError("Password must be at least 8 characters.");
          return;
        }

        await signUp.create({ emailAddress: trimmedEmail, password });
        await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      } else {
        if (!signInLoaded || !signIn) return;

        await signIn.create({ identifier: trimmedEmail });

        const emailFactor = signIn.supportedFirstFactors?.find(
          (f) => f.strategy === "email_code"
        ) as { strategy: "email_code"; emailAddressId: string } | undefined;

        if (!emailFactor) {
          throw new Error("Email code sign-in is not enabled for this account.");
        }

        emailAddressIdRef.current = emailFactor.emailAddressId;
        await signIn.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId: emailFactor.emailAddressId,
        });
      }

      setShowModal(true);
    } catch (err) {
      setError(clerkError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (code: string) => {
    if (mode === "sign-up") {
      if (!signUp || !setSignUpActive) throw new Error("Not ready.");
      const result = await signUp.attemptEmailAddressVerification({ code });
      if (result.status === "complete") {
        await setSignUpActive({ session: result.createdSessionId! });
        setShowModal(false);
      }
    } else {
      if (!signIn || !setSignInActive) throw new Error("Not ready.");
      const result = await signIn.attemptFirstFactor({ strategy: "email_code", code });
      if (result.status === "complete") {
        await setSignInActive({ session: result.createdSessionId! });
        setShowModal(false);
      }
    }
  };

  const handleResend = async () => {
    if (mode === "sign-up") {
      if (!signUp) throw new Error("Not ready.");
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    } else {
      if (!signIn || !emailAddressIdRef.current) throw new Error("Not ready.");
      await signIn.prepareFirstFactor({
        strategy: "email_code",
        emailAddressId: emailAddressIdRef.current,
      });
    }
  };

  // ── OAuth (Google / Apple) ─────────────────────────────────────────────────

  const handleOAuth = async (
    startFlow: (params: { redirectUrl: string }) => Promise<{
      createdSessionId?: string | null;
      setActive?: ((params: { session: string }) => Promise<void>) | null;
    }>
  ) => {
    setError(null);
    try {
      const redirectUrl = Linking.createURL("/");
      const { createdSessionId, setActive } = await startFlow({ redirectUrl });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        // AuthGate in _layout.tsx handles the redirect to home.
      }
    } catch (err) {
      setError(clerkError(err));
    }
  };

  const socialButtons = [
    {
      label: "Continue with Google",
      Icon: GoogleIcon,
      onPress: () => handleOAuth(startGoogleFlow),
    },
    {
      label: "Continue with Apple",
      Icon: AppleIcon,
      onPress: () => handleOAuth(startAppleFlow),
    },
  ];

  // ── Render ─────────────────────────────────────────────────────────────────

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

        {/* Error message */}
        {error && (
          <Text className="body-sm mt-3" style={{ color: "#FF4D4F" }}>
            {error}
          </Text>
        )}

        {/* Primary gradient button */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handlePrimary}
          disabled={loading}
          className="mt-5"
          style={{
            borderRadius: 18,
            overflow: "hidden",
            opacity: loading ? 0.7 : 1,
          }}
        >
          <LinearGradient
            colors={["#7558F6", "#6C4EF5", "#5B3BF6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ height: 58, alignItems: "center", justifyContent: "center" }}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text
                className="text-white"
                style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}
              >
                {primaryLabel}
              </Text>
            )}
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
          {socialButtons.map(({ label, Icon, onPress }) => (
            <TouchableOpacity
              key={label}
              activeOpacity={0.85}
              onPress={onPress}
              disabled={!onPress}
              className="flex-row items-center justify-center bg-white"
              style={{
                height: 56,
                borderRadius: 16,
                borderWidth: 1.5,
                borderColor: "#E5E7EB",
                opacity: onPress ? 1 : 0.4,
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
            <Text
              className="body-md text-primary"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              {footerAction}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <VerificationModal
        visible={showModal}
        email={email}
        onClose={() => setShowModal(false)}
        onSubmitCode={handleVerifyCode}
        onResend={handleResend}
      />
    </SafeAreaView>
  );
}
