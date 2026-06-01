'use client';
import { Button } from "@mui/material";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.header}>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Courses</li>
      </ul>
      <div className={scss.buttonMenu}>
        <Button>Sign In</Button>
        <Button>Sign Out</Button>
        <Button>Register</Button>
      </div>
    </header>
  );
};

export default Header;