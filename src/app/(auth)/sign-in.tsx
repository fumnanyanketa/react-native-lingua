import AuthScreen from "@/components/AuthScreen";

export default function SignIn() {
  return (
    <AuthScreen
      mode="sign-in"
      title="Welcome back"
      subtitle="Log in to continue your journey ✨"
      primaryLabel="Sign In"
      showPassword={false}
      footerPrompt="Don't have an account?"
      footerAction="Sign up"
      footerHref="/sign-up"
    />
  );
}
