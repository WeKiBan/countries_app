import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  textColor: 'hsl(200, 15%, 8%)',
  elements: 'hsl(0, 0%, 100%)',
  background: 'hsl(0, 0%, 98%)',
  input: 'white',
  fontFamily: "'Nunito Sans', sans-serif",
};

export const darkTheme = {
  textColor: 'hsl(0, 0%, 100%)',
  elements: 'hsl(209, 23%, 22%)',
  background: 'rgb(32, 44, 55)',
  input: 'hsl(0, 0%, 52%)',
  fontFamily: "'Nunito Sans', sans-serif",
};

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;500;600;700;800;900&display=swap');

*{
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.textColor}
}

html,
body {
  padding: 0;
  margin: 0;
}

body{
  background-color: ${({ theme }) => theme.background}
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
