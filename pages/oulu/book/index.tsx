import Head from "next/head";

import { useWheel } from "../../../hooks/useWheel";
import { useFullScreen } from "../../../hooks/useFullScreen";
import NavigationMenu from "../../../components/navigation-menu";

export default function Oulu() {
  useWheel();
  useFullScreen();

  return (
    <>
      <Head>
        <title>Oulu book</title>
        <meta name="description" content="Oulu book - Gonçalo Costa, 2009" />
      </Head>

      <main className="horizontal_scroll">
        <div className="wrapper">
          <div className="cell align-top">
            <NavigationMenu backHref={"/oulu"} />
          </div>
          <div className="cell">
            <div className="header">
              <div id="description"></div>
              <div className="title">
                <div className="title_left"></div>
                <div className="title_right">2009</div>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="boxNarrow">
              <img alt="photo" src="/images/oulu/book/01.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/02.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/03.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/04.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/05.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/06.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/07.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/08.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/09.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/10.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/11.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/12.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/13.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/14.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/15.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/16.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/17.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="hboxNarrow">
              <img alt="photo" src="/images/oulu/book/18.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="boxNarrow">
              <img alt="photo" src="/images/oulu/book/19.jpg" />
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .boxNarrow {
          width: 527px;
          height: 520px;
        }

        .hboxNarrow,
        .hbox,
        .hboxDistant,
        .hboxDistantX,
        .hboxDistantXX {
          width: 800px;
          height: 520px;
        }

        .header {
          width: 75px;
          height: 520px;
          margin: 0 150px 0 150px;
        }
      `}</style>
    </>
  );
}
