"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";

const navLinks = [
  { label: "Tasks", href: "/tasks" },
  { label: "Notes", href: "/notes" },
  { label: "News", href: "/news" },
];

const secondaryLinks = [
  { label: "Login", href: "/sign-in" },
  { label: "Register", href: "/sign-up", primary: true },
];

export default function AppHeader() {
  return (
    <header className={css.header}>
      <Link href="/" className={css.brand}>
        <span className={css.brandMark} />
        <div>
          <p className={css.brandName}>Pulse workspace</p>
          <span className={css.brandTag}>Demo portal</span>
        </div>
      </Link>

      <nav className={css.nav}>
        {navLinks.map((link) => (
          <Link className={css.navLink} key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={css.auth}>
        {secondaryLinks.map((link) => (
          <Link
            className={`${css.authLink} ${link.primary ? css.primary : ""}`}
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
