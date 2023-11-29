import {render, screen} from "@testing-library/react";
import {Filter} from "../routes/Filter";

describe('Filter', () => {
  test('basic rendering', () => {
    render(<Filter/>);
    expect(screen.getByRole('heading', {level: 1})).toBeVisible();
  });
});
