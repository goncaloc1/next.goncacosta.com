import styles from "../Oulu.module.css";

import NavigationMenu from "../../../components/navigation-menu";
import { ReactElement } from "react";
import Layout from "../../../components/layout";
import { NextPageWithLayout } from "../../_app";

const OuluBook: NextPageWithLayout = () => {
  return (
    <>
      <div className="cell">
        <div className={`header ${styles.book_header}`}>
          <div id="description"></div>
          <div className="title">
            <div className="title_left"></div>
            <div className="title_right">2009</div>
          </div>
        </div>
      </div>
      <div className="cell">
        <div className="boxNarrow">
          <img alt="photo" src="/images/oulu/book/01.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/02.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/03.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/04.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/05.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/06.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/07.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/08.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/09.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/10.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/11.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/12.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/13.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/14.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/15.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/16.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/17.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="hboxNarrow">
          <img alt="photo" src="/images/oulu/book/18.jpg" />
        </div>
      </div>
      <div className="cell">
        <div className="boxNarrow">
          <img alt="photo" src="/images/oulu/book/19.jpg" />
        </div>
      </div>
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
