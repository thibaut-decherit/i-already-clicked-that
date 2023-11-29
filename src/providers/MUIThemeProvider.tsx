import {createTheme, ThemeProvider} from '@mui/material/styles';
import PropTypes from "prop-types";
import {ReactNode} from "react";

declare module '@mui/material/styles' {
  interface Palette {
    'gray-700': Palette['primary'];
  }

  interface PaletteOptions {
    'gray-700'?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    'gray-700': true;
  }
}

const MUIThemeProvider = (
  {
    children
  }: {
    children: ReactNode;
  }
) => {
  let theme = createTheme({
    typography: {
      fontFamily: [
        'sans-serif'
      ].join(',')
    }
  });

  theme = createTheme(theme, {
    palette: {
      'gray-700': theme.palette.augmentColor({
        color: {
          main: '#374151',
        },
        name: 'gray-700',
      }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

MUIThemeProvider.propTypes = {
  children: PropTypes.object.isRequired
};

export {
  MUIThemeProvider
};
