import {render, screen} from "@testing-library/react";
import {Navbar} from "./Navbar";

describe('Navbar', () => {
  test('basic rendering', () => {
    render(<Navbar title="dummy"/>);
    expect(screen.getByRole('heading', {level: 1})).toBeVisible();
  });
});
