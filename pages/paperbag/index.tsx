import Head from "next/head";

import styles from "./Paperbag.module.css";

import photo1 from "/public/images/paperbag/1.jpg";
import photo5 from "/public/images/paperbag/5.jpg";
import photo7 from "/public/images/paperbag/7.jpg";
import photof from "/public/images/paperbag/f.jpg";
import photog from "/public/images/paperbag/g.jpg";
import photoh from "/public/images/paperbag/h.jpg";
import photo6 from "/public/images/paperbag/6.jpg";
import photoe from "/public/images/paperbag/e.jpg";
import photoa from "/public/images/paperbag/a.jpg";
import photoi from "/public/images/paperbag/i.jpg";

import { useWheel } from "../../hooks/useWheel";
import Photo from "../../components/photo";
import NavigationMenu from "../../components/navigation-menu";

export default function Paperbag() {
  useWheel();

  return (
    <>
      <Head>
        <title>It's a paper bag to scream, It's a bag of affections</title>
        <meta
          name="description"
          content="It's a paper bag to scream, It's a bag of affections - Gonçalo Costa, 2008"
        />
      </Head>
      <main className="horizontal_scroll">
        <div className="wrapper" style={{ width: "max-content" }}>
          <div className="cell align-top">
            <NavigationMenu />
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
              <Photo id={styles.photo_1} src={photo1} priority={true} />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxDistantX}>
              <Photo id={styles.photo_5} src={photo5} />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxDistantX}>
              <Photo id={styles.photo_7} src={photo7} />
            </div>
          </div>
          <div className={styles.cell_bottom}>
            <div className={styles.boxNarrow}>
              <Photo id={styles.photo_f} src={photof} />
            </div>
          </div>
          <div className={styles.cell_bottom}>
            <div className={styles.boxDistantX}>
              <Photo id={styles.photo_g} src={photog} />
            </div>
          </div>
          <div className="cell">
            <div id={styles.photo_h_box} className={styles.boxDistantXX}>
              <Photo id={styles.photo_h} src={photoh} />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxDistantXXX}>
              <Photo id={styles.photo_6} src={photo6} />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxNarrow}>
              <Photo id={styles.photo_e} src={photoe} />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxDistantXX}>
              <Photo id={styles.photo_a} src={photoa} />
            </div>
          </div>
          <div className="cell">
            <div className={styles.boxDistantX}>
              <Photo id={styles.photo_i} src={photoi} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
