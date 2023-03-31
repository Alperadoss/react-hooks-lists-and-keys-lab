import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchorlinks = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{anchorlinks}</nav>;
}

export default NavBar;
