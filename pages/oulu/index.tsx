import Head from "next/head";
import Link from "next/link";

import { useWheel } from "../../hooks/useWheel";
import { useFullScreen } from "../../hooks/useFullScreen";

export default function Oulu() {
  useWheel();
  useFullScreen();

  return (
    <>
      <Head>
        <title>Oulu</title>
        <meta name="description" content="Oulu - Gonçalo Costa, 2005-10" />
      </Head>

      <div id="content" className="horizontal_scroll">
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
              <li>
                <Link href="/oulu/book">
                  <a id="read_book">
                    <span>book</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="cell">
            <div className="header">
              <div id="description"></div>
              <div className="title">
                <div className="title_left">Oulu</div>
                <div className="title_right">2005-10</div>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="images/oulu/4.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="images/oulu/20.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxDistant">
              <img alt="photo" src="images/oulu/30.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="vboxDistant">
              <img alt="photo" src="images/oulu/31.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxDistantXX">
              <img alt="photo" src="images/oulu/q.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxDistantXX">
              <img alt="photo" src="images/oulu/g.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxDistant">
              <img alt="photo" src="images/oulu/18.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxDistantXX">
              <img alt="photo" src="images/oulu/99.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="vboxDistant">
              <img alt="photo" src="images/oulu/j.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="images/oulu/98.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxDistantX">
              <img alt="photo" src="images/oulu/28.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxDistant">
              <img alt="photo" src="images/oulu/f.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="vboxDistantXX">
              <img alt="photo" src="images/oulu/i.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxDistantXX">
              <img alt="photo" src="images/oulu/k.jpg" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hboxNarrow,
        .hbox,
        .hboxDistant,
        .hboxDistantX,
        .hboxDistantXX {
          width: 632px;
          height: 410px;
        }

        .vboxNarrow,
        .vbox,
        .vboxDistant,
        .vboxDistantX,
        .vboxDistantXX {
          width: 414px;
          height: 619px;
        }

        .header {
          width: 200px;
          height: 600px;
          margin: 0 120px 0 50px;
        }
      `}</style>
    </>
  );
}
