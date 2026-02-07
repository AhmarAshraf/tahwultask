import { render, screen } from "@testing-library/react";
import Button from "../components/ui/Button";

describe("Button", () => {
  it("renders label text", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<Button disabled>Submit</Button>);
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });
});
