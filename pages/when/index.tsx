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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div id="content" className="horizontal_scroll">
        <div className="wrapper">
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
            {/* TODO center horizontally instead of using margin-left */}
            <div className="boxDistantXX w_full first_image">
              <Image
                alt="portrait z"
                src={photoz}
                priority={true}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="when text"
                src={whenZoomIn}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>

          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait a"
                src={photoa}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait b"
                src={photob}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait c"
                src={photoc}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait d"
                src={photod}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait e"
                src={photoe}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait f"
                src={photof}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait g"
                src={photog}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait g1"
                src={photog1}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait g2"
                src={photog2}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait h"
                src={photoh}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait i"
                src={photoi}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait j"
                src={photoj}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait k"
                src={photok}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait l"
                src={photol}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait m"
                src={photom}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait n"
                src={photon}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait o"
                src={photoo}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait p"
                src={photop}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Image
                alt="portrait q"
                src={photoq}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .first_image {
          margin-left: 20px;
        }

        .w_full {
          width: 300px;
        }

        @media (min-width: 640px) {
          .w_full {
            width: 370px;
          }
        }

        @media (min-width: 1024px) {
          .first_image {
            margin-left: 250px;
          }

          .w_full {
            width: 650px;
          }
        }

        @media (min-width: 1536px) {
          .first_image {
            margin-left: 580px;
          }

          .w_full {
            width: 750px;
          }
        }
      `}</style>
    </>
  );
}
