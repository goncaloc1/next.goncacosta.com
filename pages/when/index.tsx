import Head from "next/head";
import Link from "next/link";
import styles from "./When.module.css";

import Script from "next/script";

export default function When() {
  return (
    <>
      <Head>
        <title>
          When was the last time someone wrote you a love letter? TODO
        </title>
        <meta
          name="description"
          content="When was the last time someone wrote you a love letter? TODO"
        />
      </Head>

      <div id="content">
        <div className="wrapper">
          <div id="firstCell" className="cell">
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
              <li>
                <a
                  id="read_book"
                  href="https://issuu.com/goncacosta/docs/when?mode=window&viewMode=doublePage"
                  target="_blank"
                >
                  <span>book</span>
                </a>
              </li>
            </ul>
          </div>
          <div id="secondCell" className="cell"></div>

          <div className="cell">
            <div id="first_img_wrapper">
              <img
                id={styles.photo_z}
                alt="portrait z"
                src="images/when/z.jpg"
              />
            </div>
          </div>

          <div className="cell">
            <div id="viewport">
              <div id="viewportCell">
                <img
                  src="images/when/when_zoom_out.png"
                  alt='"When was the last time someone wrote you a love letter? context'
                />
                <div id="zoomView">
                  <img
                    src="images/when/when_zoom_in.png"
                    alt='"When was the last time someone wrote you a love letter? context (zoom)'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_a}
                alt="portrait a"
                src="images/when/a.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_b}
                alt="portrait b"
                src="images/when/b.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_c}
                alt="portrait c"
                src="images/when/c.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_d}
                alt="portrait d"
                src="images/when/d.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_e}
                alt="portrait e"
                src="images/when/e.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_f}
                alt="portrait f"
                src="images/when/f.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_g}
                alt="portrait g"
                src="images/when/g.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_g1}
                alt="portrait g1"
                src="images/when/g1.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_g2}
                alt="portrait g2"
                src="images/when/g2.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_h}
                alt="portrait h"
                src="images/when/h.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_i}
                alt="portrait i"
                src="images/when/i.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_j}
                alt="portrait j"
                src="images/when/j.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_k}
                alt="portrait k"
                src="images/when/k.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_l}
                alt="portrait l"
                src="images/when/l.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_m}
                alt="portrait m"
                src="images/when/m.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_n}
                alt="portrait n"
                src="images/when/n.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_o}
                alt="portrait o"
                src="images/when/o.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_p}
                alt="portrait p"
                src="images/when/p.jpg"
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img
                id={styles.photo_q}
                alt="portrait q"
                src="images/when/q.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #first_img_wrapper {
          width: 1040px; /* value to be replaced in js */
          text-align: center;
        }

        /*	------------------
        Zoom in / Zoom out
        ------------------ */
        #viewport {
          display: table;
          width: 672px;
          height: 500px;
          position: relative;
        }

        #viewportCell {
          display: table-cell;
          vertical-align: middle;
          text-align: center;
        }

        #viewportCell > img {
          width: 537px;
          height: 400px;
          visibility: hidden;
        }

        #zoomView {
          float: left;
          position: absolute;
          top: 0;
          display: none;
        }

        #zoomView img {
          width: 672px;
          height: 500px;
        }
      `}</style>

      <Script>{`new WhenPage().setup();`}</Script>
    </>
  );
}
