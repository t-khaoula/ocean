import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outlined";
  isFullSize?: boolean;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isFullSize,
  children,
}) => {
  return (
    <button
      className={`btn ${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : "btn-outlined"
      }`}
    >
      {children}
    </button>
  );
};
