export const colors = {
  // Primary brand
  primary: "#6C4EF5",
  primaryDeep: "#5B3BF6",
  linguaBlue: "#4D8BFF",
  linguaGreen: "#21C16B",

  // Semantic
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",

  // Neutrals
  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const typography = {
  h1: { fontFamily: fonts.bold, fontSize: 32, lineHeight: 38 },
  h2: { fontFamily: fonts.semiBold, fontSize: 24, lineHeight: 31 },
  h3: { fontFamily: fonts.semiBold, fontSize: 20, lineHeight: 26 },
  h4: { fontFamily: fonts.medium, fontSize: 16, lineHeight: 22 },
  bodyLg: { fontFamily: fonts.regular, fontSize: 16, lineHeight: 26 },
  bodyMd: { fontFamily: fonts.regular, fontSize: 14, lineHeight: 22 },
  bodySm: { fontFamily: fonts.regular, fontSize: 13, lineHeight: 21 },
  caption: { fontFamily: fonts.regular, fontSize: 11, lineHeight: 15 },
} as const;
