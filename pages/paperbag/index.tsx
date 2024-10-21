import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "./Paperbag.module.css";

import photo1 from "/public/images/paperbag/1.jpg";
import photo5 from "/public/images/paperbag/5.jpg";
import photo7 from "/public/images/paperbag/7.jpg";
import photof from "/public/images/paperbag/f.jpg";
import photog from "/public/images/paperbag/g.jpg";
import photoh from "/public/images/paperbag/h.jpg";
import photo6 from "/public/images/paperbag/6.jpg";
import photoe from "/public/images/paperbag/e.jpg";
import photoa from "/public/images/paperbag/a.jpg";
import photoi from "/public/images/paperbag/i.jpg";

import { useWheel } from "../../hooks/useWheel";
import { useFullScreen } from "../../hooks/useFullScreen";

export default function Paperbag() {
  useWheel();
  useFullScreen();

  return (<>
    <Head>
      <title>It's a paper bag to scream, It's a bag of affections</title>
      <meta
        name="description"
        content="It's a paper bag to scream, It's a bag of affections - Gonçalo Costa, 2008"
      />
    </Head>
    <div id="content" className="horizontal_scroll">
      <div className="wrapper" style={{ width: "max-content" }}>
        <div className="cell">
          <ul id="navigation_menu">
            <li>
              <Link legacyBehavior href="/">
                <a id="back">
                  <span>back</span>
                </a>
              </Link>
            </li>
            <li>
              <a id="fullscreen">
                <span>fullscreen</span>
              </a>
            </li>
            <li>
              <a id="exit_fullscreen">
                <span>exit fullscreen</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="cell">
          <div className={`header ${styles.header}`}>
            <div id="description"></div>
            <div className="title">
              <div className="title_left">
                It's a paper bag to scream, It's a bag of affections
              </div>
              <div className="title_right">2008</div>
            </div>
          </div>
        </div>
        <div className="cell">
          <div className={styles.boxNarrow}>
            <Image
              alt="photo"
              id={styles.photo_1}
              src={photo1}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className="cell">
          <div className={styles.boxDistantX}>
            <Image
              alt="photo"
              id={styles.photo_5}
              src={photo5}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className="cell">
          <div className={styles.boxDistantX}>
            <Image
              alt="photo"
              id={styles.photo_7}
              src={photo7}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className={styles.cell_bottom}>
          <div className={styles.boxNarrow}>
            <Image
              alt="photo"
              id={styles.photo_f}
              src={photof}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className={styles.cell_bottom}>
          <div className={styles.boxDistantX}>
            <Image
              alt="photo"
              id={styles.photo_g}
              src={photog}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className="cell">
          <div id={styles.photo_h_box} className={styles.boxDistantXX}>
            <Image
              alt="photo"
              id={styles.photo_h}
              src={photoh}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className="cell">
          <div className={styles.boxDistantXXX}>
            <Image
              alt="photo"
              id={styles.photo_6}
              src={photo6}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className="cell">
          <div className={styles.boxNarrow}>
            <Image
              alt="photo"
              id={styles.photo_e}
              src={photoe}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className="cell">
          <div className={styles.boxDistantXX}>
            <Image
              alt="photo"
              id={styles.photo_a}
              src={photoa}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className="cell">
          <div className={styles.boxDistantX}>
            <Image
              alt="photo"
              id={styles.photo_i}
              src={photoi}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
      </div>
    </div>
  </>);
}
