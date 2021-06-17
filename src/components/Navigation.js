import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">메인화면</Link>
      </li>
      <li>
        <Link to="/Profile">{userObj.displayName} 프로필</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
