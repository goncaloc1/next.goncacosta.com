import photo01 from "/public/images/oulu/book/01.jpg";
import photo02 from "/public/images/oulu/book/02.jpg";
import photo03 from "/public/images/oulu/book/03.jpg";
import photo04 from "/public/images/oulu/book/04.jpg";
import photo05 from "/public/images/oulu/book/05.jpg";
import photo06 from "/public/images/oulu/book/06.jpg";
import photo07 from "/public/images/oulu/book/07.jpg";
import photo08 from "/public/images/oulu/book/08.jpg";
import photo09 from "/public/images/oulu/book/09.jpg";
import photo10 from "/public/images/oulu/book/10.jpg";
import photo11 from "/public/images/oulu/book/11.jpg";
import photo12 from "/public/images/oulu/book/12.jpg";
import photo13 from "/public/images/oulu/book/13.jpg";
import photo14 from "/public/images/oulu/book/14.jpg";
import photo15 from "/public/images/oulu/book/15.jpg";
import photo16 from "/public/images/oulu/book/16.jpg";
import photo17 from "/public/images/oulu/book/17.jpg";
import photo18 from "/public/images/oulu/book/18.jpg";
import photo19 from "/public/images/oulu/book/19.jpg";

import NavigationMenu from "../../../components/navigation-menu";
import { ReactElement } from "react";
import Layout from "../../../components/layout";
import { NextPageWithLayout } from "../../_app";
import { Box as BaseBox, BoxProps } from "../../../components/box/box";

const Box = (props: BoxProps) => (
  <BaseBox photoWidth="max-w-max" className="boxNarrow" {...props} />
);

const OuluBook: NextPageWithLayout = () => {
  return (
    <>
      <Box>
        <div className="header">
          <div id="description"></div>
          <div className="title">
            <div className="title_left"></div>
            <div className="title_right">2009</div>
          </div>
        </div>
      </Box>
      <Box photoSrc={photo01} photoPriority={true} />
      <Box photoSrc={photo02} photoPriority={true} />
      <Box photoSrc={photo03} />
      <Box photoSrc={photo04} />
      <Box photoSrc={photo05} />
      <Box photoSrc={photo06} />
      <Box photoSrc={photo07} />
      <Box photoSrc={photo08} />
      <Box photoSrc={photo09} />
      <Box photoSrc={photo10} />
      <Box photoSrc={photo11} />
      <Box photoSrc={photo12} />
      <Box photoSrc={photo13} />
      <Box photoSrc={photo14} />
      <Box photoSrc={photo15} />
      <Box photoSrc={photo16} />
      <Box photoSrc={photo17} />
      <Box photoSrc={photo18} />
      <Box photoSrc={photo19} />
    </>
  );
};

OuluBook.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title={"Oulu book"}
      metaDescription={"Oulu book - Gonçalo Costa, 2009"}
      horizontalScrollEnabled
      slotNavigationMenu={<NavigationMenu backHref={"/oulu"} />}
    >
      {page}
    </Layout>
  );
};

export default OuluBook;
