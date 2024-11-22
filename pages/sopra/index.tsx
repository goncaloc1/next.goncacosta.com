import styles from "./Sopra.module.css";

import photo2 from "/public/images/sopra/7.jpg";
import photo3 from "/public/images/sopra/6.jpg";
import photo4 from "/public/images/sopra/26.jpg";
import photo5 from "/public/images/sopra/2.jpg";
import photo6 from "/public/images/sopra/4.jpg";
import photo7 from "/public/images/sopra/15.jpg";
import photo8 from "/public/images/sopra/10 (1).jpg";
import photo9 from "/public/images/sopra/prove0004.jpg";
import photo10 from "/public/images/sopra/8.jpg";
import photo11 from "/public/images/sopra/10.jpg";
import photo12 from "/public/images/sopra/14.jpg";
import photo13 from "/public/images/sopra/11.jpg";
import photo14 from "/public/images/sopra/16.jpg";
import photo15 from "/public/images/sopra/8 (1).jpg";
import photo16 from "/public/images/sopra/5.jpg";
import photo17 from "/public/images/sopra/35.jpg";
import photo18 from "/public/images/sopra/34.jpg";
import photo19 from "/public/images/sopra/prov0005.jpg";
import photo20 from "/public/images/sopra/20.jpg";
import photo21 from "/public/images/sopra/prove0005.jpg";
import photo22 from "/public/images/sopra/30.jpg";
import photo23 from "/public/images/sopra/6 (1).jpg";
import photo24 from "/public/images/sopra/6 (2).jpg";
import photo25 from "/public/images/sopra/7 (1).jpg";
import photo26 from "/public/images/sopra/31.jpg";
import photo27 from "/public/images/sopra/33.jpg";
import photo28 from "/public/images/sopra/provenc0006.jpg";

import Layout from "../../components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

import { Box as BaseBox, BoxProps } from "../../components/box/box";

const Box = (props: BoxProps) => <BaseBox photoWidth="max-w-max" {...props} />;

const Sopra: NextPageWithLayout = () => {
  return (
    <>
      <Box>
        <div id="description"></div>
        <div className="title">
          <div className="title_left">Sopra</div>
          <div className="title_right">2010-11</div>
        </div>
      </Box>
      <Box photoSrc={photo2} photoPriority={true} className="boxNarrow" />
      <Box photoSrc={photo3} photoPriority={true} className="boxDistantX" />
      <Box photoSrc={photo4} className="boxDistantX" />
      <Box photoSrc={photo5} className="boxDistantX" />
      <Box photoSrc={photo6} className="box" />
      <Box photoSrc={photo7} className="boxDistantX" />
      <Box photoSrc={photo8} className="box" />
      <Box photoSrc={photo9} className="boxDistantX" />
      <Box photoSrc={photo10} className="boxNarrow" />
      <Box photoSrc={photo11} className="boxDistantX" />
      <Box photoSrc={photo12} className="boxDistantX" />
      <Box photoSrc={photo13} className="boxDistantX" />
      <Box photoSrc={photo14} className="box" />
      <Box photoSrc={photo15} className="boxDistantXX" />
      <Box photoSrc={photo16} className="boxDistantXX" />
      <Box photoSrc={photo17} className="boxNarrow" />
      <Box photoSrc={photo18} className="boxDistantX" />
      <Box photoSrc={photo19} className="boxDistantX" />
      <Box photoSrc={photo20} className="boxDistantX" />
      <Box photoSrc={photo21} className="boxDistant" />
      <Box photoSrc={photo22} className="boxDistantX" />
      <Box photoSrc={photo23} className="boxNarrow" />
      <Box photoSrc={photo24} className="boxNarrow" />
      <Box photoSrc={photo25} className="boxDistantXX" />
      <Box photoSrc={photo26} className="boxNarrow" />
      <Box photoSrc={photo27} className="boxDistantX" />
      <Box photoSrc={photo28} className="boxDistantXX" />
    </>
  );
};

Sopra.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title={"Sopra"}
      metaDescription={"Sopra - Gonçalo Costa, 2010-11"}
      horizontalScrollEnabled
    >
      {page}
    </Layout>
  );
};

export default Sopra;
