import {MUIThemeProvider} from "@/providers";
import {render, RenderOptions} from '@testing-library/react';
import React, {ReactElement} from 'react';
import {MemoryRouter} from 'react-router-dom';

type CustomRenderOptions = {
  route: string
};

const customRenderDefaultOptions: CustomRenderOptions = {
  route: '/'
};
const customRender = (
  ui: ReactElement,
  options: CustomRenderOptions = customRenderDefaultOptions,
  renderOptions?: RenderOptions
) => {
  // Overwrites customRenderDefaultOptions properties declared in options.
  options = {...customRenderDefaultOptions, ...options};

  const uiWithWrappers = (
    <MUIThemeProvider>
      <MemoryRouter initialEntries={[options.route]}>
        {ui}
      </MemoryRouter>
    </MUIThemeProvider>
  );

  return render(uiWithWrappers, renderOptions);
};

/*
eslint-disable import/export
 */
export * from '@testing-library/react';
export {customRender as render};
