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
import { Box as BaseBox, BoxProps } from "../../components/box/box";

const Box = (props: BoxProps) => <BaseBox {...props} />;

const Paperbag: NextPageWithLayout = () => {
  return (
    <>
      <Box className={styles.header}>
        <div id="description"></div>
        <div className="title">
          <div className="title_left">
            It's a paper bag to scream, It's a bag of affections
          </div>
          <div className="title_right">2008</div>
        </div>
      </Box>
      <Box
        photoSrc={photo1}
        photoId={styles.photo_1}
        photoPriority={true}
        className="boxNarrow"
      />
      <Box photoSrc={photo5} photoId={styles.photo_5} className="boxDistantX" />
      <Box photoSrc={photo7} photoId={styles.photo_7} className="boxDistantX" />
      <Box
        photoSrc={photof}
        photoId={styles.photo_f}
        className={`boxNarrow h-full flex`}
      />
      <Box
        photoSrc={photog}
        photoId={styles.photo_g}
        className={`boxDistantX h-full flex`}
      />
      <Box
        photoSrc={photoh}
        photoId={styles.photo_h}
        className="boxDistantXX"
      />
      <Box
        photoSrc={photo6}
        photoId={styles.photo_6}
        className="boxDistantXXX"
      />
      <Box photoSrc={photoe} photoId={styles.photo_e} className="boxNarrow" />
      <Box
        photoSrc={photoa}
        photoId={styles.photo_a}
        className="boxDistantXX"
      />
      <Box photoSrc={photoi} photoId={styles.photo_i} className="boxDistantX" />
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
      legacy
    >
      {page}
    </Layout>
  );
};

export default Paperbag;
