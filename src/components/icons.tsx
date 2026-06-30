import Svg, { Path } from "react-native-svg";

type IconProps = {
  size?: number;
  color?: string;
};

/* ── Brand logos ─────────────────────────────────────────────── */

export function GoogleIcon({ size = 22 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48">
      <Path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <Path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
      />
      <Path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <Path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </Svg>
  );
}

export function FacebookIcon({ size = 22 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48">
      <Path
        fill="#1877F2"
        d="M24 4C12.954 4 4 12.954 4 24c0 9.984 7.314 18.257 16.875 19.757V29.781h-5.078V24h5.078v-4.406c0-5.013 2.986-7.781 7.554-7.781c2.188 0 4.476.391 4.476.391v4.922h-2.522c-2.484 0-3.258 1.542-3.258 3.123V24h5.547l-.887 5.781h-4.66v13.976C36.686 42.257 44 33.984 44 24c0-11.046-8.954-20-20-20z"
      />
      <Path
        fill="#FFFFFF"
        d="M31.328 29.781L32.215 24h-5.547v-3.751c0-1.581.774-3.123 3.258-3.123h2.522v-4.922s-2.288-.391-4.476-.391c-4.568 0-7.554 2.768-7.554 7.781V24h-5.078v5.781h5.078v13.976a20.2 20.2 0 0 0 6.25 0V29.781h4.66z"
      />
    </Svg>
  );
}

export function AppleIcon({ size = 22, color = "#0D132B" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M17.05 12.04c-.03-2.91 2.38-4.31 2.49-4.38c-1.36-1.99-3.47-2.26-4.22-2.29c-1.8-.18-3.51 1.06-4.42 1.06c-.9 0-2.31-1.03-3.8-1.01c-1.96.03-3.76 1.14-4.77 2.89c-2.03 3.53-.52 8.76 1.45 11.62c.96 1.4 2.11 2.98 3.61 2.92c1.45-.06 2-.94 3.75-.94c1.75 0 2.24.94 3.77.91c1.56-.03 2.54-1.43 3.49-2.84c1.1-1.63 1.55-3.21 1.58-3.29c-.03-.02-3.03-1.16-3.06-4.61zM14.13 3.5c.8-.97 1.34-2.32 1.19-3.66c-1.15.05-2.55.77-3.38 1.74c-.74.86-1.39 2.23-1.22 3.55c1.28.1 2.59-.65 3.41-1.63z"
      />
    </Svg>
  );
}

/* ── UI icons ────────────────────────────────────────────────── */

export function ChevronLeftIcon({ size = 26, color = "#0D132B" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M15 18l-6-6 6-6"
        stroke={color}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export function EyeIcon({ size = 24, color = "#9AA0AE" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export function EyeOffIcon({ size = 24, color = "#9AA0AE" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M3 3l18 18M10.6 10.6a3 3 0 004.2 4.2M9.4 5.2A9.5 9.5 0 0112 5c6.5 0 10 7 10 7a17.6 17.6 0 01-3.4 4.2M6.1 6.1A17.4 17.4 0 002 12s3.5 7 10 7a9.6 9.6 0 003.9-.8"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export function ChevronRightIcon({ size = 24, color = "#0D132B" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M9 18l6-6-6-6"
        stroke={color}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export function SearchIcon({ size = 20, color = "#9AA0AE" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export function GlobeIcon({ size = 22, color = "#6B7280" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 2a10 10 0 100 20A10 10 0 0012 2z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}
