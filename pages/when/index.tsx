import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./When.module.css";

import Script from "next/script";

import photoz from "/public/images/when/z.jpg";
import whenZoomIn from "/public/images/when/when_zoom_in.png";
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

import { useWheel } from "../../hooks/useWheel";

export default function When() {
  useWheel();

  return (
    <>
      <Head>
        <title>When was the last time someone wrote you a love letter?</title>
        <meta
          name="description"
          content="When was the last time someone wrote you a love letter? - Gonçalo Costa, 2009-10"
        />
      </Head>

      <div id="content" className="horizontal_scroll">
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

          <div className="cell">
            <div className="boxDistantXX" style={{ marginLeft: "600px" }}>
              <Image
                alt="portrait z"
                src={photoz}
                layout="fixed"
                priority={true}
                quality={100}
                width={640}
                height={643}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                alt="when text"
                src={whenZoomIn}
                layout="fixed"
                priority={true}
                quality={100}
                width={750}
                height={558}
              />
            </div>
          </div>

          <div className="cell">
            <div className="boxDistantXX">
              <Image
                alt="portrait a"
                src={photoa}
                layout="fixed"
                priority={true}
                quality={100}
                width={640}
                height={646}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <Image
                alt="portrait b"
                src={photob}
                layout="fixed"
                priority={true}
                quality={100}
                width={640}
                height={645}
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
                width={640}
                height={642}
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
                width={640}
                height={642}
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
                width={640}
                height={644}
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
                width={640}
                height={639}
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
                width={640}
                height={641}
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
                width={640}
                height={638}
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
                width={640}
                height={644}
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
                width={640}
                height={646}
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
                width={640}
                height={639}
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
                width={640}
                height={640}
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
                width={640}
                height={639}
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
                width={640}
                height={641}
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
                width={640}
                height={642}
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
                width={640}
                height={642}
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
                width={640}
                height={644}
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
                width={640}
                height={641}
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
                width={640}
                height={645}
              />
            </div>
          </div>
        </div>
      </div>

      <Script>{`new WhenPage().setup();`}</Script>
    </>
  );
}
