import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "myfont";
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }
`;
