import { MemoryRouter } from "react-router-dom";
import Nav from ".";
import { navConfig } from "./navConfig";
import { render } from "@testing-library/react";

describe("Nav", () => {
  it("should render all the links from the navConfigs", () => {
    const navConfigItemsLength = navConfig.length;
    const screen = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    const navLinks = screen.getByRole("navigation").childNodes;
    expect(navLinks.length).toBe(navConfigItemsLength);
  });
});
