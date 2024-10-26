/* eslint-disable react/jsx-key*/

import Head from "next/head";
import Link from "next/link";
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

import { useState } from "react";
import { useFullScreen } from "../../hooks/useFullScreen";
import Photo from "../../components/photo";

const slides: any = [
  <div className={styles.slide}>
    <Photo src={photou} priority={true} />
  </div>,
  <div className={styles.slide}>
    <div className={styles.main_title}>
      <p>Reminiscencia</p>
    </div>
  </div>,
  <div className={styles.slide}>
    <Photo src={photoa} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photob} />
  </div>,
  <div className={styles.slide}>
    <div>
      <p>
        For a long time, life deals with the still-tender memory of childhood
      </p>
      <p>like a mother who lays her newborn on her breast without waking it.</p>
      <p className={styles.author}>Walter Benjamin</p>
    </div>
  </div>,
  <div className={styles.slide}>
    <Photo src={photoc} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photod} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photoe} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photof} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photog} />
  </div>,
  <div className={styles.slideL}>
    <Photo src={photot} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photoh} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photoi} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photoj} />
  </div>,
  <div className={styles.slide}>
    <div>
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
  </div>,
  <div className={styles.slide}>
    <Photo src={photok} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photol} />
  </div>,
  <div className={styles.slideS}>
    <Photo src={photom} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photon} />
  </div>,
  <div className={styles.slide}>
    <div>
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
  </div>,
  <div className={styles.slideL}>
    <Photo src={photoo} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photop} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photoq} />
  </div>,
  <div className={styles.slideL}>
    <Photo src={photos} />
  </div>,
  <div className={styles.slide}>
    <Photo src={photor} />
  </div>,
  <div className={styles.slide}>
    <div className={styles.last}>
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
  </div>,
];

type Placeholder = "placeholderX" | "placeholderY" | "placeholderZ";

export default function Reminiscencia() {
  useFullScreen();

  //TODO validate slides length
  //TODO create component

  /**
   * We have three placeholders to deal with the active image and
   * cache / buffer images. The idea is that previous/next operations
   * will rotate the active image in placeholders and therefore
   * eliminating loading times.
   */
  const [placeholderXIndex, setPlaceholderXIndex] = useState(0);
  const [placeholderYIndex, setPlaceholderYIndex] = useState(1);
  const [placeholderZIndex, setPlaceholderZIndex] = useState(2);

  const [placeholderXStyle, setPlaceholderXStyle] = useState(
    styles.transition_show
  );
  const [placeholderYStyle, setPlaceholderYStyle] = useState(
    styles.transition_hide
  );
  const [placeholderZStyle, setPlaceholderZStyle] = useState(
    styles.transition_hide
  );

  const [activeViewPlaceholder, setActiveViewPlaceholder] =
    useState<Placeholder>("placeholderX");

  const getActiveIndex = (): number => {
    switch (activeViewPlaceholder) {
      case "placeholderX":
        return placeholderXIndex;
      case "placeholderY":
        return placeholderYIndex;
      case "placeholderZ":
        return placeholderZIndex;

      default:
        throw Error(`Unkown placeholder '${activeViewPlaceholder}'`);
    }
  };

  const isLastIndexActive = (): boolean => {
    const activeIndex = getActiveIndex();
    return activeIndex === slides.length - 1;
  };

  const isFirstIndexActive = (): boolean => {
    const activeIndex = getActiveIndex();
    return activeIndex === 0;
  };

  /**
   * Check if next image can be cached. If index is
   * out of range returns without doing anything.
   */
  const prepareNextViewPlaceholderCache = () => {
    const activeIndex = getActiveIndex();
    const nextCacheIndex = activeIndex + 2;
    const isNextCacheOutOfRange = nextCacheIndex > slides.length - 1;

    if (isNextCacheOutOfRange) {
      return;
    }

    switch (activeViewPlaceholder) {
      case "placeholderX":
        setPlaceholderZIndex(nextCacheIndex);
        break;
      case "placeholderY":
        setPlaceholderXIndex(nextCacheIndex);
        break;
      case "placeholderZ":
        setPlaceholderYIndex(nextCacheIndex);
        break;
      default:
        throw Error(`Unkown placeholder '${activeViewPlaceholder}'`);
    }
  };

  /**
   * Check if previous image can be cached. If index is
   * out of range returns without doing anything.
   */
  const preparePreviousViewPlaceholderCache = () => {
    const activeIndex = getActiveIndex();
    const previousCacheIndex = activeIndex - 2;
    const isPreviousCacheOutOfRange = previousCacheIndex < 0;

    if (isPreviousCacheOutOfRange) {
      return;
    }

    switch (activeViewPlaceholder) {
      case "placeholderX":
        setPlaceholderYIndex(previousCacheIndex);
        break;
      case "placeholderY":
        setPlaceholderZIndex(previousCacheIndex);
        break;
      case "placeholderZ":
        setPlaceholderXIndex(previousCacheIndex);
        break;
      default:
        throw Error(`Unkown placeholder '${activeViewPlaceholder}'`);
    }
  };

  const nextSlide = () => {
    if (isLastIndexActive()) return;

    prepareNextViewPlaceholderCache();

    switch (activeViewPlaceholder) {
      case "placeholderX": {
        setPlaceholderXStyle(styles.transition_hide);
        setPlaceholderYStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderY");
        break;
      }
      case "placeholderY": {
        setPlaceholderYStyle(styles.transition_hide);
        setPlaceholderZStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderZ");
        break;
      }
      case "placeholderZ": {
        setPlaceholderZStyle(styles.transition_hide);
        setPlaceholderXStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderX");
        break;
      }
      default:
        throw Error(`Unkown placeholder '${activeViewPlaceholder}'`);
    }
  };

  const previousSlide = () => {
    if (isFirstIndexActive()) return;

    preparePreviousViewPlaceholderCache();

    switch (activeViewPlaceholder) {
      case "placeholderX": {
        setPlaceholderXStyle(styles.transition_hide);
        setPlaceholderZStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderZ");
        break;
      }
      case "placeholderY": {
        setPlaceholderYStyle(styles.transition_hide);
        setPlaceholderXStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderX");
        break;
      }
      case "placeholderZ": {
        setPlaceholderZStyle(styles.transition_hide);
        setPlaceholderYStyle(styles.transition_show);

        setActiveViewPlaceholder("placeholderY");
        break;
      }
      default:
        throw Error(`Unkown placeholder '${activeViewPlaceholder}'`);
    }
  };

  return (
    <>
      <Head>
        <title>Reminiscencia</title>
        <meta
          name="description"
          content="Reminiscencia - Gonçalo Costa, 2011-12"
        />
      </Head>

      <div id="content">
        <div className={`wrapper ${styles.wrapper}`}>
          <div className="cell">
            <ul id="navigation_menu">
              <li>
                <Link legacyBehavior href="/">
                  <a id="back">
                    <span>back</span>
                  </a>
                </Link>
              </li>
              <li>
                <a id="fullscreen">
                  <span>fullscreen</span>
                </a>
              </li>
              <li>
                <a id="exit_fullscreen">
                  <span>exit fullscreen</span>
                </a>
              </li>
              <li>
                <a
                  id="read_book"
                  href="https://issuu.com/goncacosta/docs/reminiscencia?mode=window&viewMode=doublePage"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>book</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="cell">
            <div className={styles.slideshow_wrapper}>
              <div className={styles.my_cycle_slideshow}>
                <div className={placeholderXStyle}>
                  {slides[placeholderXIndex]}
                </div>
                <div className={placeholderYStyle}>
                  {slides[placeholderYIndex]}
                </div>
                <div className={placeholderZStyle}>
                  {slides[placeholderZIndex]}
                </div>
              </div>
              <div className="slideshow_buttons">
                <a className="mCSB_buttonRight" onClick={nextSlide}></a>
                <a className="mCSB_buttonLeft" onClick={previousSlide}></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slideshow_buttons {
          margin: 0 3% 0 0;
          margin-top: 5px;
          padding: 0 10px 0 0;
        }

        .mCSB_buttonRight,
        .mCSB_buttonLeft {
          display: block;
          position: relative;
          width: 20px;
          height: 17px;
          overflow: hidden;
          margin: 0 auto;
          cursor: pointer;
          float: right;
        }
      `}</style>
    </>
  );
}
