import photo1 from "/public/images/fado/proven0004.jpg";
import photo2 from "/public/images/fado/pro0018.jpg";
import photo3 from "/public/images/fado/prov0002.jpg";
import photo4 from "/public/images/fado/prov0012.jpg";
import photo5 from "/public/images/fado/21.jpg";
import photo6 from "/public/images/fado/9.jpg";
import photo7 from "/public/images/fado/7.jpg";
import photo8 from "/public/images/fado/35(2).jpg";
import photo9 from "/public/images/fado/16.jpg";
import photo10 from "/public/images/fado/2.jpg";
import photo11 from "/public/images/fado/provence0019.jpg";
import photo12 from "/public/images/fado/33.jpg";
import photo13 from "/public/images/fado/10.jpg";

import Layout from "../../components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

import { Box as BaseBox, BoxProps } from "../../components/box/box";

const Box = (props: BoxProps) => <BaseBox {...props} />;

const Fado: NextPageWithLayout = () => {
  return (
    <>
      <Box>
        <div id="description"></div>
        <div className="title">
          <div className="title_left">Fado</div>
          <div className="title_right">2010</div>
        </div>
      </Box>
      <Box photoSrc={photo1} photoPriority={true} className="boxDistant" />
      <Box photoSrc={photo2} photoPriority={true} className="boxNarrow" />
      <Box photoSrc={photo3} className="boxNarrow" />
      <Box photoSrc={photo4} className="boxNarrow" />
      <Box photoSrc={photo5} className="boxDistantX" />
      <Box photoSrc={photo6} className="boxDistant" />
      <Box photoSrc={photo7} className="boxNarrow" />
      <Box photoSrc={photo8} className="boxNarrow" />
      <Box photoSrc={photo9} className="boxNarrow" />
      <Box photoSrc={photo10} className="boxNarrow" />
      <Box photoSrc={photo11} className="boxNarrow" />
      <Box photoSrc={photo12} className="boxNarrow" />
      <Box photoSrc={photo13} className="boxDistantXX" />
    </>
  );
};

Fado.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title={"Fado"}
      metaDescription={"Fado - Gonçalo Costa, 2010"}
      horizontalScrollEnabled
      legacy
    >
      {page}
    </Layout>
  );
};

export default Fado;
