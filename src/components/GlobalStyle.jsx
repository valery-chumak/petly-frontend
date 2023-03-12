import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Manrope';
  background-color: ${props => props.theme.colors.backgroundColor};
}

* {
  box-sizing: border-box;
}

li {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

ul {
  margin: 0;
  padding-left: 0;
}

img {
  display: block;
  width: 100%;
  height: auto;
}
`;
