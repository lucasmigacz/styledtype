import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  /* background: transparent; */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #a0d1d1;
  border-radius: 15px;
}
}
body {
  background: rgb(88, 83, 83);
}
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
