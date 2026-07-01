import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  GlobeIcon,
  SearchIcon,
} from "@/components/icons";
import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";
import type { Language } from "@/types/learning";

function LanguageRow({
  language,
  selected,
  showDivider,
  onPress,
}: {
  language: Language;
  selected: boolean;
  showDivider: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onPress}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 13,
          marginHorizontal: 20,
        },
        selected && {
          backgroundColor: "#EEEAFE",
          borderRadius: 16,
          borderWidth: 2,
          borderColor: "#6C4EF5",
          marginBottom: 4,
        },
      ]}
    >
      {/* Flag circle */}
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          overflow: "hidden",
          backgroundColor: "#E5E7EB",
          marginRight: 14,
        }}
      >
        <Image
          source={{ uri: language.flag }}
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"
        />
      </View>

      {/* Name + learners */}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,
            color: "#0D132B",
            lineHeight: 22,
          }}
        >
          {language.name}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 13,
            color: "#6B7280",
            marginTop: 1,
          }}
        >
          {language.totalLearners} learners
        </Text>
      </View>

      {/* Right: checkmark or chevron */}
      {selected ? (
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "#6C4EF5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 15,
              fontFamily: "Poppins-Bold",
              lineHeight: 20,
            }}
          >
            ✓
          </Text>
        </View>
      ) : (
        <ChevronRightIcon size={20} color="#C4C9D4" />
      )}

      {/* Inset divider for unselected non-last rows */}
      {!selected && showDivider && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 80,
            right: 20,
            height: 1,
            backgroundColor: "#F0F1F5",
          }}
        />
      )}
    </TouchableOpacity>
  );
}

export default function LanguageSelection() {
  const router = useRouter();
  const { width: screenWidth } = useWindowDimensions();
  const { selectedLanguageId, setSelectedLanguage } = useLanguageStore();
  const [selectedId, setSelectedId] = useState<string | null>(selectedLanguageId);
  const [search, setSearch] = useState("");
  const [earthHeight, setEarthHeight] = useState(screenWidth);

  const filtered = search.trim()
    ? languages.filter(
        (l) =>
          l.name.toLowerCase().includes(search.toLowerCase()) ||
          l.nativeName.toLowerCase().includes(search.toLowerCase())
      )
    : languages;

  const selected = languages.find((l) => l.id === selectedId) ?? null;

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar style="dark" />

      {/* ── Fixed top section ─────────────────────────────────── */}

      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: 8,
          paddingBottom: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronLeftIcon size={26} color="#0D132B" />
        </TouchableOpacity>

        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontFamily: "Poppins-SemiBold",
            fontSize: 18,
            color: "#0D132B",
          }}
        >
          Choose a language
        </Text>

        <View style={{ width: 40 }} />
      </View>

      {/* Search bar */}
      <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F6F7FB",
            borderRadius: 30,
            paddingHorizontal: 18,
            height: 50,
          }}
        >
          <SearchIcon size={19} color="#9CA3AF" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search languages"
            placeholderTextColor="#9CA3AF"
            style={{
              flex: 1,
              marginLeft: 10,
              fontFamily: "Poppins-Regular",
              fontSize: 15,
              color: "#0D132B",
            }}
          />
        </View>
      </View>

      {/* Popular label */}
      <Text
        style={{
          paddingHorizontal: 20,
          marginBottom: 10,
          fontFamily: "Poppins-Bold",
          fontSize: 18,
          color: "#0D132B",
        }}
      >
        Popular
      </Text>

      {/* ── Scrollable language list ───────────────────────────── */}
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {filtered.map((lang, index) => (
          <LanguageRow
            key={lang.id}
            language={lang}
            selected={selectedId === lang.id}
            showDivider={index < filtered.length - 1}
            onPress={() =>
              setSelectedId((prev) => (prev === lang.id ? null : lang.id))
            }
          />
        ))}
      </ScrollView>

      {/* ── Fixed bottom section ───────────────────────────────── */}

      {/* Confirmation button */}
      <TouchableOpacity
        activeOpacity={selected ? 0.85 : 0.5}
        onPress={() => {
          if (!selected) return;
          setSelectedLanguage(selected.id);
          router.replace("/");
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
          marginTop: 4,
          height: 58,
          borderRadius: 30,
          backgroundColor: selected ? "#6C4EF5" : "#F6F7FB",
        }}
      >
        <GlobeIcon size={22} color={selected ? "#FFFFFF" : "#6B7280"} />
        <Text
          style={{
            marginLeft: 10,
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,
            color: selected ? "#FFFFFF" : "#6B7280",
          }}
        >
          {selected ? `Start Learning ${selected.name}` : "See all languages"}
        </Text>
      </TouchableOpacity>

      {/* Earth illustration — container clips top whitespace, image anchored to bottom */}
      <View style={{ height: screenWidth * 0.68, overflow: "hidden" }}>
        <Image
          source={images.earth}
          style={{
            width: screenWidth,
            height: earthHeight,
            position: "absolute",
            bottom: 0,
          }}
          contentFit="contain"
          onLoad={(e) => {
            const { width, height } = e.source;
            if (width && height) {
              setEarthHeight((screenWidth / width) * height);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}
