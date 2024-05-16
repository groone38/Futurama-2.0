import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Inout.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface IInput extends HTMLInputProps {
  value?: string;
  className?: string;
  helper?: string;
  onChange: (value: string) => void;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  className,
  disabled,
  helper,
  ...otherProps
}: IInput) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [])}>
      {placeholder && (
        <div
          className={classNames(
            cls.placeholder,
            { [cls.disabled]: disabled },
            []
          )}
        >
          {placeholder}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        placeholder={placeholder}
        disabled={disabled}
        {...otherProps}
      />
      {helper && (
        <span
          className={classNames(cls.helper, { [cls.disabled]: disabled }, [])}
        >
          {helper}
        </span>
      )}
    </div>
  );
};
