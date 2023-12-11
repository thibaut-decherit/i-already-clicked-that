import {render, screen} from "@/test/reactTestingLibraryOverrides";
import {Filter} from "../routes/Filter";

describe('Filter', () => {
  test('basic rendering', () => {
    render(<Filter/>);
    expect(screen.getByRole('heading', {level: 1})).toBeVisible();
  });
});
