import React, { ChangeEvent, InputHTMLAttributes } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface IInput extends HTMLInputProps {
  value?: string;
  onChange: (value: string) => void;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  ...otherProps
}: IInput) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
};
