import { render, fireEvent, screen } from "@testing-library/react";
import { Input } from "./Input";

const onChange = jest.fn();

const setup = () => {
  const utils = render(<Input onChange={onChange} placeholder="Test" />);
  const input = screen.getByPlaceholderText("Test") as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

describe("Input", () => {
  test("OnChange", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
});
