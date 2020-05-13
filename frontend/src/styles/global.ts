import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body {
  height: 100vh;
}

body {
  -webkit-font-smoothing: antialiased;
}

body,
input,
select,
textarea,
button {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

#root {
  height: 100%;
}

button {
  cursor: pointer;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`;
