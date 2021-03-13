import React from "react";
import Style from "./Footer.module.css";

// Toggle the dark/light theme
const onThemeModeClick = () => {
  const waterCssTheme = document.getElementById("water.css_link");

  if (waterCssTheme.href === "https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css") {
    waterCssTheme.href = "https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css";
  } else {
    waterCssTheme.href = "https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css";
  }
};

const Footer = () => (
  <footer className={Style.footer}>
    <ul>
      <li>
        <a
          href="https://www.instagram.com/rhodlib_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/rhodlib"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://t.me/rhodlib"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </li>
      <li>
        <a
          href="https://github.com/rhodlib"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://bitbucket.org/rhodlib"
          target="_blank"
          rel="noopener noreferrer"
        >
          BitBucket
        </a>
      </li>
      <li>
        <a href="https://rhodlib.me" target="_blank" rel="noopener noreferrer">
          Website
        </a>
      </li>
    </ul>
    <p>Forked from https://github.com/rhodlib, developed further by XiRose</p>
    <button
      style={{ marginTop: "25px" }}
      onClick={onThemeModeClick}
    >
      Toggle dark/light mode 🌙 / ☀
    </button>
  </footer>
);

export default Footer;
