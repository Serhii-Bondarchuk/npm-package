import { CSSProperties, PropsWithChildren } from "react";

export type ButtonProps = {
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'large';
  className?: string;
  label?: string;
  fullWidth?: boolean;
  styles?: CSSProperties
  disabled?: boolean;
  id?: string
};

export type ButtonType = PropsWithChildren<ButtonProps>
export type ButtonState = ButtonType
