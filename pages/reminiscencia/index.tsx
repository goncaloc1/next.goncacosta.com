import Head from "next/head";
import Link from "next/link";
import styles from "./Reminiscencia.module.css";

import Script from "next/script";

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
                  <img
                    id={styles.photo_u}
                    src="images/reminiscencia/u.jpg"
                    alt="photo u"
                  />
                </div>
                <div>
                  <div className="main_title">
                    <p>Reminiscencia</p>
                  </div>
                </div>
                <div>
                  <img
                    id={styles.photo_a}
                    src="images/reminiscencia/a.jpg"
                    alt="photo a"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_b}
                    src="images/reminiscencia/b.jpg"
                    alt="photo b"
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
                  <img
                    id={styles.photo_c}
                    src="images/reminiscencia/c.jpg"
                    alt="photo c"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_d}
                    src="images/reminiscencia/d.jpg"
                    alt="photo d"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_e}
                    src="images/reminiscencia/e.jpg"
                    alt="photo e"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_f}
                    src="images/reminiscencia/f.jpg"
                    alt="photo f"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_g}
                    src="images/reminiscencia/g.jpg"
                    alt="photo g"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_t}
                    src="images/reminiscencia/t.jpg"
                    alt="photo t"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_h}
                    src="images/reminiscencia/h.jpg"
                    alt="photo h"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_i}
                    src="images/reminiscencia/i.jpg"
                    alt="photo i"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_j}
                    src="images/reminiscencia/j.jpg"
                    alt="photo j"
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
                  <img
                    id={styles.photo_k}
                    src="images/reminiscencia/k.jpg"
                    alt="photo k"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_l}
                    src="images/reminiscencia/l.jpg"
                    alt="photo l"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_m}
                    src="images/reminiscencia/m.jpg"
                    alt="photo m"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_n}
                    src="images/reminiscencia/n.jpg"
                    alt="photo n"
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
                  <img
                    id={styles.photo_o}
                    src="images/reminiscencia/o.jpg"
                    alt="photo o"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_p}
                    src="images/reminiscencia/p.jpg"
                    alt="photo p"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_q}
                    src="images/reminiscencia/q.jpg"
                    alt="photo q"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_s}
                    src="images/reminiscencia/s.jpg"
                    alt="photo s"
                  />
                </div>
                <div>
                  <img
                    id={styles.photo_r}
                    src="images/reminiscencia/r.jpg"
                    alt="photo r"
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
                <a href="#" id="next" className={styles.rightbutton}></a>
                <a href="#" id="prev" className={styles.leftbutton}></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .my-cycle-slideshow {
          height: 600px;
          margin: auto;
        }

        .my-cycle-slideshow > div.first {
          display: block;
        }

        .my-cycle-slideshow > div {
          display: none;
          width: 100%;
          text-align: right;
        }

        .my-cycle-slideshow > div img,
        .my-cycle-slideshow > div p,
        .my-cycle-slideshow > div div.main_title,
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
      `}</style>

      <Script>{`new ReminiscenciaPage().setup();`}</Script>
    </>
  );
}
