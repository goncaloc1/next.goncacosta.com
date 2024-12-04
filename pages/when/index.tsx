import styles from "./When.module.css";

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

import NavigationMenu from "../../components/navigation-menu";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import Layout from "../../components/layout";
import { BoxV2 as BaseBox, BoxProps } from "../../components/box/box-v2";

const Box = (props: BoxProps) => (
  <BaseBox className="boxDistantXX" {...props} />
);

const When: NextPageWithLayout = () => {
  return (
    <>
      <Box
        photoSrc={photoz}
        photoPriority={true}
        className={`boxDistantXX ${styles.first_image}`}
      />
      <Box photoSrc={whenZoomIn} />
      <Box photoSrc={photoa} />
      <Box photoSrc={photob} />
      <Box photoSrc={photoc} />
      <Box photoSrc={photod} />
      <Box photoSrc={photoe} />
      <Box photoSrc={photof} />
      <Box photoSrc={photog} />
      <Box photoSrc={photog1} />
      <Box photoSrc={photog2} />
      <Box photoSrc={photoh} />
      <Box photoSrc={photoi} />
      <Box photoSrc={photoj} />
      <Box photoSrc={photok} />
      <Box photoSrc={photol} />
      <Box photoSrc={photom} />
      <Box photoSrc={photon} />
      <Box photoSrc={photoo} />
      <Box photoSrc={photop} />
      <Box photoSrc={photoq} />
    </>
  );
};

When.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title={"When was the last time someone wrote you a love letter?"}
      metaDescription={
        "When was the last time someone wrote you a love letter? - Gonçalo Costa, 2009-10"
      }
      horizontalScrollEnabled
      slotNavigationMenu={
        <NavigationMenu
          bookUrl={
            "https://issuu.com/goncacosta/docs/when?mode=window&viewMode=doublePage"
          }
        />
      }
    >
      {page}
    </Layout>
  );
};

export default When;
