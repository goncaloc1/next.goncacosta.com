import Head from "next/head";

import { useWheel } from "../../hooks/useWheel";
import { useFullScreen } from "../../hooks/useFullScreen";
import NavigationMenu from "../../components/navigation-menu";

export default function Oulu() {
  useWheel();
  useFullScreen();

  return (
    <>
      <Head>
        <title>Oulu</title>
        <meta name="description" content="Oulu - Gonçalo Costa, 2005-10" />
      </Head>

      <main className="horizontal_scroll">
        <div className="wrapper">
          <div className="cell">
            <NavigationMenu bookHref={"/oulu/book"} />
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
      </main>

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
          width: 230px;
          height: 600px;
          margin: 0 120px 0 50px;
        }
      `}</style>
    </>
  );
}
