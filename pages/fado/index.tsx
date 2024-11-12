import { useWheel } from "../../hooks/useWheel";
import NavigationMenu from "../../components/navigation-menu";
import Layout from "../../components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Fado: NextPageWithLayout = () => {
  useWheel();

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
              <div className="title_left">Fado</div>
              <div className="title_right">2010</div>
            </div>
          </div>
        </div>
        <div className="cell">
          <div className="boxDistant">
            <img alt="photo" src="images/fado/proven0004.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxNarrow">
            <img alt="photo" src="images/fado/pro0018.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxNarrow">
            <img alt="photo" src="images/fado/prov0002.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxNarrow">
            <img alt="photo" src="images/fado/prov0012.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxDistantX">
            <img alt="photo" src="images/fado/21.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="vboxDistant">
            <img alt="photo" src="images/fado/9.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxNarrow">
            <img alt="photo" src="images/fado/7.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxNarrow">
            <img alt="photo" src="images/fado/35(2).jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxNarrow">
            <img alt="photo" src="images/fado/16.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxNarrow">
            <img alt="photo" src="images/fado/2.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxNarrow">
            <img alt="photo" src="images/fado/provence0019.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxNarrow">
            <img alt="photo" src="images/fado/33.jpg" />
          </div>
        </div>
        <div className="cell">
          <div className="hboxDistantXX">
            <img alt="photo" src="images/fado/10.jpg" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .boxDistant {
          width: 551px;
          height: 550px;
        }

        .hboxNarrow,
        .hbox,
        .hboxDistant,
        .hboxDistantX,
        .hboxDistantXX {
          width: 575px;
          height: 380px;
        }

        .vboxNarrow,
        .vbox,
        .vboxDistant,
        .vboxDistantX,
        .vboxDistantXX {
          width: 414px;
          height: 620px;
        }

        .header {
          width: 230px;
          height: 550px;
          margin: 0 130px 0 50px;
        }
      `}</style>
    </>
  );
};

Fado.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title={"Fado"}
      metaDescription={"Fado - Gonçalo Costa, 2010"}
      horizontalScrollEnabled
    >
      {page}
    </Layout>
  );
};

export default Fado;
