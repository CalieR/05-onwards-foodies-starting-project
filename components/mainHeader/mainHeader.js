import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./mainHeaderBackground";
import NavLink from "./navLink";

import logoImg from "@/assets/logo.png";
import classes from "./mainHeader.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            src={logoImg}
            alt="A plate of different types of food"
            priority
          />
          Incredible Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
              <NavLink href="/community">The Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
