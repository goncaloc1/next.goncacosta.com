/* eslint-disable react/jsx-key*/

import styles from "./Reminiscencia.module.css";

import photou from "/public/images/reminiscencia/u.jpg";
import photoa from "/public/images/reminiscencia/a.jpg";
import photob from "/public/images/reminiscencia/b.jpg";
import photoc from "/public/images/reminiscencia/c.jpg";
import photod from "/public/images/reminiscencia/d.jpg";
import photoe from "/public/images/reminiscencia/e.jpg";
import photof from "/public/images/reminiscencia/f.jpg";
import photog from "/public/images/reminiscencia/g.jpg";
import photot from "/public/images/reminiscencia/t.jpg";
import photoh from "/public/images/reminiscencia/h.jpg";
import photoi from "/public/images/reminiscencia/i.jpg";
import photoj from "/public/images/reminiscencia/j.jpg";
import photok from "/public/images/reminiscencia/k.jpg";
import photol from "/public/images/reminiscencia/l.jpg";
import photom from "/public/images/reminiscencia/m.jpg";
import photon from "/public/images/reminiscencia/n.jpg";
import photoo from "/public/images/reminiscencia/o.jpg";
import photop from "/public/images/reminiscencia/p.jpg";
import photoq from "/public/images/reminiscencia/q.jpg";
import photos from "/public/images/reminiscencia/s.jpg";
import photor from "/public/images/reminiscencia/r.jpg";

import NavigationMenu from "../../components/navigation-menu";
import Carousel from "../../components/carousel/carousel";
import CarouselSlide, {
  CarouselSlideProps,
} from "../../components/carousel/carousel-slide";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layout";

const defaultSlideClassName = styles.slide;

const Slide = (props: CarouselSlideProps) => (
  <CarouselSlide {...{ className: defaultSlideClassName, ...props }} />
);

const slides = [
  <Slide photoSrc={photou} photoPriority={true} />,
  <Slide>
    <div className={`${styles.text_wrapper} ${styles.main_title}`}>
      <p>Reminiscencia</p>
    </div>
  </Slide>,
  <Slide photoSrc={photoa} />,
  <Slide photoSrc={photob} />,
  <Slide>
    <div className={styles.text_wrapper}>
      <p>
        For a long time, life deals with the still-tender memory of childhood
      </p>
      <p>like a mother who lays her newborn on her breast without waking it.</p>
      <p className={styles.author}>Walter Benjamin</p>
    </div>
  </Slide>,
  <Slide photoSrc={photoc} />,
  <Slide photoSrc={photod} />,
  <Slide photoSrc={photoe} />,
  <Slide photoSrc={photof} />,
  <Slide photoSrc={photog} />,
  <Slide photoSrc={photot} className={styles.slideL} />,
  <Slide photoSrc={photoh} />,
  <Slide photoSrc={photoi} />,
  <Slide photoSrc={photoj} />,
  <Slide>
    <div className={styles.text_wrapper}>
      <p>I remember my father said to me something about memory, a</p>
      <p>
        very saddening thing. He said, “I thought I could recall my childhood
      </p>
      <p>when we first came to Buenos Aires, but now I know that I can’t.” I</p>
      <p>
        said, “Why?” He said, “Because I think that memory” - I don’t know if
      </p>
      <p>
        this was his own theory, I was so impressed by it that I didn’t ask him
      </p>
      <p>
        whether he found it or whether he evolved it - but he said, “I think
        that
      </p>
      <p>
        if I recall something, so example, if today I look back on this morning,
      </p>
      <p>then I get an Photo of what I saw this morning. But if tonight, I’m</p>
      <p>
        thinking back on this morning, then I’m really recalling not the first
      </p>
      <p>Photo, but the first Photo in memory. So that every time I recall</p>
      <p>
        something, I’m not recalling it really, I’m recalling the last time I
      </p>
      <p>
        recalled it. So that really,” he said, “I have no memories whatever, I
      </p>
      <p>have no Photos whatever, about my childhood, about my youth. And</p>
      <p>
        then he illustrated that, with a pile of coins. He piled one coin on top
        of
      </p>
      <p>
        the other and said, “Well, now this first coin, the bottom coin, this
      </p>
      <p>
        would be the first Photo, for example, of the house of my childhood.
      </p>
      <p>
        Now this second would be a memory I had of that house when I went to
      </p>
      <p>
        Buenos Aires. Then the third one another memory and so on. And as in
      </p>
      <p>every memory there’s a slight distortion, I don’t suppose that my</p>
      <p>
        memory of today ties in with the first Photos I had,” so that, he said,
        “I
      </p>
      <p>
        try not to think of things in the past because if I do I’ll be thinking
        back
      </p>
      <p>on those memories and not on the actual Photos themselves.”</p>
      <p className={styles.author}>Jorge Luis Borges</p>
    </div>
  </Slide>,
  <Slide photoSrc={photok} />,
  <Slide photoSrc={photol} />,
  <Slide photoSrc={photom} className={styles.slideS} />,
  <Slide photoSrc={photon} />,
  <Slide>
    <div className={styles.text_wrapper}>
      <p>
        Because we don’t know when we will die, we get to think of life as an
      </p>
      <p>
        inexhaustible well. Yet everything happens only a certain number of
        times, and a
      </p>
      <p>
        very small number really. How many more times will you remember a
        certain
      </p>
      <p>
        afternoon of your childhood, an afternoon that is so deeply a part of
        your being
      </p>
      <p>
        that you can’t even conceive of your life without it? Perhaps four, five
        times
      </p>
      <p>
        more, perhaps not even that. How many more times will you watch the full
        moon
      </p>
      <p>rise? Perhaps 20. And yet it all seems limitless.</p>
      <p className={styles.author}>Paul Bowles</p>
    </div>
  </Slide>,
  <Slide photoSrc={photoo} className={styles.slideL} />,
  <Slide photoSrc={photop} />,
  <Slide photoSrc={photoq} />,
  <Slide photoSrc={photos} className={styles.slideL} />,
  <Slide photoSrc={photor} />,
  <Slide>
    <div className={`${styles.text_wrapper} ${styles.last}`}>
      <p className={styles.title}>Reminiscencia</p>
      <p className={styles.author}>Gonçalo Costa</p>
      <p className={styles.date}>2011-2012</p>
      <p className={styles.bibliography}>
        Benjamin, Walter (2006).
        <i>Berlin Childhood around 1900.</i> The Belknap Press.
      </p>
      <p className={styles.bibliography}>
        Burgin, Richard (ed.)(1968).
        <i>Conversations with Jorge Luis Borges.</i> Souvenir Press.
      </p>
      <p className={styles.bibliography}>
        Bowles, Paul (2004). <i>The Sheltering Sky.</i> Penguin classics.
      </p>
    </div>
  </Slide>,
];

const Reminiscencia: NextPageWithLayout = () => {
  return (
    <div className="wrapper">
      <div className="cell align-top">
        <NavigationMenu
          bookUrl={
            "https://issuu.com/goncacosta/docs/reminiscencia?mode=window&viewMode=doublePage"
          }
        />
      </div>

      <div className="cell w-full">
        <Carousel
          slides={slides}
          defaultSlideClassName={defaultSlideClassName}
          transitionEnabled={true}
        />
      </div>
    </div>
  );
};

Reminiscencia.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title={"Reminiscencia"}
      metaDescription={"Reminiscencia - Gonçalo Costa, 2011-12"}
    >
      {page}
    </Layout>
  );
};

export default Reminiscencia;
