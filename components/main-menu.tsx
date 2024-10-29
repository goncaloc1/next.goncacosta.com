import React from "react";
import Link from "next/link";
import { NavigationColors } from "../lib/navigationColors";

type MainMenuProps = {
  navigationColors: NavigationColors;
};

const MainMenu = ({ navigationColors }: MainMenuProps) => (
  <>
    <nav>
      <a className={navigationColors.goncalocosta}>gonçalo costa</a>
      <a className="spacer">&nbsp;</a>
      <a className={navigationColors.gallery}>gallery</a>
      <Link legacyBehavior href="/reminiscencia">
        <a className={navigationColors.reminiscencia}>reminiscencia</a>
      </Link>
      <Link legacyBehavior href="/alba">
        <a className={navigationColors.alba}>alba</a>
      </Link>
      <Link legacyBehavior href="/when">
        <a id="when" className={navigationColors.when}>
          when was the last time someone wrote you a love letter?
        </a>
      </Link>
      <Link legacyBehavior href="/paperbag">
        <a id="paperbag" className={navigationColors.paperbag}>
          it's a paper bag to scream, it's a bag of affections
        </a>
      </Link>
      <a className={navigationColors.archive}>archive</a>
      <Link legacyBehavior href="/oulu">
        <a className={navigationColors.oulu}>oulu</a>
      </Link>
      <Link legacyBehavior href="/sopra">
        <a className={navigationColors.sopra}>sopra</a>
      </Link>
      <Link legacyBehavior href="/fado">
        <a className={navigationColors.fado}>fado</a>
      </Link>
      <a className="spacer">&nbsp;</a>
      <a id="email" className={navigationColors.email}>
        goncacosta at gmail dot com
      </a>
    </nav>

    <style jsx>{`
      nav {
        color: #444;
        font-family: "Dosis", sans-serif;
        font-size: 14pt;
        letter-spacing: 0.03em;
        line-height: 1em;
        font-variant: small-caps;
      }

      nav .spacer {
        background-color: #fff;
      }

      nav a {
        display: block;
        padding: 7px 60px 9px 10px;
        margin: 0 0 1px 0;

        float: left;
        clear: left;

        -moz-border-radius: 0 3px 3px 0;
        -webkit-border-radius: 0 3px 3px 0;
        -khtml-border-radius: 0 3px 3px 0;
        border-radius: 0 3px 3px 0;
      }

      nav a:link,
      nav a:visited,
      nav a:active {
        color: #444;
      }

      #when {
        width: 150px;
      }

      #paperbag {
        width: 120px;
      }

      #email {
        font-size: 0.9em;
      }

      .main_color1 {
        background: rgba(56, 117, 60, 0.15);
      }
      .main_color2 {
        background: rgba(95, 133, 63, 0.15);
      }
      .main_color3 {
        background: rgba(50, 50, 104, 0.15);
      }
      .main_color4 {
        background: rgba(47, 70, 98, 0.15);
      }
      .main_color5 {
        background: rgba(149, 77, 71, 0.15);
      }
      .main_color6 {
        background: rgba(149, 113, 71, 0.15);
      }
      .main_color7 {
        background: rgba(44, 83, 92, 0.15);
      }
      .main_color8 {
        background: rgba(85, 47, 99, 0.15);
      }
      .main_color9 {
        background: rgba(17, 17, 17, 0.15);
      }

      .main_color1:hover {
        background: rgba(56, 117, 60, 0.3);
      }
      .main_color2:hover {
        background: rgba(95, 133, 63, 0.3);
      }
      .main_color3:hover {
        background: rgba(50, 50, 104, 0.3);
      }
      .main_color4:hover {
        background: rgba(47, 70, 98, 0.3);
      }
      .main_color5:hover {
        background: rgba(149, 77, 71, 0.3);
      }
      .main_color6:hover {
        background: rgba(149, 113, 71, 0.3);
      }
      .main_color7:hover {
        background: rgba(44, 83, 92, 0.3);
      }
      .main_color8:hover {
        background: rgba(85, 47, 99, 0.3);
      }
      .main_color9:hover {
        background: rgba(17, 17, 17, 0.3);
      }

      .secondary_color1 {
        background: rgba(130, 135, 131, 0.05);
      }
      .secondary_color2 {
        background: rgba(172, 181, 172, 0.05);
      }
      .secondary_color3 {
        background: rgba(109, 111, 113, 0.05);
      }
      .secondary_color4 {
        background: rgba(143, 146, 150, 0.05);
      }
      .secondary_color5 {
        background: rgba(167, 168, 161, 0.05);
      }

      .secondary_color1:hover {
        background: rgba(130, 135, 131, 0.3);
      }
      .secondary_color2:hover {
        background: rgba(172, 181, 172, 0.3);
      }
      .secondary_color3:hover {
        background: rgba(109, 111, 113, 0.3);
      }
      .secondary_color4:hover {
        background: rgba(143, 146, 150, 0.3);
      }
      .secondary_color5:hover {
        background: rgba(167, 168, 161, 0.3);
      }

      .secondary_color11 {
        background: rgba(130, 135, 131, 0.05);
      }
      .secondary_color12 {
        background: rgba(172, 181, 172, 0.05);
      }
      .secondary_color13 {
        background: rgba(143, 146, 150, 0.2);
      }
      .secondary_color14 {
        background: rgba(167, 168, 161, 0.2);
      }
    `}</style>
  </>
);

export default MainMenu;
