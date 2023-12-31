import {render, screen} from "@/test/reactTestingLibraryOverrides";
import {Navbar} from "./Navbar";

describe('Navbar', () => {
  test('basic rendering', () => {
    render(<Navbar title="dummy"/>);
    expect(screen.getByRole('heading', {level: 1})).toBeVisible();
  });
});
