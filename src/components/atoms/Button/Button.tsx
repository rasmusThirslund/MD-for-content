import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-violet-500/25 hover:opacity-90",
  secondary:
    "border border-white/20 text-white backdrop-blur-sm hover:bg-white/10",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-8 py-4 font-semibold rounded-full transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

