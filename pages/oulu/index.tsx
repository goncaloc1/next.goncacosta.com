import photo4 from "/public/images/oulu/4.jpg";
import photo20 from "/public/images/oulu/20.jpg";
import photo30 from "/public/images/oulu/30.jpg";
import photo31 from "/public/images/oulu/31.jpg";
import photoq from "/public/images/oulu/q.jpg";
import photog from "/public/images/oulu/g.jpg";
import photo18 from "/public/images/oulu/18.jpg";
import photo99 from "/public/images/oulu/99.jpg";
import photoj from "/public/images/oulu/j.jpg";
import photo98 from "/public/images/oulu/98.jpg";
import photo28 from "/public/images/oulu/28.jpg";
import photof from "/public/images/oulu/f.jpg";
import photoi from "/public/images/oulu/i.jpg";
import photok from "/public/images/oulu/k.jpg";

import NavigationMenu from "../../components/navigation-menu";
import { ReactElement } from "react";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";
import { Box as BaseBox, BoxProps } from "../../components/box/box";

const Box = (props: BoxProps) => <BaseBox {...props} legacy />;

const Oulu: NextPageWithLayout = () => {
  return (
    <>
      <Box>
        <div id="description"></div>
        <div className="title">
          <div className="title_left">Oulu</div>
          <div className="title_right">2005-10</div>
        </div>
      </Box>
      <Box photoSrc={photo4} photoPriority={true} className="boxNarrow" />
      <Box photoSrc={photo20} photoPriority={true} className="boxNarrow" />
      <Box photoSrc={photo30} photoPriority={true} className="boxDistant" />
      <Box photoSrc={photo31} className="boxDistant" />
      <Box photoSrc={photoq} className="boxDistantXX" />
      <Box photoSrc={photog} className="boxDistantXX" />
      <Box photoSrc={photo18} className="boxDistant" />
      <Box photoSrc={photo99} className="boxDistantXX" />
      <Box photoSrc={photoj} className="boxDistant" />
      <Box photoSrc={photo98} className="boxNarrow" />
      <Box photoSrc={photo28} className="boxDistantX" />
      <Box photoSrc={photof} className="boxDistant" />
      <Box photoSrc={photoi} className="boxDistantXX" />
      <Box photoSrc={photok} className="boxDistantXX" />
    </>
  );
};

Oulu.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title={"Oulu"}
      metaDescription={"Oulu - Gonçalo Costa, 2005-10"}
      horizontalScrollEnabled
      slotNavigationMenu={<NavigationMenu bookHref={"/oulu/book"} />}
      legacy
    >
      {page}
    </Layout>
  );
};

export default Oulu;
