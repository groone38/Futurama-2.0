import { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum StyleButton {
  DEFAULT = "default",
  DESTRUCTIVE = "destructive",
  OUTLINE = "outline",
  SUBTITLE = "subtitle",
  GHOST = "ghost",
  LINK = "link",
  LOADING = "loading",
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  stylebutton?: StyleButton;
}

export const Button = ({
  className,
  children,
  stylebutton,
  disabled,
  ...other
}: IButton) => {
  const mods = {
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className, cls[stylebutton]])}
      {...other}
    >
      {children}
    </button>
  );
};
