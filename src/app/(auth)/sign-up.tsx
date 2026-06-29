import AuthScreen from "@/components/AuthScreen";

export default function SignUp() {
  return (
    <AuthScreen
      title="Create your account"
      subtitle="Start your language journey today ✨"
      primaryLabel="Sign Up"
      showPassword
      footerPrompt="Already have an account?"
      footerAction="Log in"
      footerHref="/sign-in"
    />
  );
}
