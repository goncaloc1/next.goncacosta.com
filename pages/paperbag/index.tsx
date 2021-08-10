import Head from "next/head";
import Link from "next/link";
import styles from "./Paperbag.module.css";

import Script from "next/script";

export default function Paperbag() {
  return (
    <>
      <Head>
        <title>Paperbag TODO</title>
        <meta name="description" content="Paperbag TODO" />
      </Head>

      <div id="content">
        <div className="wrapper">
          <div className="cell">
            <ul id="navigation_menu">
              <li>
                <Link href="/">
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
              <img
                alt="photo"
                id={styles.photo_1}
                src="images/paperbag/1.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxDistantX}>
              <img
                alt="photo"
                id={styles.photo_5}
                src="images/paperbag/5.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxDistantX}>
              <img
                alt="photo"
                id={styles.photo_7}
                src="images/paperbag/7.jpg"
              />
            </div>
          </div>
          <div className={styles.cell_bottom}>
            <div className={styles.boxNarrow}>
              <img
                alt="photo"
                id={styles.photo_f}
                src="images/paperbag/f.jpg"
              />
            </div>
          </div>
          <div className={styles.cell_bottom}>
            <div className={styles.boxDistantX}>
              <img
                alt="photo"
                id={styles.photo_g}
                src="images/paperbag/g.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div id={styles.photo_h_box} className={styles.boxDistantXX}>
              <img
                alt="photo"
                id={styles.photo_h}
                src="images/paperbag/h.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxDistantXXX}>
              <img
                alt="photo"
                id={styles.photo_6}
                src="images/paperbag/6.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxNarrow}>
              <img
                alt="photo"
                id={styles.photo_e}
                src="images/paperbag/e.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxDistantXX}>
              <img
                alt="photo"
                id={styles.photo_a}
                src="images/paperbag/a.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxDistantX}>
              <img
                alt="photo"
                id={styles.photo_i}
                src="images/paperbag/i.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <Script>{`new PaperbagPage().setup();`}</Script>
    </>
  );
}
