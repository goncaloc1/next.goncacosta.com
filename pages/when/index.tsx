import Head from "next/head";

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
import Photo from "../../components/photo";
import NavigationMenu from "../../components/navigation-menu";

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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <main className="horizontal_scroll">
        <div className="wrapper">
          <div className="cell align-top">
            <NavigationMenu
              bookUrl={
                "https://issuu.com/goncacosta/docs/when?mode=window&viewMode=doublePage"
              }
            />
          </div>

          <div className="cell">
            {/* TODO center horizontally instead of using margin-left */}
            <div className="boxDistantXX w_full first_image">
              <Photo src={photoz} priority={true} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={whenZoomIn} />
            </div>
          </div>

          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photoa} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photob} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photoc} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photod} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photoe} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photof} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photog} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photog1} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photog2} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photoh} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photoi} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photoj} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photok} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photol} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photom} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photon} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photoo} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photop} />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX w_full">
              <Photo src={photoq} />
            </div>
          </div>
        </div>
      </main>

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
