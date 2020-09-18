import React from "react";

import { Link } from "@reach/router";
import { css } from "@emotion/core";

function NavBar() {
  return (
    <header
      css={css`
        background-color: #333;
        padding: 15px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
    </header>
  );
}

export default NavBar;
