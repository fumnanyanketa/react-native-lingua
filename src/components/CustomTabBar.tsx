import type { BottomTabBarProps } from "expo-router/tabs";
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  ChatIcon,
  HomeIcon,
  LearnIcon,
  ProfileIcon,
  SparklesIcon,
} from "@/components/icons";

const TAB_COUNT = 5;
const CONTENT_HEIGHT = 68;
const CIRCLE_SIZE = 52;
const PRIMARY = "#6C4EF5";
const INACTIVE = "#9CA3AF";

type TabConfig = {
  name: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
};

const TABS: TabConfig[] = [
  { name: "home", label: "Home", Icon: HomeIcon },
  { name: "learn", label: "Learn", Icon: LearnIcon },
  { name: "ai-teacher", label: "AI", Icon: SparklesIcon },
  { name: "chat", label: "Chat", Icon: ChatIcon },
  { name: "profile", label: "Profile", Icon: ProfileIcon },
];

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const tabWidth = width / TAB_COUNT;
  const activeIndex = state.index;

  const translateX = useRef(
    new Animated.Value(activeIndex * tabWidth + (tabWidth - CIRCLE_SIZE) / 2)
  ).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: activeIndex * tabWidth + (tabWidth - CIRCLE_SIZE) / 2,
      duration: 200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [activeIndex, tabWidth]);

  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom || 8 }]}>
      <View style={styles.inner}>
        <Animated.View
          style={[styles.circle, { transform: [{ translateX }] }]}
        />

        {state.routes.map((route, index) => {
          const tab = TABS[index];
          const isActive = index === activeIndex;

          if (!tab) return null;

          return (
            <Pressable
              key={route.key}
              onPress={() => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!isActive && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
              style={[styles.tab, { width: tabWidth }]}
            >
              <tab.Icon size={22} color={isActive ? "#FFFFFF" : INACTIVE} />
              {!isActive && <Text style={styles.label}>{tab.label}</Text>}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 10,
  },
  inner: {
    flexDirection: "row",
    height: CONTENT_HEIGHT,
    position: "relative",
    alignItems: "center",
  },
  circle: {
    position: "absolute",
    top: (CONTENT_HEIGHT - CIRCLE_SIZE) / 2,
    left: 0,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: PRIMARY,
    zIndex: 0,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    height: CONTENT_HEIGHT,
    gap: 3,
    zIndex: 1,
  },
  label: {
    fontSize: 10,
    color: INACTIVE,
    fontFamily: "Poppins-Medium",
  },
});
