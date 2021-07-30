import React from "react";

function Header(onLogout) {
  return (
    <header>
      {onLogout && <button onClick={onLogout}>Logout</button>}
      <img src="/images/logo.png" alt="logo" />
      <h1>Business card maker</h1>
    </header>
  );
}

export default Header;
