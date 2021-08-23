import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./Reminiscencia.module.css";

import Script from "next/script";

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

export default function Reminiscencia() {
  return (
    <>
      <Head>
        <title>Reminiscencia TODO</title>
        <meta name="description" content="Reminiscencia TODO" />
      </Head>

      <div id="content">
        <div className={`wrapper ${styles.wrapper}`}>
          <div className="cell">
            <ul id="navigation_menu">
              <li>
                <Link href="/">
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
              <div
                className="my-cycle-slideshow"
                data-cycle-speed="1000"
                data-cycle-timeout="0"
                data-cycle-prev="#prev"
                data-cycle-next="#next"
                data-cycle-slides="> div"
                data-cycle-center-vert="true"
                data-cycle-auto-height="false"
              >
                <div className="first">
                  <Image
                    src={photou}
                    alt="photo u"
                    layout="fixed"
                    width={602}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <div className="main_title">
                    <p>Reminiscencia</p>
                  </div>
                </div>
                <div>
                  <Image
                    src={photoa}
                    alt="photo a"
                    layout="fixed"
                    width={602}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photob}
                    alt="photo b"
                    layout="fixed"
                    width={597}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <p>
                    For a long time, life deals with the still-tender memory of
                    childhood
                  </p>
                  <p>
                    like a mother who lays her newborn on her breast without
                    waking it.
                  </p>
                  <p className="author">Walter Benjamin</p>
                </div>
                <div>
                  <Image
                    src={photoc}
                    alt="photo c"
                    layout="fixed"
                    width={601}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photod}
                    alt="photo d"
                    layout="fixed"
                    width={602}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photoe}
                    alt="photo e"
                    layout="fixed"
                    width={597}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photof}
                    alt="photo f"
                    layout="fixed"
                    width={596}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photog}
                    alt="photo g"
                    layout="fixed"
                    width={596}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photot}
                    alt="photo t"
                    layout="fixed"
                    width={752}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photoh}
                    alt="photo h"
                    layout="fixed"
                    width={601}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photoi}
                    alt="photo i"
                    layout="fixed"
                    width={596}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photoj}
                    alt="photo j"
                    layout="fixed"
                    width={597}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <p>
                    I remember my father said to me something about memory, a
                  </p>
                  <p>
                    very saddening thing. He said, “I thought I could recall my
                    childhood
                  </p>
                  <p>
                    when we first came to Buenos Aires, but now I know that I
                    can’t.” I
                  </p>
                  <p>
                    said, “Why?” He said, “Because I think that memory” - I
                    don’t know if
                  </p>
                  <p>
                    this was his own theory, I was so impressed by it that I
                    didn’t ask him
                  </p>
                  <p>
                    whether he found it or whether he evolved it - but he said,
                    “I think that
                  </p>
                  <p>
                    if I recall something, so example, if today I look back on
                    this morning,
                  </p>
                  <p>
                    then I get an image of what I saw this morning. But if
                    tonight, I’m
                  </p>
                  <p>
                    thinking back on this morning, then I’m really recalling not
                    the first
                  </p>
                  <p>
                    image, but the first image in memory. So that every time I
                    recall
                  </p>
                  <p>
                    something, I’m not recalling it really, I’m recalling the
                    last time I
                  </p>
                  <p>
                    recalled it. So that really,” he said, “I have no memories
                    whatever, I
                  </p>
                  <p>
                    have no images whatever, about my childhood, about my youth.
                    And
                  </p>
                  <p>
                    then he illustrated that, with a pile of coins. He piled one
                    coin on top of
                  </p>
                  <p>
                    the other and said, “Well, now this first coin, the bottom
                    coin, this
                  </p>
                  <p>
                    would be the first image, for example, of the house of my
                    childhood.
                  </p>
                  <p>
                    Now this second would be a memory I had of that house when I
                    went to
                  </p>
                  <p>
                    Buenos Aires. Then the third one another memory and so on.
                    And as in
                  </p>
                  <p>
                    every memory there’s a slight distortion, I don’t suppose
                    that my
                  </p>
                  <p>
                    memory of today ties in with the first images I had,” so
                    that, he said, “I
                  </p>
                  <p>
                    try not to think of things in the past because if I do I’ll
                    be thinking back
                  </p>
                  <p>
                    on those memories and not on the actual images themselves.”
                  </p>
                  <p className={styles.author}>Jorge Luis Borges</p>
                </div>
                <div>
                  <Image
                    src={photok}
                    alt="photo k"
                    layout="fixed"
                    width={600}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photol}
                    alt="photo l"
                    layout="fixed"
                    width={598}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photom}
                    alt="photo m"
                    layout="fixed"
                    width={483}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photon}
                    alt="photo n"
                    layout="fixed"
                    width={596}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <p>
                    Because we don’t know when we will die, we get to think of
                    life as an
                  </p>
                  <p>
                    inexhaustible well. Yet everything happens only a certain
                    number of times, and a
                  </p>
                  <p>
                    very small number really. How many more times will you
                    remember a certain
                  </p>
                  <p>
                    afternoon of your childhood, an afternoon that is so deeply
                    a part of your being
                  </p>
                  <p>
                    that you can’t even conceive of your life without it?
                    Perhaps four, five times
                  </p>
                  <p>
                    more, perhaps not even that. How many more times will you
                    watch the full moon
                  </p>
                  <p>rise? Perhaps 20. And yet it all seems limitless.</p>
                  <p className="author">Paul Bowles</p>
                </div>
                <div>
                  <Image
                    src={photoo}
                    alt="photo o"
                    layout="fixed"
                    width={752}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photop}
                    alt="photo p"
                    layout="fixed"
                    width={600}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photoq}
                    alt="photo q"
                    layout="fixed"
                    width={602}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photos}
                    alt="photo s"
                    layout="fixed"
                    width={749}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div>
                  <Image
                    src={photor}
                    alt="photo r"
                    layout="fixed"
                    width={598}
                    height={600}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div className="last">
                  <p className="title">Reminiscencia</p>
                  <p className="author">Gonçalo Costa</p>
                  <p className="date">2011-2012</p>
                  <p className="bibliography">
                    Benjamin, Walter (2006).
                    <i>Berlin Childhood around 1900.</i> The Belknap Press.
                  </p>
                  <p className="bibliography">
                    Burgin, Richard (ed.)(1968).
                    <i>Conversations with Jorge Luis Borges.</i> Souvenir Press.
                  </p>
                  <p className="bibliography">
                    Bowles, Paul (2004). <i>The Sheltering Sky.</i> Penguin
                    classNameics.
                  </p>
                </div>
              </div>
              <div className="slideshow_buttons">
                <a href="#" id="next" className="mCSB_buttonRight"></a>
                <a href="#" id="prev" className="mCSB_buttonLeft"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .my-cycle-slideshow {
          height: 600px;
          margin: auto 10% auto auto;
        }

        .my-cycle-slideshow > div.first {
          display: block;
        }

        .my-cycle-slideshow > div {
          display: none;
          width: 100%;
          text-align: right;
        }

        .slideshow_buttons {
          margin: 0 10% 0 0;
        }

        /* main title */
        .my-cycle-slideshow > div div.main_title {
          width: 600px;
          text-align: center;
          float: right;
        }

        .my-cycle-slideshow > div div.main_title p {
          font-variant: small-caps;
          font-size: 2em;
          font-style: normal;
          letter-spacing: 0.09em;
          margin: 0;
        }

        /* texts */
        .my-cycle-slideshow > div p {
          font-family: georgia, serif;
          line-height: 1.6em;
          font-size: 1.3em;
          font-style: italic;
          letter-spacing: 0.04em;
        }
        .my-cycle-slideshow > div p.author {
          font-variant: small-caps;
          padding-top: 3px;
        }

        /* last slide, info */
        .my-cycle-slideshow > div.last p {
          font-style: normal;
        }

        .my-cycle-slideshow > div.last p.title {
          display: block;
          font-variant: small-caps;
          font-size: 1.9em;
          padding-bottom: 15px;
          letter-spacing: 0.09em;
          margin-top: 400px;
        }

        .my-cycle-slideshow > div.last p.date {
          padding-bottom: 50px;
        }

        .my-cycle-slideshow > div.last p.bibliography {
          font-size: 1.1em;
        }

        .slideshow_buttons {
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

      <Script>{`new ReminiscenciaPage().setup();`}</Script>
    </>
  );
}
