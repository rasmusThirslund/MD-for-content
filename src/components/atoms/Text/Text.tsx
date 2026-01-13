import { ReactNode } from "react";

type TextSize = "sm" | "base" | "lg" | "xl";

interface TextProps {
  children: ReactNode;
  size?: TextSize;
  muted?: boolean;
  className?: string;
}

const sizeStyles: Record<TextSize, string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg md:text-xl",
  xl: "text-xl md:text-2xl",
};

export default function Text({
  children,
  size = "base",
  muted = false,
  className = "",
}: TextProps) {
  const mutedClass = muted ? "text-slate-300" : "text-white";

  return (
    <p className={`leading-relaxed ${sizeStyles[size]} ${mutedClass} ${className}`}>
      {children}
    </p>
  );
}

