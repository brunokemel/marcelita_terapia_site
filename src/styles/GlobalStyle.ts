import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    color: ${theme.colors.ink};
    background: ${theme.colors.cream};
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  body, button, a { font-family: 'DM Sans', sans-serif; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a { color: inherit; }
  button { cursor: pointer; }
  ::selection { background: ${theme.colors.pink}; color: ${theme.colors.greenDark}; }
  :focus-visible { outline: 3px solid ${theme.colors.pink}; outline-offset: 4px; }
`;
