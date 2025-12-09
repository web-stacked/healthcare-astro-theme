/**
 * Design System Type Definitions
 * Ensures type safety and consistency across the application
 */

export type ButtonVariant = "primary" | "primary-dark" | "white" | "white-outline";
export type ButtonSize = "base" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  level: HeadingLevel;
  className?: string;
  children?: React.ReactNode;
}

export type TextSize = "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
export type TextWeight = "normal" | "medium" | "semibold" | "bold";

export interface TextProps {
  size?: TextSize;
  weight?: TextWeight;
  className?: string;
  children?: React.ReactNode;
}

// Design Token Types
export interface DesignTokens {
  colors: {
    primary: string;
    primaryDark: string;
    primaryDarker: string;
    primaryLight: string;
    primaryLighter: string;
  };
  spacing: {
    buttonPx: string;
    buttonPy: string;
    buttonPxLg: string;
    buttonPyLg: string;
  };
  typography: {
    h1Mobile: string;
    h1Desktop: string;
    h2Mobile: string;
    h2Desktop: string;
    h3Mobile: string;
    h3Desktop: string;
    bodyMobile: string;
    bodyDesktop: string;
  };
}
