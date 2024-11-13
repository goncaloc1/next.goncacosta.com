import NavigationMenu from "../../components/navigation-menu";
import Layout from "../../components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Sopra: NextPageWithLayout = () => {
  return (
    <>
      <div className="wrapper">
        <div className="cell align-top">
          <NavigationMenu />
        </div>
        <div className="cell">
          <div className="header">
            <div id="description"></div>
            <div className="title">
              <div className="title_left">Sopra</div>
              <div className="title_right">2010-11</div>
            </div>
          </div>
        </div>
        <div className="cell">
          <div className="boxNarrow">
            <img alt="photo" src="images/sopra/7.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantX">
            <img alt="photo" src="images/sopra/6.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxDistantX">
            <img alt="photo" src="images/sopra/26.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantX">
            <img alt="photo" src="images/sopra/2.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="box">
            <img alt="photo" src="images/sopra/4.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantX">
            <img alt="photo" src="images/sopra/15.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="box">
            <img alt="photo" src="images/sopra/10 (1).jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantX">
            <img alt="photo" src="images/sopra/prove0004.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxNarrow">
            <img alt="photo" src="images/sopra/8.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantX">
            <img alt="photo" src="images/sopra/10.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantX">
            <img alt="photo" src="images/sopra/14.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantX">
            <img alt="photo" src="images/sopra/11.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="box">
            <img alt="photo" src="images/sopra/16.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantXX">
            <img alt="photo" src="images/sopra/8 (1).jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantXX">
            <img alt="photo" src="images/sopra/5.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxNarrow">
            <img alt="photo" src="images/sopra/35.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxDistantX">
            <img alt="photo" src="images/sopra/34.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantX">
            <img alt="photo" src="images/sopra/prov0005.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxDistantX">
            <img alt="photo" src="images/sopra/20.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistant">
            <img alt="photo" src="images/sopra/prove0005.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxDistantX">
            <img alt="photo" src="images/sopra/30.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxNarrow">
            <img alt="photo" src="images/sopra/6 (1).jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxNarrow">
            <img alt="photo" src="images/sopra/6 (2).jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantXX">
            <img alt="photo" src="images/sopra/7 (1).jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxNarrow">
            <img alt="photo" src="images/sopra/31.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxDistantX">
            <img alt="photo" src="images/sopra/33.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="boxDistantXX">
            <img alt="photo" src="images/sopra/provenc0006.jpg" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .boxNarrow,
        .box,
        .boxbox,
        .boxDistant,
        .boxDistantX,
        .boxDistantXX {
          height: 500px;
          width: 507px;
        }

        .hboxNarrow,
        .hbox,
        .hboxbox,
        .hboxDistant,
        .hboxDistantX,
        .hboxDistantXX {
          height: 380px;
          width: 570px;
        }

        .header {
          width: 260px;
          height: 600px;
          margin: 0 100px 0 25px;
        }
      `}</style>
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
