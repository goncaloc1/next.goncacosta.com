import Head from "next/head";
import Link from "next/link";
import styles from "./Alba.module.css";

import Script from "next/script";

export default function Alba() {
  return (
    <>
      <Head>
        <title>Alba TODO</title>
        <meta name="description" content="Alba TODO" />
      </Head>

      <div id="content">
        <div className="wrapper">
          <div className="cell">
            <ul id="navigation_menu">
              <li>
                {/* <a id="back" href="../">
                  <span>back</span>
                </a> */}
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
            </ul>
          </div>
          <div className="cell">
            <div className="header">
              <div id={styles.description}>
                <br />
                <br />
                "El hoy fugaz es tenue y es eterno;
                <br />
                otro Cielo non esperes, ni otro Infierno."
                <br />
                <i>Jorge Luis Borges</i>
              </div>
              <div className="title">
                <div className="title_left">Alba</div>
                <div className="title_right">2011</div>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_a} alt="photo a" src="images/alba/a.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_b} alt="photo b" src="images/alba/b.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_c} alt="photo c" src="images/alba/c.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistant">
              <img id={styles.photo_d} alt="photo d" src="images/alba/d.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className={styles.box_text_wrapper_1}>
              <div className={styles.box_text}>
                "(...)You know this used to be a hell of a good country.
                <br />
                I can't understand what's gone wrong with it.
                <br />
                <br />
                Everybody got chicken, that's what happened.
                <br />
                Hey, we can't even get into a second-rate hotel.
                <br />
                I mean, a second-rate motel, you dig?
                <br />
                They think we'd cut their throat, man.
                <br />
                They're scared, man.
                <br />
                <br />
                They're not scared of you.
                <br />
                They're scared of what you represent to them.
                <br />
                <br />
                Hey man, all we represent to them is somebody who needs a
                haircut.
                <br />
                <br />
                Oh, no.
                <br />
                What you represent to them is freedom.
                <br />
                <br />
                What the hell's wrong with freedom? That's what it's all about.
                <br />
                <br />
                Oh yeah, that's right.
                <br />
                That's what it's all about allright.
                <br />
                But talking about it and being it that's two different things.
                <br />
                I mean, it's real hard to be free when you are bought and sold
                in the marketplace.
                <br />
                Don't tell anybody that they're not free, because they'll get
                busy killing and maiming to prove to you that they are.
                <br />
                Oh yeah they're going to talk to you and talk to you and talk to
                you about individual freedom. <br />
                But they see a free individual, it's going to scare them.
                <br />
                <br />
                Well man, it don't make them running scared.
                <br />
                <br />
                No, it makes them dangerous(...)"
                <br />
                <br />
                <i>Easy Rider, Dennis Hopper</i>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_e} alt="photo e" src="images/alba/e.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_f} alt="photo f" src="images/alba/f.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantX">
              <img id={styles.photo_g} alt="photo g" src="images/alba/g.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className={styles.box_text_wrapper_2}>
              <div className={styles.box_text}>
                22.02.11
                <br />
                "Tenho outra vez aquela sensação de abandono.
                <br />
                Onde está a Alba? <br />
                O céu está lindíssimo, há vento mas as nuvens estão altas não se
                movem(...) <br />
                Já não vejo nada, pouco muito pouco."
                <br />
                <br />
                <br />
                25.02.11
                <br />
                "Beijei-a ontem estávamos meio bêbados. <br />
                Foi bom. Beijei-a hoje estava bastante sóbrio. Também foi bom.
                <br />
                Para a próxima fala menos por favor."
                <br />
                <br />
                <br />
                27.02.11
                <br />
                "(...)'Siempre te justificas' ela disse <br />
                quando fiz mais uma pergunta estúpida, justificando-a. <br />
                Ela é Mulher. É tão bom e é uma merda."
                <br />
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantX">
              <img id={styles.photo_h} alt="photo h" src="images/alba/h.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_i} alt="photo i" src="images/alba/i.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_j} alt="photo j" src="images/alba/j.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantX">
              <img id={styles.photo_k} alt="photo k" src="images/alba/k.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className={styles.box_text_wrapper_3}>
              <div className={styles.box_text}>
                27.03.11
                <br />
                "Everyone failing to have fun."
                <br />
                <i>Max</i>
                <br />
                <br />
                23.04.11
                <br />
                "(...)Muitas vezes o Max perguntava-me angustiado <br />
                'Não temos este tipo de conversas pois não?' <br />
                Ás vezes respondia-lhe que não <br />
                Ás vezes respondia-lhe que não fazia mal <br />
                ter conversas banais. <br />
                Ás vezes, não faz."
                <br />
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_l} alt="photo l" src="images/alba/l.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_m} alt="photo m" src="images/alba/m.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_n} alt="photo n" src="images/alba/n.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_o} alt="photo o" src="images/alba/o.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_p} alt="photo p " src="images/alba/p.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_q} alt="photo q" src="images/alba/q.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantX">
              <img id={styles.photo_r} alt="photo r" src="images/alba/r.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className={styles.box_text_wrapper_4}>
              <div className={styles.box_text}>
                "(...)I don't care, I move.
                <br />
                <br />
                Maybe you're freer than I am. Good for you.
                <br />
                I chose a middle road between loneliness and freedom.
                <br />
                <br />
                People bugged me for a long time, but that's all over now.
                <br />
                <br />
                You chose total freedom but you got total loneliness.
                <br />
                The time comes when if you go on, you destroy yourself.
                <br />
                You head for destruction.
                <br />
                If you want to live, you stop.
                <br />
                My friends who stayed on the road are dead now, or
                <br />
                else they fell apart alcoholics, or junkies.
                <br />
                Because the loneliness ate them up, in the end."
                <br />
                <br />
                <i>Sans Toit Ni Loi, Agnès Varda</i>
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_s} alt="photo s" src="images/alba/s.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_t} alt="photo t" src="images/alba/t.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistant">
              <img id={styles.photo_u} alt="photo u" src="images/alba/u.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_v} alt="photo v" src="images/alba/v.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistant">
              <img id={styles.photo_w} alt="photo w" src="images/alba/w.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className={styles.box_text_wrapper_5}>
              <div className={styles.box_text}>
                06.06.11
                <br />
                "(...)Lembro-me de mim no terminal em Santiago deu-me lágrimas,
                um fim, outro fim. <br />
                Quero casa, embora não saiba muito bem o que significa isso.
                <br />
                Talvez mordomias. E estas esgotam-se muito depressa. Tenho a
                certeza. <br />
                Depois de uma semana quererei algo mais. E neste preciso momento
                sinto que quero assentar. <br />
                Já ontem senti isso e outros tantos dias atrás. Assentar mas não
                parar. <br />
                Será que serei suficientemente fiel a uma mulher mesmo que a
                ame?
                <br />
                E agora que sei que amor em viagem é ilusório. Bom mas irreal.
                <br />
                Porque nasce em circunstâncias que não são normais. <br />
                Um amor de rotina talvez seja o que queira agora. Sei lá(...)"
                <br />
              </div>
            </div>
          </div>
          <div className="cell">
            <div className="box">
              <img id={styles.photo_x} alt="photo x" src="images/alba/x.jpg" />
            </div>
          </div>
          <div className="cell">
            <div className="boxDistantXX">
              <img id={styles.photo_y} alt="photo y" src="images/alba/y.jpg" />
            </div>
          </div>
        </div>
      </div>

      <Script>{`new AlbaPage().setup();`}</Script>
    </>
  );
}
