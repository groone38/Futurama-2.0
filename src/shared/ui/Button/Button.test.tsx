import { render, screen } from "@testing-library/react";
import { Button, StyleButton } from "shared/ui/Button/Button";

describe("Button", () => {
  test("Test render", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("Click test", () => {
    render(<Button stylebutton={StyleButton.GHOST}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("ghost");
    screen.debug();
  });
});
