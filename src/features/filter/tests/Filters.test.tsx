import {render, screen} from "@testing-library/react";
import {Filters} from '../routes/Filters';

describe('Filters', () => {
  test('basic rendering', () => {
    render(<Filters/>);
    expect(screen.getByRole('heading', {level: 1})).toBeVisible();
  });
});
