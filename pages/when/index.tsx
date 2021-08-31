import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./When.module.css";

import Script from "next/script";

import photoz from "/public/images/when/z.jpg";
import photoa from "/public/images/when/a.jpg";
import photob from "/public/images/when/b.jpg";
import photoc from "/public/images/when/c.jpg";
import photod from "/public/images/when/d.jpg";
import photoe from "/public/images/when/e.jpg";
import photof from "/public/images/when/f.jpg";
import photog from "/public/images/when/g.jpg";
import photog1 from "/public/images/when/g1.jpg";
import photog2 from "/public/images/when/g2.jpg";
import photoh from "/public/images/when/h.jpg";
import photoi from "/public/images/when/i.jpg";
import photoj from "/public/images/when/j.jpg";
import photok from "/public/images/when/k.jpg";
import photol from "/public/images/when/l.jpg";
import photom from "/public/images/when/m.jpg";
import photon from "/public/images/when/n.jpg";
import photoo from "/public/images/when/o.jpg";
import photop from "/public/images/when/p.jpg";
import photoq from "/public/images/when/q.jpg";

export default function When() {
  return (
    <>
      <Head>
        <title>When was the last time someone wrote you a love letter?</title>
        <meta
          name="description"
          content="When was the last time someone wrote you a love letter? - Gonçalo Costa, 2009-10"
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
                  rel="noreferrer"
                >
                  <span>book</span>
                </a>
              </li>
            </ul>
          </div>
          <div id="secondCell" className="cell"></div>

          <div className="cell">
            <div
              id="first_img_wrapper"
              //style={{ height: "600px", width: "597px" }}
            >
              <Image
                //id={styles.photo_z}
                alt="portrait z"
                src={photoz}
                layout="fixed"
                priority={true}
                quality={100}
                width={597}
                height={600}
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
            <div
              className="boxDistantXX"
              //id={styles.photo_a}
            >
              <Image
                alt="portrait a"
                src={photoa}
                layout="fixed"
                priority={true}
                quality={100}
                width={594}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div
              className="boxDistantXX"
              //id={styles.photo_b}
              //style={{ height: "600px", width: "595px" }}
            >
              <Image
                alt="portrait b"
                src={photob}
                layout="fixed"
                priority={true}
                quality={100}
                width={595}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                alt="portrait c"
                src={photoc}
                layout="fixed"
                priority={true}
                quality={100}
                width={598}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_d}
                alt="portrait d"
                src={photod}
                layout="fixed"
                priority={true}
                quality={100}
                width={599}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_e}
                alt="portrait e"
                src={photoe}
                layout="fixed"
                priority={true}
                quality={100}
                width={596}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_f}
                alt="portrait f"
                src={photof}
                layout="fixed"
                priority={true}
                quality={100}
                width={601}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_g}
                alt="portrait g"
                src={photog}
                layout="fixed"
                priority={true}
                quality={100}
                width={599}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_g1}
                alt="portrait g1"
                src={photog1}
                layout="fixed"
                priority={true}
                quality={100}
                width={605}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_g2}
                alt="portrait g2"
                src={photog2}
                layout="fixed"
                priority={true}
                quality={100}
                width={602}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_h}
                alt="portrait h"
                src={photoh}
                layout="fixed"
                priority={true}
                quality={100}
                width={594}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_i}
                alt="portrait i"
                src={photoi}
                layout="fixed"
                priority={true}
                quality={100}
                width={601}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_j}
                alt="portrait j"
                src={photoj}
                layout="fixed"
                priority={true}
                quality={100}
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_k}
                alt="portrait k"
                src={photok}
                layout="fixed"
                priority={true}
                quality={100}
                width={601}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_l}
                alt="portrait l"
                src={photol}
                layout="fixed"
                priority={true}
                quality={100}
                width={599}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_m}
                alt="portrait m"
                src={photom}
                layout="fixed"
                priority={true}
                quality={100}
                width={599}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_n}
                alt="portrait n"
                src={photon}
                layout="fixed"
                priority={true}
                quality={100}
                width={598}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_o}
                alt="portrait o"
                src={photoo}
                layout="fixed"
                priority={true}
                quality={100}
                width={596}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_p}
                alt="portrait p"
                src={photop}
                layout="fixed"
                priority={true}
                quality={100}
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                id={styles.photo_q}
                alt="portrait q"
                src={photoq}
                layout="fixed"
                priority={true}
                quality={100}
                width={596}
                height={600}
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
