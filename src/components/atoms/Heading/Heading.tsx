import { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  children: ReactNode;
  as?: HeadingLevel;
  gradient?: boolean;
  className?: string;
}

const levelStyles: Record<HeadingLevel, string> = {
  h1: "text-5xl md:text-7xl",
  h2: "text-4xl md:text-5xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
};

export default function Heading({
  children,
  as: Tag = "h1",
  gradient = false,
  className = "",
}: HeadingProps) {
  const gradientClass = gradient
    ? "bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
    : "";

  return (
    <Tag
      className={`font-bold tracking-tight ${levelStyles[Tag]} ${gradientClass} ${className}`}
    >
      {children}
    </Tag>
  );
}

