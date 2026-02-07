import { render, screen } from "@testing-library/react";
import StatusPill from "../components/ui/StatusPill";

describe("StatusPill", () => {
  it("renders status text", () => {
    render(<StatusPill status="Approved" />);
    expect(screen.getByText("Approved")).toBeInTheDocument();
  });

  it("applies variant styles", () => {
    const { container } = render(<StatusPill status="Under Review" />);
    expect(container.querySelector("span")).toHaveClass("status-badge");
  });
});
