import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
import { useFullScreen } from "../../hooks/useFullScreen";

export default function When() {
  useWheel();
  useFullScreen();

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
            <div
              className="boxDistantXX w_full"
              style={{ marginLeft: "600px" }}
            >
              <Image
                alt="portrait z"
                src={photoz}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="when text"
                src={whenZoomIn}
                layout="fixed"
                priority={true}
                quality={70}
                width={750}
                height={558}
              />
            </div>
          </div>

          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait a"
                src={photoa}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait b"
                src={photob}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait c"
                src={photoc}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait d"
                src={photod}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait e"
                src={photoe}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait f"
                src={photof}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait g"
                src={photog}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait g1"
                src={photog1}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait g2"
                src={photog2}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait h"
                src={photoh}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait i"
                src={photoi}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait j"
                src={photoj}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait k"
                src={photok}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait l"
                src={photol}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait m"
                src={photom}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait n"
                src={photon}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait o"
                src={photoo}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait p"
                src={photop}
                priority={true}
                quality={70}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait q"
                src={photoq}
                priority={true}
                quality={70}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .w_full {
          width: 750px;
        }
      `}</style>
    </>
  );
}
