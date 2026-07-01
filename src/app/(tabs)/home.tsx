import { useUser } from "@clerk/clerk-expo";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  BellIcon,
  BookOpenIcon,
  ChatIcon,
  HeadphonesIcon,
} from "@/components/icons";
import { images } from "@/constants/images";
import { colors, fonts } from "@/constants/theme";
import { getLanguageById } from "@/data/languages";
import { getLessonsByUnit } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";

function getLanguageGreeting(languageId: string | null): string {
  switch (languageId) {
    case "es":
      return "Hola";
    case "fr":
      return "Bonjour";
    case "ja":
      return "こんにちは";
    case "zh":
      return "你好";
    case "de":
      return "Hallo";
    case "pt":
      return "Olá";
    default:
      return "Hello";
  }
}

type PlanItemType = "lesson" | "ai" | "vocab";

interface PlanItem {
  id: string;
  title: string;
  subtitle: string;
  type: PlanItemType;
  completed: boolean;
}

function PlanItemRow({ item }: { item: PlanItem }) {
  const iconBg =
    item.type === "vocab" ? "#FF4B4B" : colors.primary;

  return (
    <TouchableOpacity style={styles.planRow} activeOpacity={0.75}>
      <View style={[styles.planIconBox, { backgroundColor: iconBg }]}>
        {item.type === "lesson" && <BookOpenIcon size={20} color="#fff" />}
        {item.type === "ai" && <HeadphonesIcon size={20} color="#fff" />}
        {item.type === "vocab" && <ChatIcon size={20} color="#fff" />}
      </View>
      <View style={styles.planTextBlock}>
        <Text style={styles.planItemTitle}>{item.title}</Text>
        <Text style={styles.planItemSubtitle}>{item.subtitle}</Text>
      </View>
      {item.completed ? (
        <View style={styles.completedCircle}>
          <Text style={styles.checkmark}>✓</Text>
        </View>
      ) : (
        <View style={styles.incompleteCircle} />
      )}
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguageId } = useLanguageStore();

  const language = selectedLanguageId ? getLanguageById(selectedLanguageId) : null;
  const units = selectedLanguageId ? getUnitsByLanguage(selectedLanguageId) : [];
  const currentUnit = units[0] ?? null;
  const lessons = currentUnit ? getLessonsByUnit(currentUnit.id) : [];

  const displayName =
    user?.firstName ||
    user?.emailAddresses?.[0]?.emailAddress?.split("@")[0] ||
    "Alex";

  const greeting = getLanguageGreeting(selectedLanguageId);

  const currentXP = 15;
  const goalXP = 20;
  const xpProgress = currentXP / goalXP;

  const planItems: PlanItem[] = [
    {
      id: "1",
      title: "Lesson",
      subtitle: lessons[0]?.title ?? "Start learning",
      type: "lesson",
      completed: true,
    },
    {
      id: "2",
      title: "AI Conversation",
      subtitle: "Talk about your day",
      type: "ai",
      completed: false,
    },
    {
      id: "3",
      title: "New words",
      subtitle: `${lessons[0]?.vocabulary?.length ?? 10} words`,
      type: "vocab",
      completed: false,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Header ──────────────────────────────────────────── */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.flagCircle}>
              {language ? (
                <Image
                  source={{ uri: language.flag }}
                  style={styles.flagCircleImage}
                  contentFit="cover"
                />
              ) : (
                <Text style={{ fontSize: 22 }}>🌐</Text>
              )}
            </View>
            <Text style={styles.headerGreeting}>
              {greeting}, {displayName}! 👋
            </Text>
          </View>

          <View style={styles.headerRight}>
            <View style={styles.streakRow}>
              <Image
                source={images.streakFire}
                style={{ width: 22, height: 22 }}
                contentFit="contain"
              />
              <Text style={styles.streakCount}>12</Text>
            </View>
            <TouchableOpacity style={styles.bellButton} activeOpacity={0.7}>
              <BellIcon size={22} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Daily Goal Card ──────────────────────────────────── */}
        <View style={styles.dailyGoalCard}>
          <View style={{ flex: 1, paddingRight: 12 }}>
            <Text style={styles.dailyGoalLabel}>Daily goal</Text>
            <View style={styles.xpRow}>
              <Text style={styles.xpCurrent}>{currentXP}</Text>
              <Text style={styles.xpTotal}> / {goalXP} XP</Text>
            </View>
            <View style={styles.xpTrack}>
              <View style={[styles.xpFill, { width: `${Math.round(xpProgress * 100)}%` as `${number}%` }]} />
            </View>
          </View>
          <Image
            source={images.treasure}
            style={styles.treasureImage}
            contentFit="contain"
          />
        </View>

        {/* ── Continue Learning Banner ─────────────────────────── */}
        {language && currentUnit ? (
          <LinearGradient
            colors={["#5A3DE8", "#7B5CF6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.continueBanner}
          >
            <View style={styles.continueTextBlock}>
              <Text style={styles.continueLabelText}>Continue learning</Text>
              <Text style={styles.continueLangName}>{language.name}</Text>
              <Text style={styles.continueUnitText}>
                A1 · Unit {currentUnit.order}
              </Text>
              <TouchableOpacity style={styles.continueButton} activeOpacity={0.85}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={images.palace}
              style={styles.palaceImage}
              contentFit="contain"
            />
          </LinearGradient>
        ) : (
          <View style={styles.noLanguageCard}>
            <Text style={styles.noLanguageTitle}>Pick a language to start</Text>
            <Text style={styles.noLanguageSubtext}>
              Go to Profile to choose your language
            </Text>
          </View>
        )}

        {/* ── Today's Plan ─────────────────────────────────────── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's plan</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          {planItems.map((item, index) => (
            <View key={item.id}>
              <PlanItemRow item={item} />
              {index < planItems.length - 1 && (
                <View style={styles.planDivider} />
              )}
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 110,
  },

  // ── Header ──────────────────────────────────────────────────────
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  flagCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
  },
  flagCircleImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  headerGreeting: {
    fontFamily: fonts.semiBold,
    fontSize: 17,
    color: colors.textPrimary,
    flexShrink: 1,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  streakRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  streakCount: {
    fontFamily: fonts.bold,
    fontSize: 17,
    color: colors.textPrimary,
  },
  bellButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Daily Goal Card ──────────────────────────────────────────────
  dailyGoalCard: {
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: "#FFF4E6",
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  dailyGoalLabel: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  xpRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 12,
  },
  xpCurrent: {
    fontFamily: fonts.bold,
    fontSize: 32,
    color: colors.textPrimary,
    lineHeight: 38,
  },
  xpTotal: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  xpTrack: {
    height: 8,
    backgroundColor: "#FFD9AA",
    borderRadius: 4,
  },
  xpFill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.streak,
  },
  treasureImage: {
    width: 80,
    height: 80,
  },

  // ── Continue Learning Banner ─────────────────────────────────────
  continueBanner: {
    marginHorizontal: 20,
    marginBottom: 22,
    borderRadius: 20,
    paddingVertical: 22,
    paddingLeft: 22,
    paddingRight: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    overflow: "hidden",
    minHeight: 160,
  },
  continueTextBlock: {
    flex: 1,
    paddingRight: 12,
  },
  continueLabelText: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
    marginBottom: 2,
  },
  continueLangName: {
    fontFamily: fonts.bold,
    fontSize: 30,
    color: "#fff",
    lineHeight: 36,
  },
  continueUnitText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: "rgba(255,255,255,0.75)",
    marginTop: 2,
    marginBottom: 18,
  },
  continueButton: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 22,
    paddingVertical: 11,
  },
  continueButtonText: {
    fontFamily: fonts.semiBold,
    fontSize: 15,
    color: colors.primary,
  },
  palaceImage: {
    width: 140,
    height: 160,
    alignSelf: "flex-end",
  },
  noLanguageCard: {
    marginHorizontal: 20,
    marginBottom: 22,
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: colors.border,
    borderStyle: "dashed",
  },
  noLanguageTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  noLanguageSubtext: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: "center",
  },

  // ── Today's Plan ─────────────────────────────────────────────────
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 17,
    color: colors.textPrimary,
  },
  viewAllText: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.primary,
  },
  planRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  planIconBox: {
    width: 50,
    height: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  planTextBlock: {
    flex: 1,
    marginLeft: 14,
  },
  planItemTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: 2,
  },
  planItemSubtitle: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
  },
  completedCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  checkmark: {
    color: "#fff",
    fontSize: 14,
    fontFamily: fonts.bold,
    lineHeight: 18,
  },
  incompleteCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.border,
  },
  planDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginLeft: 64,
  },

});
