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

import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layout";
import { ReactElement } from "react";
import { Box } from "../../components/box/box";

const Paperbag: NextPageWithLayout = () => {
  return (
    <>
      <Box>
        <div className={`header ${styles.header}`}>
          <div id="description"></div>
          <div className="title">
            <div className="title_left">
              It's a paper bag to scream, It's a bag of affections
            </div>
            <div className="title_right">2008</div>
          </div>
        </div>
      </Box>
      <Box
        photoSrc={photo1}
        photoId={styles.photo_1}
        photoPriority={true}
        className={styles.boxNarrow}
      />
      <Box
        photoSrc={photo5}
        photoId={styles.photo_5}
        className={styles.boxDistantX}
      />
      <Box
        photoSrc={photo7}
        photoId={styles.photo_7}
        className={styles.boxDistantX}
      />
      <Box
        photoSrc={photof}
        photoId={styles.photo_f}
        className={`${styles.boxNarrow} h-full flex`}
      />
      <Box
        photoSrc={photog}
        photoId={styles.photo_g}
        className={`${styles.boxDistantX} h-full flex`}
      />
      <Box
        photoSrc={photoh}
        photoId={styles.photo_h}
        className={styles.boxDistantXX}
      />
      <Box
        photoSrc={photo6}
        photoId={styles.photo_6}
        className={styles.boxDistantXXX}
      />
      <Box
        photoSrc={photoe}
        photoId={styles.photo_e}
        className={styles.boxNarrow}
      />
      <Box
        photoSrc={photoa}
        photoId={styles.photo_a}
        className={styles.boxDistantXX}
      />
      <Box
        photoSrc={photoi}
        photoId={styles.photo_i}
        className={styles.boxDistantX}
      />
    </>
  );
};

Paperbag.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title={"It's a paper bag to scream, It's a bag of affections"}
      metaDescription={
        "It's a paper bag to scream, It's a bag of affections - Gonçalo Costa, 2008"
      }
      horizontalScrollEnabled
    >
      {page}
    </Layout>
  );
};

export default Paperbag;
